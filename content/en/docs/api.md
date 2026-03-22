---
title: Unofficial Prime League API
description: Documentation for the unofficial Prime League API.
---

# Unofficial Prime League API

::callout{icon="i-lucide-info"}
Only data from registered teams (that use PrimeBot) is available.
::

Many organizations would like to showcase their teams and players on their own website. The Prime League does not yet
offer an official API to retrieve team and player data. That's why we developed an Unofficial API.

All endpoints are available in the [Open API Swagger documentation](/api/v1/).

The API provides the following information, among others:

- Teams: Information about teams, such as team name, team members, and matches
- Players: Information about players, such as player name
- Matches: Information about matches, such as date, opponent, and result

### Rate Limits

The API is limited to 1000 requests per day per user. If this is not sufficient, please contact us.

### Contributing

The API is open source and we welcome contributions. If you find a bug or would like to suggest an improvement,
please create an issue or a pull request
on [GitHub](https://github.com/random-rip/primebot_backend).

### FAQ

::accordion
  :::accordion-item
  ---
  label: Why is the division not included in the API?
  ---
  The Prime League removed the division from the data available to us about a year ago. The division can now only be viewed
  on the Prime League website.
  :::
::
