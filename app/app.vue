<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UApp>
    <UHeader :title="appConfig.header.title" :to="appConfig.header.to">
      <UNavigationMenu :items="appConfig.header.links" />

      <template #right>
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
        <UNavigationMenu :items="appConfig.header.links" orientation="vertical" />
      </template>
    </UHeader>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UFooter>
      <template #left>
        <span class="text-sm text-muted">&copy; {{ new Date().getFullYear() }} PrimeBot</span>
      </template>

      <UNavigationMenu :items="appConfig.footer.links" />
    </UFooter>
  </UApp>
</template>