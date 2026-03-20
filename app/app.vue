<script setup lang="ts">
const appConfig = useAppConfig()
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const headerLinks = computed(() => [
  {
    label: t('nav.docs'),
    children: [
      { label: t('nav.discord'), to: '/docs/discord', icon: 'i-lucide-message-circle' },
      { label: t('nav.telegram'), to: '/docs/telegram', icon: 'i-lucide-send' },
      { label: t('nav.api'), to: '/docs/api', icon: 'i-lucide-code' },
    ],
  },
  { label: t('nav.calendar'), to: '/calendar', icon: 'i-lucide-calendar' },
  { label: t('nav.changelog'), to: '/changelog', icon: 'i-lucide-file-text' },
  {
    label: t('nav.about'),
    children: [
      { label: t('nav.contact'), to: '/contact', icon: 'i-lucide-users' },
      { label: t('nav.partner'), to: '/partner', icon: 'i-lucide-handshake' },
      { label: t('nav.openSource'), to: '/open-source', icon: 'i-lucide-github' },
    ],
  },
])

const footerLinks = computed(() => [
  { label: t('nav.imprint'), to: '/imprint' },
  { label: t('nav.contact'), to: '/contact' },
  { label: t('nav.privacy'), to: '/privacy' },
  { label: t('nav.tos'), to: '/tos' },
])

const otherLocale = computed(() => locales.value.find(l => l.code !== locale.value))

const localeRoute = useLocaleRoute()
</script>

<template>
  <UApp>
    <UHeader title="PrimeBot" :to="localeRoute({path:'/'})">
      <UNavigationMenu :items="headerLinks" />

      <template #right>
        <UButton
          :to="switchLocalePath(otherLocale!.code)"
          :label="otherLocale!.name"
          icon="i-lucide-languages"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://discord.gg/7NYgT2uFPm"
          icon="i-lucide-message-circle"
          color="neutral"
          variant="ghost"
          aria-label="Discord"
          target="_blank"
        />
        <UButton
          to="https://github.com/random-rip"
          icon="i-lucide-github"
          color="neutral"
          variant="ghost"
          aria-label="GitHub"
          target="_blank"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="headerLinks" orientation="vertical" />
      </template>
    </UHeader>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UFooter>
      <template #left>
        <span class="text-sm text-muted">&copy; {{ new Date().getFullYear() }} PrimeBot</span>
      </template>

      <UNavigationMenu :items="footerLinks" />
    </UFooter>
  </UApp>
</template>
