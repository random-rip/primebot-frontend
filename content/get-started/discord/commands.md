---
title: PrimeBot
contentTitle: Befehle
description: Hier findest du eine Übersicht aller Befehle, die in Telegram verfügbar sind
---

- `/start [TEAM-LINK]`
  - Registriert das übergebene Team in dem Channel. In dem Channel darf noch kein Team registriert sein und das Team
    darf in keinem anderen Channel registriert sein.
  - Beispiel: `/start https://www.primeleague.gg/leagues/teams/105959-leipzig-esports-e-v-ttt`
- `/role`
  - Setzt eine Discord-Rolle, die bei Benachrichtigungen erwähnt werden soll.
- `/matches`
  - Gibt einen Überblick über alle noch nicht gespielten Spiele, sowie den Status der Terminvorschläge und Lineups der
    Gegner.
- `/match`
  - Gibt eine detaillierte Übersicht über den Spieltag: Terminstatus mit allen Terminvorschlägen, alle Scouting-Links,
    leagueofgraphs.com Link der Spieler:innen, Informationen über den Spieltag und das Ergebnis des Matches.
- `/settings`
  - Erstellt einen Link, in denen Benachrichtigungseinstellungen für das Team und den Channel gesetzt werden können. Der
    Link ist 60 Minuten gültig.
- `/delete`
  - Löscht das Team in dem Channel und die Benachrichtigungseinstellungen, sofern das Team nicht auch in Telegram
    registriert wurde.
- `/fix`
  - Löscht den bestehenden Webhook des Channels (wenn er existiert) und erstellt einen neuen Webhook.
- `/bop`
  - What's boppin'?
- `/help`
  - Ruft eine Übersicht aller Befehle auf.
