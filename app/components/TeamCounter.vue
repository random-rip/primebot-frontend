<script setup lang="ts">
import { useTransition, TransitionPresets } from '@vueuse/core'

const { t } = useI18n()
const config = useRuntimeConfig()

const { data, status } = await useFetch<{ registered_teams: number }>(
  () => `${config.public.apiBaseUrl}/api/v1/status/`,
  {
    lazy: true,
    default: ()=>({registered_teams: 0})
  },
)

const teamCount = computed(()=>{
  return data.value.registered_teams
})

const displayCount = useTransition(teamCount, {
  duration: 2000,
  transition: TransitionPresets.easeOutCubic,
})
</script>

<template>
  <div class="text-center py-6">
    <USkeleton v-if="status === 'pending'"></USkeleton>
    <p class="text-lg sm:text-xl font-bold" v-else>
      {{ t('teamCounter.text', { count: Math.round(displayCount) }) }}
    </p>
  </div>
</template>
