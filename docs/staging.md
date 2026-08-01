# Staging-Umgebung

Seit August 2026 gibt es neben der Produktion einen separaten `staging`-Branch
und einen zweiten, komplett unabhängigen Cloud-Run-Service
(`casavazquez-staging`). Neue Änderungen sollen künftig **zuerst** dahin
deployed und geprüft werden, bevor sie nach `main` (Produktion) gehen.

## Nutzung

1. Änderungen auf dem `staging`-Branch (oder einem Feature-Branch, der dann
   nach `staging` gemerged wird) entwickeln.
2. Deployen: `npm run deploy:staging`
   - Baut `website/` neu.
   - Deployed **nur** den Service `casavazquez-staging`.
   - Rührt die Produktion (`casavazquez-website-update`) nicht an.
3. Auf der Staging-URL testen:
   https://casavazquez-staging-390932826487.europe-central2.run.app
4. Wenn alles passt: `staging` nach `main` mergen und mit `npm run deploy`
   in Produktion ausrollen.

## Wichtig

- Beide Umgebungen laufen aktuell auf **derselben** Firebase/Firestore-
  Instanz (kein separates Staging-Firestore). Das heißt: Verfügbarkeits-
  Toggles, die über die Admin-Seite gesetzt werden, wirken sich auf **beide**
  Umgebungen aus. Für echte Trennung müsste ein zweites Firebase-Projekt
  angelegt und `website/.env` je Umgebung unterschiedlich konfiguriert werden
  — bisher nicht gemacht, um Aufwand/Kosten gering zu halten.
- Kein automatisches CI/CD — Deploys sind weiterhin manuelle Kommandos
  (`npm run deploy` / `npm run deploy:staging`), es passiert nichts von
  selbst beim Pushen nach GitHub.
- Kosten: der zusätzliche Cloud-Run-Service kostet nur bei tatsächlicher
  Nutzung etwas (Cloud Run skaliert bei 0 Traffic auf 0 Instanzen herunter,
  `--max-instances=1` begrenzt zusätzlich die Kosten nach oben).
