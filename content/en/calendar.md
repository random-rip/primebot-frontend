---
title: Calendar Integration
description: Integrate your team's matches into your calendar.
---

# Calendar Integration

::callout
---
icon: i-lucide-flask
color: warning
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

## Features

You can integrate all of your team's matches into your calendar. When you subscribe to the calendar,
new matches are automatically added and matches that are cancelled or rescheduled are automatically updated.

Events are displayed in your timezone by default and are set with a duration of 2 hours.

In the event details you will find the following information:

- The match day and link to the match on the Prime League website
- The op.gg link for your opponent
- The op.gg link for your opponent's lineup if available
- Information about whether scheduling suggestions from you or your opponents are open, or if a date has been confirmed.
  The emoji in the title tells you the current status:
  - ⚔ Match date confirmed
  - 📆 No dates have been suggested
  - ✅ Your scheduling suggestions are open
  - ⚠ Your opponent's scheduling suggestions are open!

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

::callout
---
icon: i-lucide-triangle-alert
color: warning
---
For an unknown reason, it is currently not possible to add the calendar in Outlook. If you know how to do it,
please let us know. Simply join our [Discord server](https://discord.gg/K8bYxJMDzu).
::
