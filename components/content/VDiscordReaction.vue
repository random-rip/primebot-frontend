<template>
  <discord-reaction>
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-reaction>
</template>

<script setup lang="ts">
import { DiscordReaction} from '@discord-message-components/vue'
</script>