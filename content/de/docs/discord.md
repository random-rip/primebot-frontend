---
title: PrimeBot für Discord
description: Einrichtung und Nutzung des PrimeBot für Discord.
---

# PrimeBot für Discord

## Erste Schritte

::steps
### Bot hinzufügen
Stelle sicher, dass du die entsprechenden Rechte hast, einen Bot zum Server hinzuzufügen.
Füge den Bot über [diesen Link](https://discord.com/oauth2/authorize?client_id=739550721703280700) zum Server hinzu.

### Team registrieren
Schreibe `/start TEAM_LINK` und ersetze `TEAM_LINK` mit deinem Team-Link von der Prime League.

Beispiel: `/start https://www.primeleague.gg/leagues/teams/105959-leipzig-esports-e-v-ttt`

### Personalisieren
Mit `/settings` kannst du die Benachrichtigungen personalisieren, eine andere Scouting-Website festlegen oder eine Discordrolle festlegen.
::

## Features

::u-page-section
#title
Features

#description
Alles was du brauchst, um dein Prime League Team zu organisieren.

#features
  :::prime-bot-feature
  ---
  icon: i-lucide-bell
  ---
  #title
  Terminvorschläge
  #description
  Erhalte Benachrichtigungen bei neuen Terminvorschlägen — von euch oder vom Gegner.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-check-circle
  ---
  #title
  Terminbestätigungen
  #description
  Werde informiert, sobald ein Termin bestätigt wurde.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-message-square
  ---
  #title
  Kommentare
  #description
  Erhalte Benachrichtigungen bei neuen Kommentaren unter Matches.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-users
  badge: Nur mit PrimeBot
  ---
  #title
  Lineup-Änderungen
  #description
  Behalte den Überblick über Lineup-Änderungen der Gegner.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-calendar-days
  badge: Nur mit PrimeBot
  ---
  #title
  Wöchentliche Übersicht
  #description
  Erhalte eine wöchentliche Übersicht aller Matches in der Woche.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-info
  badge: Nur mit PrimeBot
  ---
  #title
  Detaillierte Übersichten
  #description
  Detaillierte Übersicht zu Matches mit Scouting-Links und Spielerinformationen.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-settings
  ---
  #title
  Personalisierung
  #description
  Personalisiere deine Benachrichtigungen nach deinen Wünschen.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-languages
  ---
  #title
  Mehrere Sprachen
  #description
  Unterstützung für Deutsch und Englisch.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-clock
  ---
  #title
  Zeitzonen
  #description
  Termine werden in der richtigen Zeitzone angezeigt.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-at-sign
  badge: Nur mit PrimeBot
  ---
  #title
  Rollenerwähnung
  #description
  Erwähne eine Discord-Rolle bei Benachrichtigungen.
  :::

  :::prime-bot-feature
  ---
  icon: i-lucide-calendar-check
  badge: Nur mit PrimeBot
  ---
  #title
  Discord Events
  #description
  Erstelle automatisch Discord Events für anstehende Matches.
  :::
::

## Befehle

- `/start [TEAM-LINK]` — Registriert das übergebene Team in dem Channel. In dem Channel darf noch kein Team registriert sein und das Team darf in keinem anderen Channel registriert sein.
- `/role` — Setzt eine Discord-Rolle, die bei Benachrichtigungen erwähnt werden soll.
- `/matches` — Gibt einen Überblick über alle noch nicht gespielten Spiele, sowie den Status der Terminvorschläge und Lineups der Gegner.
- `/match` — Gibt eine detaillierte Übersicht über den Spieltag: Terminstatus mit allen Terminvorschlägen, alle Scouting-Links, leagueofgraphs.com Link der Spieler:innen, Informationen über den Spieltag und das Ergebnis des Matches.
- `/settings` — Erstellt einen Link, in denen Benachrichtigungseinstellungen für das Team und den Channel gesetzt werden können. Der Link ist 60 Minuten gültig.
- `/delete` — Löscht das Team in dem Channel und die Benachrichtigungseinstellungen, sofern das Team nicht auch in Telegram registriert wurde.
- `/fix` — Löscht den bestehenden Webhook des Channels (wenn er existiert) und erstellt einen neuen Webhook.
- `/bop` — What's boppin'?
- `/help` — Ruft eine Übersicht aller Befehle auf.

## FAQ

::accordion
  :::accordion-item{label="Im Channel werden keine Benachrichtigungen (mehr) gesendet, obwohl wir welche bekommen müssten."}
  1. Benachrichtigungen werden nicht in Realzeit gesendet! Der PrimeBot durchsucht alle 15 Minuten die Prime League Website nach neuen Informationen. Aus diesem Grund werden Benachrichtigungen spätestens nach 15 Minuten gesendet. _Derzeit wird der PrimeBot von Seiten der PRM auf eine Anfrage pro Sekunde limitiert. Wichtige Nachrichten sollten ca. nach spätestens 20 Minuten gesendet werden. Nachrichten zu entfernteren Spieltagen haben eine niedrigere Priorität._
  2. Stelle sicher, dass der Bot alle benötigten Berechtigungen hat. [Siehe Einladungslink](https://discord.com/oauth2/authorize?client_id=739550721703280700).
  3. Sollten weiterhin Probleme bestehen, wende dich bitte an uns.
  :::

  :::accordion-item{label="Nachdem ich den Bot zum Server hinzugefügt habe und einen Befehl eingegeben habe, antwortet er nicht."}
  1. Stelle sicher, dass der Bot alle nötigen Berechtigungen hat. [Siehe Einladungslink](https://discord.com/oauth2/authorize?client_id=739550721703280700).
  2. Stelle sicher, dass der Bot den Channel sehen kann, wo du den Befehl eingegeben hast.
  3. Sollten weiterhin Probleme bestehen, wende dich bitte an uns.
  :::

  :::accordion-item{label="Ich bekomme bei /start die Antwort &quot;Aus dem Übergabeparameter konnte keine ID gefunden werden.&quot;"}
  Beispiel, wenn du die URL übergeben möchtest:

  ```
  /start https://www.primeleague.gg/leagues/teams/105959-primebot
  ```
  Beispiel, wenn du die Team-ID übergeben möchtest:
  ```
  /start 105959
  ```

  :::
::
