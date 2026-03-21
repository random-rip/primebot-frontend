---
title: PrimeBot for Telegram
description: Setup and usage of PrimeBot for Telegram.
---

# PrimeBot for Telegram

## Getting Started

::steps
### Create a Group and Add the Bot
Create a Telegram group and add the bot `PrimeLeague Bot` (or via [this link](https://t.me/prime_league_bot?startgroup=start)).

### Register Your Team
Type `/start` in the chat. After PrimeBot responds, enter your Prime League team link in the chat.

### Customize
Customize the bot with `/settings` so you only receive the notifications you want.
::

## Features

|  | Discord | Telegram | Prime League InApp & Email |
|---|---|---|---|
| Scheduling Suggestions | ✅ | ✅ | ✅ |
| Schedule Confirmations | ✅ | ✅ | ✅ |
| Comments | ✅ | ✅ | ✅ |
| Lineup Changes | ✅ | ✅ | ⛔ |
| Weekly Overview | ✅ | ✅ | ⛔ |
| Detailed Overviews | ✅ | ✅ | ⛔ |
| Customization | ✅ | ✅ | ✅ |
| Role Mentions | ✅ | ⛔ | ⛔ |
| Multiple Languages | ✅ | ✅ | ✅ |
| Time Zones | ✅ | ⛔ | ✅ |
| Discord Events | ✅ | ⛔ | ⛔ |

## Commands

- `/start` — Starts the conversation to register a team. You will then need to enter a team URL. No team may already be registered in the group, and the team must not be registered in any other group.
- `/settings` — Generates a link to configure notification settings for the team and group. The link is valid for 60 minutes.
- `/match [match_day]` — Provides a detailed overview of the match day: schedule status with all scheduling suggestions, all scouting links, leagueofgraphs.com links for players, match day information, and the match result.
- `/matches` — Provides an overview of all upcoming matches, including the status of scheduling suggestions and opponent lineups.
- `/delete` — Removes the registered team from the channel and its notification settings, unless the team is also registered on Telegram.
- `/bop` — What's boppin'?
- `/cancel` — Cancels the current conversation.
- `/help` — Displays an overview of the commands listed here.
- `/set_logo` — Sets the Prime League image as the group picture.

## FAQ

::accordion
  :::accordion-item{label="No notifications are being sent in the channel (anymore), even though we should be receiving them."}
  1. Notifications are not sent in real time! PrimeBot scans the Prime League website for new information every 15 minutes. For this reason, notifications are sent within 15 minutes at the latest. _Currently, PrimeBot is rate-limited by PRM to one request per second. Important messages should arrive within about 20 minutes at the latest. Notifications for match days further in the future have lower priority._
  2. Make sure the corresponding notifications are not disabled in your settings. Type `/settings` in the group chat and check whether the relevant notifications are enabled.
  3. If problems persist, please contact us.
  :::

  :::accordion-item{label="After adding the bot to the group and entering a command, it doesn't respond."}
  Make sure the bot has the following permissions:

  - Send messages
  - Send media
  - Embed links
  - Pin messages
  - Change group info

  If problems persist, please contact us.
  :::

  :::accordion-item{label="After entering my team, I get the response &quot;The provided URL does not match the correct format&quot;."}

  Example if you want to pass the URL:

  ```
  https://www.primeleague.gg/leagues/teams/105959-leipzig-esports-e-v-ttt
  ```

  Example if you want to pass the team ID:

  ```
  105959
  ```

  :::
::
