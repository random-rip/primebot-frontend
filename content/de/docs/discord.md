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

|                                                 | Discord | Telegram | Prime League InApp & Email |
| ----------------------------------------------- | ------- | -------- | -------------------------- |
| Benachrichtigungen bei neuen Terminvorschlägen  | ✅       | ✅        | ✅                          |
| Terminbestätigungen                             | ✅       | ✅        | ✅                          |
| Neue Kommentare unter Matches                   | ✅       | ✅        | ✅                          |
| Neue Lineups der Gegner                         | ✅       | ✅        | ⛔                          |
| Wöchentliche Übersicht der Matches in der Woche | ✅       | ✅        | ⛔                          |
| Detaillierte Übersicht zu Matches               | ✅       | ✅        | ⛔                          |
| Personalisierung der Benachrichtigungen         | ✅       | ✅        | ✅                          |
| Rollenerwähnung                                 | ✅       | ⛔        | ⛔                          |
| Mehrere Sprachen (Deutsch und Englisch)         | ✅       | ✅        | ✅                          |
| Zeitzonen werden berücksichtigt                 | ✅       | ⛔        | ✅                          |
| Discord Events                                  | ✅       | ⛔        | ⛔                          |

## Befehle

- `/start [TEAM-LINK]` — Registriert das übergebene Team in dem Channel. In dem Channel darf noch kein Team registriert sein und das Team darf in keinem anderen Channel registriert sein.
- `/role` — Setzt eine Discord-Rolle, die bei Benachrichtigungen erwähnt werden soll.
- `/matches` — Gibt einen Überblick über alle noch nicht gespielten Spiele, sowie den Status der Terminvorschläge und Lineups der Gegner.
- `/match` — Gibt eine detaillierte Übersicht über den Spieltag: Terminstatus mit allen Terminvorschlägen, alle Scouting-Links, leagueofgraphs.com Link der Spieler\:innen, Informationen über den Spieltag und das Ergebnis des Matches.
- `/settings` — Erstellt einen Link, in denen Benachrichtigungseinstellungen für das Team und den Channel gesetzt werden können. Der Link ist 60 Minuten gültig.
- `/delete` — Löscht das Team in dem Channel und die Benachrichtigungseinstellungen, sofern das Team nicht auch in Telegram registriert wurde.
- `/fix` — Löscht den bestehenden Webhook des Channels (wenn er existiert) und erstellt einen neuen Webhook.
- `/bop` — What's boppin'?
- `/help` — Ruft eine Übersicht aller Befehle auf.

## FAQ

::accordion
  :::accordion-item
  ---
  label: Im Channel werden keine Benachrichtigungen (mehr) gesendet, obwohl wir
    welche bekommen müssten.
  ---
  1. Benachrichtigungen werden nicht in Realzeit gesendet! Der PrimeBot durchsucht alle 15 Minuten die Prime League Website nach neuen Informationen. Aus diesem Grund werden Benachrichtigungen spätestens nach 15 Minuten gesendet. *Derzeit wird der PrimeBot von Seiten der PRM auf eine Anfrage pro Sekunde limitiert. Wichtige Nachrichten sollten ca. nach spätestens 20 Minuten gesendet werden. Nachrichten zu entfernteren Spieltagen haben eine niedrigere Priorität.*
  2. Stelle sicher, dass der Bot alle benötigten Berechtigungen hat. [Siehe Einladungslink](https://discord.com/oauth2/authorize?client_id=739550721703280700).
  3. Sollten weiterhin Probleme bestehen, wende dich bitte an uns.
  :::

  :::accordion-item
  ---
  label: Nachdem ich den Bot zum Server hinzugefügt habe und einen Befehl
    eingegeben habe, antwortet er nicht.
  ---
  1. Stelle sicher, dass der Bot alle nötigen Berechtigungen hat. [Siehe Einladungslink](https://discord.com/oauth2/authorize?client_id=739550721703280700).
  2. Stelle sicher, dass der Bot den Channel sehen kann, wo du den Befehl eingegeben hast.
  3. Sollten weiterhin Probleme bestehen, wende dich bitte an uns.
  :::

  :::accordion-item
  ---
  label: Ich bekomme bei /start die Antwort "Aus dem Übergabeparameter konnte
    keine ID gefunden werden."
  ---
  Beispiel, wenn du die URL übergeben möchtest:

  ```text
  /start https://www.primeleague.gg/leagues/teams/105959-primebot
  ```

  Beispiel, wenn du die Team-ID übergeben möchtest:

  ```text
  /start 105959
  ```
  :::
::
