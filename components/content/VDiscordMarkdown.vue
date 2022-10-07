<template>
  <discord-markdown>
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-markdown>
</template>

<script setup lang="ts">
import { DiscordMarkdown} from '@discord-message-components/vue'
</script>