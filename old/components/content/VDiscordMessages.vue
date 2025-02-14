<template>
  <discord-messages v-bind="$props" style="border-radius: 10px">
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-messages>
</template>

<script setup lang="ts">
import { DiscordMessages} from '@discord-message-components/vue'

defineProps<{compactMode?: boolean, lightTheme?: boolean}>()
</script>