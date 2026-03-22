<script setup lang="ts">
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


const displayCount = ref(0)

function animateCount(target: number) {
  const duration = 2000
  const start = performance.now()

  function step(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayCount.value = Math.round(eased * target)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

watch(teamCount, (val) => {
  if (val && val > 0) {
    animateCount(val)
  }
})
</script>

<template>
  <div class="text-center py-6">
    <USkeleton v-if="status === 'pending'"></USkeleton>
    <p class="text-lg sm:text-xl font-bold" v-else>
      {{ t('teamCounter.text', { count: displayCount.toLocaleString() }) }}
    </p>
  </div>
</template>
