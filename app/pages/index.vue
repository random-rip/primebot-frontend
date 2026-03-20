<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-bell',
    title: 'Terminvorschläge',
    description: 'Erhalte Benachrichtigungen bei neuen Terminvorschlägen — von euch oder vom Gegner.'
  },
  {
    icon: 'i-lucide-check-circle',
    title: 'Terminbestätigungen',
    description: 'Werde sofort informiert, wenn ein Termin bestätigt wird.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Lineup-Änderungen',
    description: 'Behalte den Überblick über Lineup-Änderungen der Gegner.'
  },
  {
    icon: 'i-lucide-message-square',
    title: 'Kommentare',
    description: 'Erhalte Benachrichtigungen bei neuen Kommentaren unter euren Matches.'
  },
  {
    icon: 'i-lucide-info',
    title: 'Detaillierte Übersichten',
    description: 'Erhalte ausführliche Informationen zu euren bevorstehenden Matches.'
  },
  {
    icon: 'i-lucide-calendar-days',
    title: 'Wöchentliche Übersicht',
    description: 'Starte jede Woche mit einer Übersicht aller anstehenden Matches.'
  },
  {
    icon: 'i-lucide-settings',
    title: 'Personalisierung',
    description: 'Passe die Benachrichtigungen individuell an die Bedürfnisse deines Teams an.'
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="PrimeBot"
      description="Der einfache Weg euer Prime League Team zu organisieren."
      orientation="vertical"
      :links="[
        { label: 'Discord', to: '/docs/discord', icon: 'i-lucide-message-circle', color: 'primary', size: 'xl' },
        { label: 'Telegram', to: '/docs/telegram', icon: 'i-lucide-send', color: 'neutral', variant: 'outline', size: 'xl' }
      ]"
    >
      <template #headline>
        Discord & Telegram Bot
      </template>
    </UPageHero>

    <UPageSection
      title="Features"
      description="Alles was du brauchst, um dein Prime League Team zu organisieren."
      :features="features"
    />
  </div>
</template>