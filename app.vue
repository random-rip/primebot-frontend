<template>
  <n-layout class="h-screen">
    <n-layout-header bordered style="height: 64px; padding-left: 24px; padding-right: 24px; position: fixed">
      <div class="flex flex-row justify-between w-full h-full">
        <span class="my-auto">PrimeBot</span>
        <n-menu mode="horizontal" :options="menuOptions" class="my-auto"/>
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px" :native-scrollbar="false">
      <n-layout-content content-style="padding: 24px">
        <NuxtPage/>
      </n-layout-content>
      <n-layout-footer
          style="height: 64px; padding: 24px"
          bordered
      >
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-layout>

</template>

<script setup lang="ts">
import {NIcon} from "naive-ui";

function renderIcon(icon: any) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions = [
  {
    label: 'Startseite',
    key: 'home',
    // icon: renderIcon(HomeIcon)
  },
  {
    label: 'Installation',
    key: 'get-started',
    // icon: renderIcon(MLIcon),
    children: [
      {
        label: 'Discord',
        key: 'discord',
        // icon: renderIcon(DiscordIcon),
      },
      {
        label: 'Telegram',
        key: 'telegram',
        // icon: renderIcon(TelegramIcon),
      }
    ]
  },
  {
    label: 'Infos',
    key: 'information',
    // icon: renderIcon(InfoIcon),
    children: [
      {
        label: 'Kontakt',
        key: 'contact',
        // icon: renderIcon(ContactIcon),
      },
      {
        label: 'Teams',
        key: 'teams',
        // icon: renderIcon(TeamIcon)
      },
      {
        label: 'Changelog',
        key: 'changelog',
        // icon: renderIcon(ChangelogIcon)
      },
      {
        label: 'Status',
        key: 'status',
        // icon: renderIcon(StatusIcon)
      },
      {
        label: 'Open Source',
        key: 'open-source',
        // icon: renderIcon(GithubIcon)
      }
    ]
  },
]
</script>