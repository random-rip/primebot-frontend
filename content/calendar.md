---
contentTitle: PRM Matches in deinem Kalender
title: Kalender Integration
---

## Kalender Integration

*Disclaimer: Die Integration befindet sich noch in der Beta-Phase und kann noch Fehler enthalten.
Lasst uns wissen, wenn ihr Fehler findet oder Verbesserungsvorschläge habt. Joint dazu einfach
unserem [Discord-Server](https://discord.gg/K8bYxJMDzu).*

**Disclaimer: Nur Daten von registrierten Teams (die den PrimeBot benutzen) sind verfügbar.**

Alle Matches eures Teams könnt ihr in euren Kalender integrieren. Wenn ihr den Kalender abonniert, werden
neue Matches automatisch hinzugefügt und Matches, die abgesagt oder verschoben wurden, automatisch aktualisiert.

Die Termine werden standardmäßig in eurer Zeitzone angezeigt und mit einer Dauer von 2 Stunden eingetragen.

In den Informationen eines Termins findet ihr folgende Informationen:

- Den Spieltag und den Link zum Match auf der Prime League Website
- Den op.gg-Link eures Gegners
- Den op.gg-Link des Lineups eures Gegners sofern verfügbar
- Informationen, ob Terminvorschläge von euch oder den Gegnern offen sind oder ein Termin festgelegt worden ist.
  - Das Emoji im Titel verrät euch, ob ein Termin bereits festgelegt worden ist:
    - ⚔ Spieltermin festgelegt
    - 📆 Keine Termine wurden vorgeschlagen
    - ✅ Terminvorschläge von euch sind offen
    - ⚠ Terminvorschläge eures Gegners sind offen!

## Kalender Abonnieren

### Google Kalender

Ihr könnt die Prime League Matches in euren Google Kalender integrieren. Dazu müsst ihr nur eure TEAM-ID
ermitteln und im Link ersetzen und den Link in euren Google Kalender importieren.

1. Ermittelt eure TEAM-ID. Diese findet ihr in der URL eures Teams auf der Prime League Website.
   Beispiel: `https://www.primeleague.gg/leagues/teams/105959-les-primebot-devs` → `105959` ist die TEAM-ID.
2. Ersetzt `TEAM-ID` im folgenden Link durch eure TEAM-ID:
   `https://primebot.de/api/v1/teams/<TEAM-ID>/feed` → `https://primebot.de/api/v1/teams/105959/feed`
3. Fügt den Link in euren Google Kalender hinzu:
    1. Einfach auf diesen Link am Computer klicken: https://calendar.google.com/calendar/u/0/r/settings/addbyurl
    2. Oder manuell:
       - Öffnet euren Google Kalender auf dem Computer
       - Klickt auf das "+"-Symbol neben "Weitere Kalender"
       - Wählt "Per URL" aus
       - Fügt den Link ein und klickt auf "Kalender hinzufügen"
4. Fertig!

### Thunderbird Kalender

Ihr könnt die Prime League Matches in euren Thunderbird Kalender integrieren. Dazu müsst ihr nur eure TEAM-ID
ermitteln und im Link ersetzen und den Link in euren Thunderbird Kalender importieren.

1. Ermittelt eure TEAM-ID. Diese findet ihr in der URL eures Teams auf der Prime League Website.
   Beispiel: `https://www.primeleague.gg/leagues/teams/105959-les-primebot-devs` → `105959` ist die TEAM-ID.
2. Ersetzt `TEAM-ID` im folgenden Link durch eure TEAM-ID:
   `https://primebot.de/api/v1/teams/<TEAM-ID>/feed` → `https://primebot.de/api/v1/teams/105959/feed`
3. Fügt den Link in euren Thunderbird Kalender hinzu:
   - Öffnet euren Thunderbird Kalender
   - Klickt auf das "+"-Symbol neben "Kalender"
   - Wählt "Im Internet" aus
   - Fügt den Link ein und klickt auf "Weiter"
   - Update-Intervall von 30 Minuten auswählen und auf "Weiter" klicken
   - Kalendernamen eingeben und auf "Weiter" klicken
   - Klickt auf "Fertig"
4. Fertig!

### Apple Kalender

Ihr könnt die Prime League Matches in euren Apple Kalender integrieren. Dazu müsst ihr nur eure TEAM-ID
ermitteln und im Link ersetzen und den Link in euren Apple Kalender importieren.

1. Ermittelt eure TEAM-ID. Diese findet ihr in der URL eures Teams auf der Prime League Website.
   Beispiel: `https://www.primeleague.gg/leagues/teams/105959-les-primebot-devs` → `105959` ist die TEAM-ID.
2. Ersetzt `TEAM-ID` im folgenden Link durch eure TEAM-ID:
   `https://primebot.de/api/v1/teams/<TEAM-ID>/feed` → `https://primebot.de/api/v1/teams/105959/feed`
3. Fügt den Link in euren Apple Kalender hinzu:
   - Öffnet euren Apple Kalender auf dem Computer
   - Klickt auf "Ablage" → "Neues Kalenderabo"
   - Fügt den Link ein und klickt auf "Abonnieren"
   - Gebt einen Namen für den Kalender ein und klickt auf "OK"
   - Klickt auf "Fertig"
- Fertig!

### Outlook Kalender

Aus irgendeinem Grund ist es nicht möglich, den Kalender in Outlook hinzuzufügen. Wenn ihr wisst, wie es geht,
lasst es uns bitte wissen. Joint dazu einfach unserem [Discord-Server](https://discord.gg/K8bYxJMDzu).
