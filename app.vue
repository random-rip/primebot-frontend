<template>
  <n-config-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <n-dialog-provider>
            <n-layout class="layout">
              <n-layout-header bordered
                               style="height: 64px; padding-left: 24px; padding-right: 24px; position: fixed">
                <n-space justify="space-between" align="center" style="height: 100%">
                  <nuxt-link to="/">
                    <n-icon :size="50" color="black">
                      <svg viewBox="0 165 400 20" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                        <path xmlns="http://www.w3.org/2000/svg"
                              d="M111.823 60.878c-.086.076-1.158.234-2.382.349-4.097.385-10.623 2.026-14.626 3.676l-1.667.685c-3.5 1.434-9.549 4.657-9.753 5.197-.068.179-.36.326-.648.326-.289 0-.525.167-.525.37 0 .204-.179.371-.398.371-.761 0-4.994 3.537-8.861 7.406-5.008 5.009-5.896 6.137-10.204 12.964-.738 1.17-2.856 5.492-4.36 8.898-.741 1.678-2.704 8.664-3.202 11.397a143.438 143.438 0 0 1-.583 3.039c-.109.509-.301 3.717-.426 7.129l-.227 6.204h-6.924v-17.724l-1.018-.803c-1.36-1.072-5.786-.947-6.615.186-.988 1.351-.743 87.211.253 88.476.562.715 1.106.976 2.037.976h1.269v7.757c0 10.692.528 11.502 7.5 11.502h3.5l.225 6.574c.124 3.616.318 7.074.431 7.686 1.259 6.827 2.591 11.742 4.122 15.216 2.093 4.751 5.213 10.619 5.759 10.833.173.068.315.294.315.502 0 .208.375.84.833 1.404a51.436 51.436 0 0 1 1.574 2.06c2.003 2.798 7.398 8.417 9.766 10.172a69.882 69.882 0 0 1 2.407 1.882c5.409 4.469 15.025 9.104 22.592 10.889 5.064 1.194 5.527 1.276 8.939 1.587 3.87.352 173.537.352 177.407 0 3.478-.316 3.959-.404 9.074-1.645 7.292-1.771 14.886-5.346 21.667-10.203 4.252-3.045 11.088-9.773 13.09-12.883.328-.509.69-1.009.803-1.111.84-.752 3.953-5.936 5.673-9.444 3.746-7.642 5.203-12.981 6.367-23.334.046-.407.105-2.865.131-5.463l.047-4.722h4.053c7.316 0 7.799-.722 7.799-11.664v-7.5l1.461-.234c2.822-.451 2.613 3.157 2.613-45.079 0-49.946.398-45.152-3.749-45.152-1.26 0-2.684.243-3.306.565l-1.093.565V128.889h-7.778l-.058-4.167c-.161-11.579-2.015-19.319-7.033-29.352-1.592-3.181-4.102-7.359-4.785-7.963-.115-.101-.742-.967-1.392-1.923-3.695-5.43-12.648-13.151-19.438-16.761-.87-.463-1.908-1.025-2.308-1.249-4.305-2.418-10.833-4.557-17.764-5.82l-4.814-.878-87.808-.019c-48.293-.011-87.877.044-87.962.121m197.066 84.2c4.692 1.54 12.19 6.986 12.216 8.873.003.237.144.487.313.555.463.186 2.134 3.916 2.828 6.314 1.029 3.549.65 26.22-.493 29.548-2.113 6.154-7.104 11.184-13.522 13.627L307.593 205l-106.297.11c-81.447.084-106.815.006-108.518-.334-4.103-.819-7.963-2.93-11.108-6.075-5.691-5.691-6.508-8.73-6.47-24.071.029-12.254.316-14.625 2.214-18.347.754-1.477 4.241-5.888 5.047-6.384.256-.157.682-.493.947-.745 2.198-2.1 7.086-4.2 10.666-4.583 1.12-.12 2.109-.283 2.197-.363.088-.08 47.421-.095 105.185-.033l105.025.112 2.408.791m-172.778 6.067a22.375 22.375 0 0 0-12.445 9.132c-.998 1.507-1.814 2.828-1.814 2.935 0 .107-.237.72-.527 1.362-3.922 8.693-.718 23.254 6.176 28.069.662.462 1.286.932 1.388 1.044 6.777 7.468 24.948 4.745 31.012-4.647.251-.389.9-1.373 1.442-2.188 4.157-6.245 4.434-17.22.608-24.074-.455-.815-1.003-1.884-1.218-2.377-2.984-6.832-16.026-11.735-24.622-9.256m117.593-.046c-11.491 3.46-18.275 14.192-16.675 26.377 2.288 17.418 20.842 26.289 34.92 16.696 2.51-1.711 5.829-5.111 5.829-5.971 0-.233.134-.423.299-.423 1.23 0 3.765-8.151 3.919-12.603.555-16.112-13.897-28.411-28.292-24.076m24.994 96.401c-1.19 7.321-5.955 12.8-12.957 14.898-2.809.842-129.804.839-132.584-.003-2.151-.651-4.869-1.922-5.869-2.744-1.026-.844-3.961-3.94-4.601-4.854-1.21-1.726-2.96-7.76-2.478-8.54.12-.193 33.236-.331 79.475-.331h79.27l-.256 1.574m-154.254 79.352"
                              fill-rule="evenodd"></path>
                      </svg>
                    </n-icon>
                  </nuxt-link>
                  <n-space align="center" style="height: 100%">
                    <n-menu mode="horizontal" :options="menuOptions" class="menu-desktop"></n-menu>
                    <n-dropdown :options="menuOptions">
                      <n-icon size="20" class="menu-mobile">
                        <svg viewBox="0 -20 305 305">
                          <title id="title3842">Hamburger (Menu) Icon</title>
                          <defs id="defs4"/>
                          <metadata id="metadata7">
                          </metadata>
                          <g id="layer1" transform="translate(10.015625,-803.03125)">
                            <g id="g3837">
                              <path id="path3785-0" d="m 19.668179,1032.694 250.646101,0 0,0" style="fill:none;stroke:#000000;stroke-width:49.33635712;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
                              <path id="path3785-0-9" d="m 19.668179,932.694 250.646101,0 0,0" style="fill:none;stroke:#000000;stroke-width:49.33635712;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
                              <path id="path3785-0-4" d="m 19.668179,832.694 250.646101,0 0,0" style="fill:none;stroke:#000000;stroke-width:49.33635712;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
                            </g>
                          </g>
                        </svg>
                      </n-icon>
                    </n-dropdown>
                  </n-space>
                </n-space>
              </n-layout-header>
              <n-layout position="absolute" style="top: 64px; overflow: hidden" :native-scrollbar="false">
                  <n-layout-content content-style="padding: 24px; overflow: hidden" class="main-content" :native-scrollbar="false">
                    <NuxtPage/>
                  </n-layout-content>
                  <n-layout-footer
                      style="height: 64px; padding: 24px"
                      bordered
                  >
                    <v-footer></v-footer>
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
  MenuOption,
  NConfigProvider,
  NDialogProvider,
  NDropdown,
  NIcon,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLoadingBarProvider,
  NMenu,
  NMessageProvider,
  NNotificationProvider,
  NSpace,
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
                  to: '/information/calendar'
                },
                {default: () => 'Kalender'}
            ),
        key: 'calendar',
        // icon: renderIcon(HomeIcon)
      },
      {
        label: () =>
            h(
                NuxtLink,
                {
                  to: '/information/api'
                },
                {default: () => 'Unofficial Prime League API'}
            ),
        key: 'api',
        // icon: renderIcon(HomeIcon)
      },
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
                  to: '/information/partner'
                },
                { default: () => 'Partner' }
            ),
        key: 'partner',
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

.menu-desktop {
  display: none;
}

.menu-mobile {
  display: flex;
}

.title{
  font-size: 2rem;
  font-weight: 500;
}

.main-content {
  max-width: 80rem;
  min-height: calc(100vh - 128px);
  margin-right: auto;
  margin-left: auto;
}

.layout {
  min-height: 100vh;
}

@supports (-webkit-touch-callout: none) {
  .layout {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
}


@media screen and (min-width: 768px){
  .menu-desktop {
    display: flex;
  }

  .menu-mobile {
    display: none;
  }

  .layout {
    height: 100vh;
  }
}


</style>
