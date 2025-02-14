<template>
  <discord-embed-fields v-bind="$props">
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-embed-fields>
</template>

<script setup lang="ts">
import { DiscordEmbedFields} from '@discord-message-components/vue'

defineProps<{
  compactMode?: boolean
}>()
</script>