<template>
  <discord-embed-field v-bind="$props">
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-embed-field>
</template>

<script setup lang="ts">
import { DiscordEmbedField} from '@discord-message-components/vue'

defineProps<{
  fieldTitle?: string
  inline?: boolean
}>()
</script>