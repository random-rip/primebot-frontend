---
title: PrimeBot für Telegram
description: Einrichtung und Nutzung des PrimeBot für Telegram.
---

# PrimeBot für Telegram

## Erste Schritte

::steps
### Gruppe erstellen und Bot hinzufügen
Erstelle eine Telegram-Gruppe und füge den Bot `PrimeLeague Bot` hinzu (oder über [diesen Link](https://t.me/prime_league_bot?startgroup=start)).

### Team registrieren
Schreibe `/start` in den Chat. Nach der Antwort des PrimeBots musst du den Team-Link der Prime League in den Chat schreiben.

### Personalisieren
Personalisiere den Bot mit `/settings`, sodass du nur die Benachrichtigungen bekommst, die du möchtest.
::

## Befehle

- `/start` — Startet die Konversation um ein Team zu registrieren. Danach muss eine Team-URL eingegeben werden. In der Gruppe darf noch kein Team registriert sein und das Team darf in keiner anderen Gruppe registriert sein.
- `/settings` — Erstellt einen Link, in denen Benachrichtigungseinstellungen für das Team und die Gruppe gesetzt werden können. Der Link ist 60 Minuten gültig.
- `/match [match_day]` — Gibt eine detaillierte Übersicht über den Spieltag: Terminstatus mit allen Terminvorschlägen, alle Scouting-Links, leagueofgraphs.com Link der Spieler:innen, Informationen über den Spieltag und das Ergebnis des Matches.
- `/matches` — Gibt einen Überblick über alle noch nicht gespielten Spiele, sowie den Status der Terminvorschläge und Lineups der Gegner.
- `/delete` — Löscht das registrierte Team in dem Channel und die Benachrichtigungseinstellungen, sofern das Team nicht auch in Telegram registriert wurde.
- `/bop` — What's boppin'?
- `/cancel` — Bricht die aktuelle Konversation ab.
- `/help` — Ruft eine Übersicht der hier genannten Befehle auf.
- `/set_logo` — Setzt das Bild der Prime League als Gruppenbild.

## FAQ

::accordion
  :::accordion-item{label="Im Channel werden keine Benachrichtigungen (mehr) gesendet, obwohl wir welche bekommen müssten."}
  1. Benachrichtigungen werden nicht in Realzeit gesendet! Der PrimeBot durchsucht alle 15 Minuten die Prime League Website nach neuen Informationen. Aus diesem Grund werden Benachrichtigungen spätestens nach 15 Minuten gesendet. _Derzeit wird der PrimeBot von Seiten der PRM auf eine Anfrage pro Sekunde limitiert. Wichtige Nachrichten sollten ca. nach spätestens 20 Minuten gesendet werden. Nachrichten zu entfernteren Spieltagen haben eine niedrigere Priorität._
  2. Stelle sicher, dass in euren Einstellungen die entsprechenden Benachrichtigungen nicht deaktiviert sind. Gebe dazu `/settings` in den Gruppenchat ein und überprüfe, ob die entsprechenden Benachrichtigungen aktiviert sind.
  3. Sollten weiterhin Probleme bestehen, wende dich bitte an uns.
  :::

  :::accordion-item{label="Nachdem ich den Bot zur Gruppe hinzugefügt habe und einen Befehl eingegeben habe, antwortet er nicht."}
  Stelle sicher, dass der Bot die folgenden Rechte hat:

  - Send messages
  - Send media
  - Embed links
  - Pin messages
  - Change group info

  Sollten weiterhin Probleme bestehen, wende dich bitte an uns.
  :::

  :::accordion-item{label="Ich bekomme nach der Eingabe meines Teams die Antwort &quot;Die angegebene URL entspricht nicht dem richtigen Format&quot;."}
  
  Beispiel, wenn du die URL übergeben möchtest:

  ```
  https://www.primeleague.gg/leagues/teams/105959-leipzig-esports-e-v-ttt
  ```

  Beispiel, wenn du die Team-ID übergeben möchtest:

  ```
  105959
  ```

  :::
::
