import { reactive, toRef } from 'vue';

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  // Begrüßung und Fehlermeldungen werden angezeigt, aber nicht an den Sommelier geschickt.
  local?: boolean;
}

const GREETING = 'Hola! Ich bin der digitale Sommelier der Casa Vazquez. Sag mir, worauf du Lust hast oder was du isst, und ich empfehle dir einen passenden Wein von unserer Karte. 🍷';
const GENERIC_ERROR = 'Entschuldigung, da ist etwas schiefgelaufen. Bitte versuch es gleich nochmal.';

// Module-level singleton: Toggle-Button und Chatfenster teilen sich den Zustand.
const chatState = reactive({
  messages: [] as ChatMessage[],
  isLoading: false,
  isOpen: false,
});

function addMessage(content: string, isUser: boolean, local = false) {
  chatState.messages.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    content,
    isUser,
    local,
  });
}

// Was laut Live-Verfügbarkeit gerade aus ist, damit der Sommelier es nicht empfiehlt.
// Dynamisch importiert, damit Firebase und die Karten-Daten nicht im Start-Bundle landen.
async function loadUnavailable(): Promise<{ wines: string[]; snacks: string[] }> {
  try {
    const [{ useAvailability, availabilityId, availabilityReady }, { vinos }, { snackData }] = await Promise.all([
      import('./useAvailability'),
      import('../data/vinos'),
      import('../../../data/snacks'),
    ]);
    // Auf Seiten ohne Karte (z. B. /home) ist die Live-Verfügbarkeit noch nicht geladen.
    await availabilityReady();
    const { isAvailable, isHidden } = useAvailability();
    const isOff = (id: string) => !isAvailable(id) || isHidden(id);
    return {
      wines: vinos.filter(wine => isOff(availabilityId('Wein', String(wine.id)))).map(wine => String(wine.id)),
      snacks: snackData.filter(snack => isOff(availabilityId('Snacks', snack.name))).map(snack => snack.name),
    };
  } catch {
    return { wines: [], snacks: [] };
  }
}

export function useChat() {
  const sendMessage = async (text: string) => {
    const message = text.trim();
    if (!message || chatState.isLoading) return;

    addMessage(message, true);
    chatState.isLoading = true;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000);
    try {
      const response = await fetch('/api/sommelier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: chatState.messages
            .filter(entry => !entry.local)
            .map(entry => ({ role: entry.isUser ? 'user' : 'assistant', content: entry.content })),
          unavailable: await loadUnavailable(),
        }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && typeof data.reply === 'string') {
        addMessage(data.reply, false);
      } else {
        addMessage(typeof data.error === 'string' ? data.error : GENERIC_ERROR, false, true);
      }
    } catch (error) {
      console.error('[sommelier] request failed', error);
      addMessage(GENERIC_ERROR, false, true);
    } finally {
      clearTimeout(timeoutId);
      chatState.isLoading = false;
    }
  };

  const toggleChat = () => {
    chatState.isOpen = !chatState.isOpen;
    if (chatState.isOpen && chatState.messages.length === 0) {
      addMessage(GREETING, false, true);
    }
  };

  const clearChat = () => {
    chatState.messages = [];
    addMessage(GREETING, false, true);
  };

  return {
    messages: toRef(chatState, 'messages'),
    isLoading: toRef(chatState, 'isLoading'),
    isOpen: toRef(chatState, 'isOpen'),
    sendMessage,
    toggleChat,
    clearChat,
  };
}
