---
title: Unofficial Prime League API
description: Dokumentation der inoffiziellen Prime League API.
---

# Unofficial Prime League API

::callout
---
icon: i-lucide-info
---
Nur Daten von registrierten Teams (die den PrimeBot benutzen) sind verfügbar.
::

Viele Organisationen möchten gerne ihre Teams und Spieler:innen auf ihrer eigenen Website präsentieren. Die Prime League
bietet bis jetzt keine offizielle API an, um die Daten der Teams und Spieler:innen abzurufen. Deshalb haben wir eine
Unofficial API entwickelt.

Alle Endpunkte sind in der [Open API Swagger-Dokumentation](/api/v1/) online einsehbar.

Unter anderem bietet die API folgende Informationen:

- Teams: Informationen zu den Teams, wie z.B. Teamname, Teammitglieder und Matches
- Spieler: Informationen zu den Spielern, wie z.B. Spielername
- Matches: Informationen zu den Matches, wie z.B. Datum, Gegner und Ergebnis

### Ratelimits

Die API ist auf 1000 Anfragen pro Tag pro Benutzer begrenzt. Sollte dies nicht ausreichen, kontaktiere uns bitte.

### Contributing

Die API ist Open Source und wir freuen uns über Beiträge. Wenn du einen Fehler findest oder eine Verbesserung
vorschlagen möchtest, erstelle bitte ein Issue oder ein Pull Request
auf [GitHub](https://github.com/random-rip/primebot_backend).

### FAQ

::accordion
  :::accordion-item
  ---
  label: Warum ist die Division nicht in der API enthalten?
  ---
  Die Prime League hat vor knapp einem Jahr die Division aus den uns zur Verfügung gestellten Daten entfernt. Die Division
  ist nur noch über die Prime League Website einsehbar.
  :::
::
