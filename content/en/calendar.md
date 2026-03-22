---
title: Calendar Integration
description: Integrate your team's matches into your calendar.
---

# Calendar Integration

::callout
---
color: warning
icon: i-lucide-flask
---
This integration is still in beta and may contain bugs.
Let us know if you find any issues or have suggestions for improvement. Simply join our
[Discord server](https://discord.gg/K8bYxJMDzu).
::

::callout
---
icon: i-lucide-info
---
Only data from registered teams (that use PrimeBot) is available.
::

::u-page-section
#title
Features

#description
Everything you need to know about the calendar integration.

#features
  :::u-page-feature
  ---
  icon: i-lucide-refresh-cw
  title: Auto-Sync
  ---
  #description
  All of your team's matches are automatically added to your calendar.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-calendar-sync
  title: Auto-Update
  ---
  #description
  Cancelled or rescheduled matches are automatically updated.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe
  title: Timezones
  ---
  #description
  Events are displayed in your timezone with a default duration of 2 hours.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-swords
  title: Match Info
  ---
  #description
  Match day, link to the match on the Prime League website, and op.gg links for your opponents.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-search
  title: Scouting
  ---
  #description
  op.gg links for your opponent's lineup when available.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-signal
  title: Status Indicators
  ---
  #description
  Emojis in the title show the status: ⚔ Date confirmed · 📆 No suggestions · ✅ Your suggestions open · ⚠ Opponent's suggestions open
  :::
::

## Subscribe to Calendar

**Prerequisite:** For the calendar integration you need your team's TEAM-ID. You can find it in your team's URL on the
Prime League website. The Team-ID is the number in the last part of the URL and usually consists of 6-8 digits.

Your Team-ID must then be replaced in the following feed link: `https://primebot.me/api/v1/teams/TEAM-ID/feed`

**Example:** Your team is available at `https://www.primeleague.gg/leagues/teams/105959-les-primebot-devs`
— `105959` is the TEAM-ID.
The feed link for your team is: `https://primebot.me/api/v1/teams/105959/feed`

### Google Calendar

::steps
#### Open Calendar Settings

Open [this page](https://calendar.google.com/calendar/u/0/r/settings/addbyurl) on your computer.

Or manually: Open your Google Calendar on a computer, click the "+" icon next to "Other calendars" and select "From URL".

#### Paste the Feed Link

Paste your feed link and click "Add calendar".
::

*Source: [Google Support](https://support.google.com/calendar/answer/37100?hl=en&co=GENIE.Platform%3DDesktop)*

### Apple Calendar

::steps
#### New Calendar Subscription

Open Apple Calendar on your computer and select "File" > "New Calendar Subscription".

#### Paste the Feed Link

Paste your feed link into the "Calendar URL" field and click "Subscribe".

#### Configure the Calendar

Enter a name for the calendar (e.g. "Prime League") and choose a color.
Select "iCloud" in the "Location" menu so that the calendar is available on all your devices, then click "OK".
::

*Source: [Apple Support](https://support.apple.com/en-us/102301)*

### Thunderbird Calendar

::steps
#### Create a New Calendar

Open Thunderbird and on the "Home" tab select "New Calendar" > "On the Network" > "iCalendar (ICS)".

#### Paste the Feed Link

Paste your feed link into the "Location" field and click "Next".

#### Name the Calendar

Name the calendar (e.g. "Prime League") and click "Finish".
::

*Source: [Mozilla Support](https://support.mozilla.org/en-US/kb/adding-a-holiday-calendar)*

### Outlook Calendar

::callout{color="warning" icon="i-lucide-triangle-alert"}
For an unknown reason, it is currently not possible to add the calendar in Outlook. If you know how to do it,
please let us know. Simply join our [Discord server](https://discord.gg/K8bYxJMDzu).
::
