# Staging-Umgebung

Seit August 2026 gibt es neben der Produktion einen separaten `staging`-Branch
und einen zweiten, komplett unabhängigen Cloud-Run-Service
(`casavazquez-staging`). Neue Änderungen sollen künftig **zuerst** dahin
deployed und geprüft werden, bevor sie nach `main` (Produktion) gehen.

## Nutzung (seit CI/CD-Umstellung)

Deploys laufen **automatisch per GitHub Actions**, sobald nach `staging`
bzw. `main` gepusht/gemerged wird — nicht mehr manuell vom Laptop aus:

1. Änderungen auf einem Feature-Branch entwickeln, PR nach `staging` stellen
   und mergen.
2. GitHub Actions (`.github/workflows/deploy-staging.yml`) baut die Website
   und deployed automatisch nach `casavazquez-staging`. Fortschritt siehe
   GitHub → Actions-Tab.
3. Auf der Staging-URL testen:
   https://casavazquez-staging-390932826487.europe-central2.run.app
4. Wenn alles passt: `staging` nach `main` mergen. GitHub Actions
   (`.github/workflows/deploy-production.yml`) deployed automatisch nach
   `casavazquez-website-update` (Produktion).

`npm run deploy` / `npm run deploy:staging` sind absichtlich deaktiviert
(siehe `package.json`) — jeder manuelle lokale Deploy-Versuch bricht mit
einem Hinweis ab. Grund: mehrere lokale Checkouts (verschiedene Sessions,
VSCode-Ordner) konnten sich sonst gegenseitig mit veraltetem Code
überschreiben, was mehrfach zu Produktionsausfällen geführt hat. Die
einzige Quelle der Wahrheit ist jetzt der Stand auf GitHub in `main` /
`staging`.

## Wichtig

- Beide Umgebungen laufen aktuell auf **derselben** Firebase/Firestore-
  Instanz (kein separates Staging-Firestore). Das heißt: Verfügbarkeits-
  Toggles, die über die Admin-Seite gesetzt werden, wirken sich auf **beide**
  Umgebungen aus. Für echte Trennung müsste ein zweites Firebase-Projekt
  angelegt und `website/.env` je Umgebung unterschiedlich konfiguriert werden
  — bisher nicht gemacht, um Aufwand/Kosten gering zu halten.
- Der Firebase-Config-Inhalt (`website/.env`) liegt als GitHub-Secret
  `WEBSITE_ENV_FILE` im Repo und wird beim CI-Build automatisch nach
  `website/.env` geschrieben — er ist nirgends im Repo selbst eingecheckt.
- Authentifizierung von GitHub Actions gegenüber GCP läuft über Workload
  Identity Federation (Service-Account `github-actions-deploy`, Pool
  `github-actions-pool`), also ohne langlebigen Schlüssel-Datei-Export.
- Kosten: der zusätzliche Cloud-Run-Service kostet nur bei tatsächlicher
  Nutzung etwas (Cloud Run skaliert bei 0 Traffic auf 0 Instanzen herunter,
  `--max-instances=1` begrenzt zusätzlich die Kosten nach oben).
