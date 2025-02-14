<template>
  <discord-message v-bind="$props">
    <template
        v-for="slot in Object.keys($slots)"
        #[slot]
    >
      <slot :name="slot" />
    </template>
  </discord-message>
</template>

<script setup lang="ts">
import { DiscordMessage} from '@discord-message-components/vue'

defineProps<{
  author?: string
  avatar?: string
  bot?: boolean
  edited?: boolean
  profile?: string
  roleColor?: string
  timeStamp?: Date | string
}>()
</script>