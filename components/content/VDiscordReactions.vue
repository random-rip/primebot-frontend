<template>
  <discord-reactions>
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-reactions>
</template>

<script setup lang="ts">
import { DiscordReactions} from '@discord-message-components/vue'
</script>