---
title: PrimeBot for Discord
description: Setup and usage of PrimeBot for Discord.
---

# PrimeBot for Discord

## Getting Started

::steps
### Add the Bot
Make sure you have the required permissions to add a bot to your server.
Add the bot to your server via [this link](https://discord.com/oauth2/authorize?client_id=739550721703280700).

### Register Your Team
Type `/start TEAM_LINK` and replace `TEAM_LINK` with your team link from the Prime League.

Example: `/start https://www.primeleague.gg/leagues/teams/105959-leipzig-esports-e-v-ttt`

### Customize
Use `/settings` to customize notifications, set a different scouting website, or assign a Discord role.
::

## Commands

- `/start [TEAM-LINK]` — Registers the given team in the channel. No team may already be registered in the channel, and the team must not be registered in any other channel.
- `/role` — Sets a Discord role to be mentioned in notifications.
- `/matches` — Provides an overview of all upcoming matches, including the status of scheduling suggestions and opponent lineups.
- `/match` — Provides a detailed overview of the match day: schedule status with all scheduling suggestions, all scouting links, leagueofgraphs.com links for players, match day information, and the match result.
- `/settings` — Generates a link to configure notification settings for the team and channel. The link is valid for 60 minutes.
- `/delete` — Removes the team from the channel and its notification settings, unless the team is also registered on Telegram.
- `/fix` — Deletes the existing channel webhook (if it exists) and creates a new one.
- `/bop` — What's boppin'?
- `/help` — Displays an overview of all commands.

## FAQ

::accordion
  :::accordion-item{label="No notifications are being sent in the channel (anymore), even though we should be receiving them."}
  1. Notifications are not sent in real time! PrimeBot scans the Prime League website for new information every 15 minutes. For this reason, notifications are sent within 15 minutes at the latest. _Currently, PrimeBot is rate-limited by PRM to one request per second. Important messages should arrive within about 20 minutes at the latest. Notifications for match days further in the future have lower priority._
  2. Make sure the bot has all required permissions. [See invite link](https://discord.com/oauth2/authorize?client_id=739550721703280700).
  3. If problems persist, please contact us.
  :::

  :::accordion-item{label="After adding the bot to the server and entering a command, it doesn't respond."}
  1. Make sure the bot has all required permissions. [See invite link](https://discord.com/oauth2/authorize?client_id=739550721703280700).
  2. Make sure the bot can see the channel where you entered the command.
  3. If problems persist, please contact us.
  :::

  :::accordion-item{label="When using /start, I get the response &quot;No ID could be found from the given parameter.&quot;"}
  Example if you want to pass the URL:

  ```
  /start https://www.primeleague.gg/leagues/teams/105959-primebot
  ```
  Example if you want to pass the team ID:
  ```
  /start 105959
  ```

  :::
::
