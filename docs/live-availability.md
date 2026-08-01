# Live-Verfügbarkeit ("Cola aus"-Schalter)

Diese Funktion erlaubt es, einzelne Produkte (Weine, Getränke, Cocktails,
Snacks) **sofort** auf der Website auszublenden, z.B. wenn etwas kurzfristig
ausverkauft ist — ganz ohne Code-Änderung oder Redeploy.

## Wie es funktioniert

- Es gibt zwei Ebenen, ob ein Produkt sichtbar ist:
  1. **Struktureller Status** (`available` im Quelltext, z.B. in
     `data/tintos.ts`, `DrinkMenu.vue`, `CocktailsPage.vue`, `SnackMenu.vue`).
     Das ändert sich nur per Code-Änderung + Deploy (z.B. Produkt dauerhaft
     aus dem Sortiment nehmen).
  2. **Live-Override** in Firebase Firestore (Collection `availability`).
     Das kann jederzeit per Handy/Browser über die Admin-Seite geändert
     werden und wirkt sofort, ohne Deploy.
- Ein Live-Override kann ein Produkt nur **zusätzlich verstecken**, niemals
  ein strukturell deaktiviertes Produkt wieder sichtbar machen.
- Die Website liest den Live-Status per Firestore `onSnapshot` (Echtzeit-
  Abo), siehe `website/src/composables/useAvailability.ts`.

## Admin-Seite

- URL: `/admin/verfuegbarkeit` (z.B. `https://<domain>/admin/verfuegbarkeit`)
- Login mit E-Mail/Passwort (Firebase Authentication).
- Zeigt alle Produkte gruppiert (Wein, Bier, Softdrinks, Spritz, Gin,
  Schnapps, Alkoholfrei, Cocktails, Snacks) mit einem Ein/Aus-Schalter.
- Ein Klick auf den Schalter schreibt sofort in Firestore
  (`availability/{id}`), die Website übernimmt die Änderung live.

### Admin-Zugang zurücksetzen

Im [Firebase Console](https://console.firebase.google.com/) → Projekt
`casavazquez-ca639` → **Authentication** → Reiter **Users**: dort kann das
Passwort des Admin-Kontos zurückgesetzt oder ein weiteres Konto angelegt
werden.

## Firestore-Konfiguration

- Projekt: `casavazquez-ca639` (Firebase Spark/kostenloser Plan).
- Collection: `availability`, ein Dokument pro Produkt
  (`{ available: boolean, updatedAt: timestamp }`).
- Sicherheitsregeln: siehe [`firestore.rules`](../firestore.rules) im
  Repo-Root. Diese müssen manuell im Firebase Console unter
  **Firestore Database → Regeln** eingefügt und veröffentlicht werden
  (kann nicht automatisch aus dem Repo deployed werden, außer man richtet
  die Firebase CLI mit einem Service-Account dafür ein).
- Firebase-Konfiguration (Web SDK) liegt in `website/.env` (nicht im Git,
  siehe `website/.env.example` für die benötigten Variablennamen).

## Kosten

Alles läuft auf dem kostenlosen Firebase "Spark"-Plan (kein Kreditkarten-
Zwang, kein automatisches Hochstufen). Für die geringe Anzahl an
Lese-/Schreibzugriffen eines einzelnen Restaurant-Menüs bleibt das dauerhaft
im kostenlosen Kontingent.
