import Anthropic from '@anthropic-ai/sdk';
import type { Request, Response } from 'express';
import { vinos } from './data/vinos';
import { snackData } from './data/snacks';

const MODEL = 'claude-sonnet-5-5';

// Limits, damit der öffentliche Endpunkt nicht teuer werden kann.
const MAX_MESSAGE_CHARS = 500;
const MAX_REPLY_CHARS = 4000;
const MAX_HISTORY = 10;
// Großzügig, weil sich Gäste im Bar-WLAN eine IP-Adresse teilen.
const PER_IP_LIMIT = 30;
const PER_IP_WINDOW_MS = 10 * 60 * 1000;
// Ein einzelner Anschluss darf nicht das ganze Tagesbudget aufbrauchen.
const PER_IP_DAILY_LIMIT = 60;
const DAILY_LIMIT = 175;

// Gesperrte IP-Adressen, kommagetrennt in der Umgebungsvariable SOMMELIER_BLOCKED_IPS.
// Wer ein Limit reißt, steht mit IP im Server-Log ("[sommelier] limit").
const blockedIps = new Set(
    (process.env.SOMMELIER_BLOCKED_IPS ?? '').split(',').map(ip => ip.trim()).filter(Boolean),
);

const colorLabels: Record<string, string> = { red: 'Rotwein', white: 'Weißwein', 'rosé': 'Rosé' };

const snacksOnMenu = snackData.filter(snack => snack.available !== false);

function wineLine(wine: (typeof vinos)[number]): string {
    const prices = [
        wine.prices['0.1l'] && `0,1l ${wine.prices['0.1l']}`,
        wine.prices['0.2l'] && `0,2l ${wine.prices['0.2l']}`,
        `Flasche ${wine.prices.flasche}`,
    ].filter(Boolean).join(', ');
    const details = [
        colorLabels[wine.color] ?? wine.color,
        wine.grape,
        wine.origin,
        wine.characteristics,
        wine.shortDescription,
        wine.longDescription,
    ].filter(Boolean).join(' | ');
    return `- ${wine.name} (${prices}): ${details}`;
}

function snackLine(snack: (typeof snackData)[number]): string {
    const tags = [snack.vegan ? 'vegan' : snack.veggie ? 'vegetarisch' : null].filter(Boolean).join(', ');
    return `- ${snack.name} (${snack.price}€)${snack.description ? `: ${snack.description}` : ''}${tags ? ` [${tags}]` : ''}`;
}

// Wird einmal beim Start gebaut und bleibt byte-identisch, damit der Prompt-Cache greift.
const SYSTEM_PROMPT = `Du bist der digitale Sommelier der Bar Casa Vazquez, einer spanischen Wein- und Tapasbar. Gäste schreiben dir vom Handy aus, meist direkt am Tisch, und möchten wissen, welcher Wein zu ihrem Geschmack oder zu ihrem Essen passt.

So berätst du:
- Empfiehl ausschließlich Weine und Snacks von der Karte unten. Erfinde nichts dazu; wenn etwas nicht auf der Karte steht, sag das offen und schlage die nächstbeste Alternative von der Karte vor.
- Gib ein bis drei Empfehlungen, jeweils mit Preis und einem kurzen Grund, warum der Wein passt. Wenn es sich anbietet, nenne einen passenden Snack dazu.
- Schreib kurz, herzlich und unkompliziert auf Deutsch, so wie eine gute Bedienung am Tisch spricht, und duze die Gäste. Antworte in der Sprache des Gastes, falls er nicht Deutsch schreibt.
- Die Antwort wird in einem kleinen Chatfenster angezeigt: kurze Absätze, Weinnamen mit **Sternchen** hervorheben, keine Überschriften oder Tabellen.
- Wenn der Wunsch zu vage ist, stell eine kurze Rückfrage (z. B. eher trocken oder fruchtig?).
- Zu Allergenen und Unverträglichkeiten gibst du keine verbindliche Auskunft; verweise dafür ans Personal.
- Bei Fragen, die nichts mit Wein, Essen oder der Bar zu tun haben, lenk freundlich zurück zur Weinberatung.

Weinkarte:
${vinos.map(wineLine).join('\n')}

Snacks:
${snacksOnMenu.map(snackLine).join('\n')}`;

const wineNamesById = new Map(vinos.map(wine => [String(wine.id), wine.name]));
const snackNames = new Set(snacksOnMenu.map(snack => snack.name));

const requestsByIp = new Map<string, number[]>();
const dailyCountByIp = new Map<string, number>();
const loggedIps = new Set<string>();
let dailyCount = 0;
let dailyCountDay = '';

type Verdict = 'ok' | 'ip' | 'ip-daily' | 'daily' | 'blocked';

function allowRequest(ip: string): Verdict {
    if (blockedIps.has(ip)) return 'blocked';

    const now = Date.now();
    const today = new Date(now).toISOString().slice(0, 10);
    if (today !== dailyCountDay) {
        dailyCountDay = today;
        dailyCount = 0;
        requestsByIp.clear();
        dailyCountByIp.clear();
        loggedIps.clear();
    }

    const recent = (requestsByIp.get(ip) ?? []).filter(time => now - time < PER_IP_WINDOW_MS);
    requestsByIp.set(ip, recent);
    const ipToday = dailyCountByIp.get(ip) ?? 0;

    let verdict: Verdict = 'ok';
    if (ipToday >= PER_IP_DAILY_LIMIT) verdict = 'ip-daily';
    else if (recent.length >= PER_IP_LIMIT) verdict = 'ip';
    else if (dailyCount >= DAILY_LIMIT) verdict = 'daily';

    if (verdict !== 'ok') {
        // Einmal pro Tag und IP protokollieren, damit sich Störer im Log finden und sperren lassen.
        if (verdict !== 'daily' && !loggedIps.has(ip)) {
            loggedIps.add(ip);
            console.warn(`[sommelier] limit (${verdict}) reached by ${ip}`);
        }
        return verdict;
    }

    recent.push(now);
    dailyCountByIp.set(ip, ipToday + 1);
    dailyCount++;
    return 'ok';
}

function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
    const raw = (body as { messages?: unknown })?.messages;
    if (!Array.isArray(raw) || raw.length === 0) return null;

    const messages: Anthropic.Beta.BetaMessageParam[] = [];
    for (const entry of raw.slice(-MAX_HISTORY)) {
        const { role, content } = (entry ?? {}) as { role?: unknown; content?: unknown };
        if ((role !== 'user' && role !== 'assistant') || typeof content !== 'string' || !content.trim()) return null;
        if (content.length > (role === 'user' ? MAX_MESSAGE_CHARS : MAX_REPLY_CHARS)) return null;
        messages.push({ role, content: content.trim() });
    }
    while (messages.length && messages[0].role !== 'user') messages.shift();
    if (!messages.length || messages[messages.length - 1].role !== 'user') return null;
    return messages;
}

// Der Client meldet, was laut Live-Verfügbarkeit gerade aus ist. Es werden nur
// bekannte Einträge übernommen, der Client kann also nichts in den Prompt schreiben.
function soldOutNote(body: unknown): string | null {
    const unavailable = (body as { unavailable?: { wines?: unknown; snacks?: unknown } })?.unavailable;
    const wines = Array.isArray(unavailable?.wines) ? unavailable.wines : [];
    const snacks = Array.isArray(unavailable?.snacks) ? unavailable.snacks : [];
    const names = [
        ...wines.map(id => wineNamesById.get(String(id))),
        ...snacks.filter(name => snackNames.has(name)),
    ].filter(Boolean);
    if (!names.length) return null;
    return `Hinweis vom System: Heute nicht verfügbar und daher nicht zu empfehlen: ${[...new Set(names)].join(', ')}.`;
}

let client: Anthropic | null = null;

export async function sommelierHandler(req: Request, res: Response) {
    if (!process.env.ANTHROPIC_API_KEY) {
        res.status(503).json({ error: 'Der Sommelier ist gerade nicht erreichbar.' });
        return;
    }

    const messages = parseMessages(req.body);
    if (!messages) {
        res.status(400).json({ error: 'Ungültige Anfrage.' });
        return;
    }

    const allowed = allowRequest(req.ip ?? 'unknown');
    if (allowed !== 'ok') {
        res.status(429).json({
            error: allowed === 'ip'
                ? 'Das waren viele Fragen auf einmal. Bitte versuch es in ein paar Minuten nochmal.'
                : 'Der Sommelier macht für heute Pause. Frag gern unser Team an der Bar!',
        });
        return;
    }

    const note = soldOutNote(req.body);
    if (note) {
        const last = messages[messages.length - 1];
        last.content = [
            { type: 'text', text: last.content as string },
            { type: 'text', text: note },
        ];
    }

    try {
        client ??= new Anthropic();
        const response = await client.beta.messages.create({
            model: MODEL,
            max_tokens: 4000,
            betas: ['server-side-fallback-2026-07-01'],
            fallbacks: 'default',
            output_config: { effort: 'low' },
            system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
            messages,
        });

        const { input_tokens, output_tokens, cache_read_input_tokens, cache_creation_input_tokens } = response.usage;
        console.log('[sommelier] usage', { input_tokens, output_tokens, cache_read_input_tokens, cache_creation_input_tokens });

        const reply = response.content
            .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === 'text')
            .map(block => block.text)
            .join('\n')
            .trim();

        if (response.stop_reason === 'refusal' || !reply) {
            res.json({ reply: 'Dabei kann ich leider nicht helfen. Aber sag mir gern, worauf du Lust hast, dann finde ich einen passenden Wein für dich.' });
            return;
        }
        res.json({ reply });
    } catch (error) {
        if (error instanceof Anthropic.RateLimitError) {
            console.error('[sommelier] rate limited by API');
            res.status(429).json({ error: 'Gerade ist viel los. Bitte versuch es gleich nochmal.' });
        } else if (error instanceof Anthropic.APIError) {
            console.error(`[sommelier] API error ${error.status}:`, error.message);
            res.status(502).json({ error: 'Der Sommelier ist gerade nicht erreichbar.' });
        } else {
            console.error('[sommelier] unexpected error', error);
            res.status(500).json({ error: 'Der Sommelier ist gerade nicht erreichbar.' });
        }
    }
}
