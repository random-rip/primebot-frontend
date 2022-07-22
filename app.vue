<template>
  <n-config-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <n-dialog-provider>
            <n-layout style="height: 100vh">
              <n-layout-header bordered
                               style="height: 64px; padding-left: 24px; padding-right: 24px; position: fixed">
                <n-space justify="space-between" align="center" style="height: 100%">
                  <span>PrimeBot</span>
                  <n-menu mode="horizontal" :options="menuOptions"></n-menu>
                </n-space>
              </n-layout-header>
              <n-layout position="absolute" style="top: 64px" :native-scrollbar="false">
                <n-layout-content content-style="padding: 24px" class="min-h-[calc(100vh-128px)]">
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
          </n-dialog-provider>
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  MenuOption, NButton,
  NConfigProvider,
  NDialogProvider,
  NIcon,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLoadingBarProvider,
  NMenu,
  NMessageProvider,
  NNotificationProvider,
  NSpace
} from "naive-ui";

import {NuxtLink} from "#components";

function renderIcon(icon: any) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions: Array<MenuOption> = [
  {
    label: () =>
        h(
            NuxtLink,
            {
              to: '/'
            },
            {default: () => 'Home'}
        ),
    key: 'home',
    // icon: renderIcon(HomeIcon)
  },
  {
    label: 'Installation',
    key: 'get-started',
    // icon: renderIcon(MLIcon),
    children: [
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/get-started/discord'
                },
                { default: () => 'Discord' }
            ),
        key: 'discord',
        // icon: renderIcon(DiscordIcon),
      },
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/get-started/telegram'
                },
                { default: () => 'Telegram' }
            ),
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
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/information/contact'
                },
                { default: () => 'Kontakt' }
            ),
        key: 'contact',
        // icon: renderIcon(ContactIcon),
      },
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/information/teams'
                },
                { default: () => 'Infos' }
            ),
        key: 'teams',
        // icon: renderIcon(TeamIcon)
      },
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/information/changelog'
                },
                { default: () => 'Changelog' }
            ),
        key: 'changelog',
        // icon: renderIcon(ChangelogIcon)
      },
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/information/status'
                },
                { default: () => 'Status' }
            ),
        key: 'status',
        // icon: renderIcon(StatusIcon)
      },
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/information/open-source'
                },
                { default: () => 'Open Source' }
            ),
        key: 'open-source',
        // icon: renderIcon(GithubIcon)
      }
    ]
  },
]
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.css';
</style>
