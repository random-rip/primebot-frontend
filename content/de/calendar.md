---
title: Kalender Integration
description: Integriere die Matches deines Teams in deinen Kalender.
---

# Kalender Integration

::callout
---
color: warning
icon: i-lucide-triangle-alert
---
Die Integration befindet sich noch in der Beta-Phase und kann Fehler enthalten.
Lasst uns wissen, wenn ihr Fehler findet oder Verbesserungsvorschläge habt. Joint dazu einfach
unserem [Discord-Server](https://discord.gg/K8bYxJMDzu).
::

::callout{icon="i-lucide-info"}
Nur Daten von registrierten Teams (die den PrimeBot benutzen) sind verfügbar.
::

::u-page-section
#title
Features

#description
Alles was du über die Kalender-Integration wissen musst.

#features
  :::u-page-feature
  ---
  icon: i-lucide-refresh-cw
  title: Auto-Sync
  ---
  #description
  Alle Matches eures Teams werden automatisch in euren Kalender integriert.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-calendar-sync
  title: Auto-Update
  ---
  #description
  Abgesagte oder verschobene Matches werden automatisch aktualisiert.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe
  title: Zeitzonen
  ---
  #description
  Termine werden in eurer Zeitzone angezeigt und mit einer Dauer von 2 Stunden eingetragen.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-swords
  title: Match-Infos
  ---
  #description
  Spieltag, Link zum Match auf der Prime League Website und op.gg-Links eurer Gegner.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-search
  title: Scouting
  ---
  #description
  op.gg-Links des Lineups eures Gegners sofern verfügbar.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-signal
  title: Status-Indikatoren
  ---
  #description
  Emojis im Titel zeigen den Status: ⚔ Termin festgelegt · 📆 Keine Vorschläge · ✅ Eure Vorschläge offen · ⚠ Gegner-Vorschläge offen
  :::
::

## Kalender Abonnieren

**Voraussetzung:** Für die Kalender-Integration benötigt ihr die TEAM-ID eures Teams. Diese findet ihr in der URL eures Teams auf der
Prime League Website. Die Team-ID ist die Zahl im letzten Teil der URL und besteht meistens aus 6-8 Ziffern.

Eure Team-ID muss dann im folgenden Feed-Link ersetzt werden: `https://primebot.me/api/v1/teams/TEAM-ID/feed`

**Beispiel:** Euer Team ist unter der Adresse `https://www.primeleague.gg/leagues/teams/105959-les-primebot-devs`
erreichbar — `105959` ist die TEAM-ID.
Der Feed-Link für euer Team lautet dann: `https://primebot.me/api/v1/teams/105959/feed`

### Google Kalender

::steps
### Kalender-Einstellungen öffnen

Öffnet [diese Seite](https://calendar.google.com/calendar/u/0/r/settings/addbyurl) am Computer.

Oder manuell: Öffnet euren Google Kalender auf dem Computer, klickt auf das "+"-Symbol neben "Weitere Kalender" und wählt "Per URL" aus.

### Feed-Link einfügen

Fügt euren Feed-Link ein und klickt auf "Kalender hinzufügen".
::

*Quelle: [Google Support](https://support.google.com/calendar/answer/37100?hl=de&co=GENIE.Platform%3DDesktop)*

### Apple Kalender

::steps
### Neues Kalenderabonnement

Öffnet euren Apple Kalender auf dem Computer und wählt "Ablage" > "Neues Kalenderabonnement".

### Feed-Link einfügen

Fügt euren Feed-Link in das Feld "Kalender-URL" ein und klickt auf "Abonnieren".

### Kalender konfigurieren

Gebt einen Namen für den Kalender ein (z.B. "Prime League") und wählt eine Farbe aus.
Wählt im Menü "Ort" die Option "iCloud" aus, damit der Kalender auf all euren Geräten verfügbar ist, und klickt auf "OK".
::

*Quelle: [Apple Support](https://support.apple.com/de-de/102301)*

### Thunderbird Kalender

::steps
### Neuen Kalender erstellen

Öffnet Thunderbird und wählt auf dem Tab "Home" die Option "Neuen Kalender erstellen" > "Im Netzwerk" > "iCalendar (ICS)".

### Feed-Link einfügen

Fügt euren Feed-Link in das Feld "Standort" ein und klickt auf "Weiter".

### Kalender benennen

Benennt den Kalender (z.B. "Prime League") und klickt auf "Fertig".
::

*Quelle: [Mozilla Support](https://support.mozilla.org/de/kb/Ferienkalender-hinzufuegen)*

### Outlook Kalender

::callout{color="warning" icon="i-lucide-triangle-alert"}
Aus einem uns unbekannten Grund ist es nicht möglich, den Kalender in Outlook hinzuzufügen. Wenn ihr wisst, wie es geht,
lasst es uns bitte wissen. Joint dazu einfach unserem [Discord-Server](https://discord.gg/K8bYxJMDzu).
::
