---
contentTitle: Inoffizielle Prime League API
title: Inoffizielle Prime League API
---

## Inoffizielle Prime League API

*Disclaimer: Nur Daten von registrierten Teams (die den PrimeBot benutzen) sind verfügbar.*

Viele Organisationen möchten gerne ihre Teams und Spieler:innen auf ihrer eigenen Website präsentieren. Die Prime League
bietet bis jetzt keine offizielle API an, um die Daten der Teams und Spieler:innen abzurufen. Deshalb haben wir eine
inoffizielle API entwickelt. 

Alle Endpunkte sind in der [Open API Swagger-Dokumentation](https://primebot.me/api/v1/) online einsehbar.

Unter anderem bietet die API folgende Informationen:

- Teams: Informationen zu den Teams, wie z.B. Teamname, Teammitglieder und Matches
- Spieler: Informationen zu den Spielern, wie z.B. Spielername
- Matches: Informationen zu den Matches, wie z.B. Datum, Gegner und Ergebnis

### Ratelimits

Die API ist auf 1000 Anfragen pro Tag pro Benutzer begrenzt. Sollte dies nicht ausreichen, kontaktiere uns bitte.

### FAQ

1. Warum ist die Division nicht in der API enthalten?
   - Die Division ist nicht in der API enthalten, da die Prime League die Division vor knapp einem Jahr aus den
     öffentlichen Daten entfernt hat. Die Division ist nur noch über die Prime League Website einsehbar.