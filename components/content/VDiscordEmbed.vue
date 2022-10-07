<template>
  <discord-embed v-bind="$props">
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-embed>
</template>

<script setup lang="ts">
import { DiscordEmbed} from '@discord-message-components/vue'

defineProps<{
  authorName?: string
  authorIcon?: string
  authorUrl?: string
  borderColor?: string
  embedTitle?: string
  thumbnail?: string
  image?: string
  footerIcon?: string
  timestamp?: string
}>()
</script>