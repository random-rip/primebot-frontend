<template>
  <discord-interaction>
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-interaction>
</template>

<script setup lang="ts">
import { DiscordInteraction} from '@discord-message-components/vue'
</script>