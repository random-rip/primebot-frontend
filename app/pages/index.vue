<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: '/getting-started/discord',
    icon: 'i-ic-round-discord',
  },
  {
    label: 'Get started',
    to: '/getting-started/telegram',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-ic-round-telegram',
  },
  {
    label: 'Überblick',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])

</script>

<template>
    <UPageHero
      class="h-full flex items-center justify-center"
      title="PrimeBot"
      orientation="vertical"
      reverse
      :links="links"
    >
      <div class="flex justify-center text-white">
        <Icon name="primebot:logo-filled" style="color: white" />
      </div>
    </UPageHero>
</template>
