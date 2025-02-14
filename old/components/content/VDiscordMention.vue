<template>
  <discord-mention v-bind="$props">
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-mention>
</template>

<script setup lang="ts">
import { DiscordMention} from '@discord-message-components/vue'

defineProps<{
  highlight?: boolean,
  color?: string
  profile?: string
  type?: string
}>()
</script>