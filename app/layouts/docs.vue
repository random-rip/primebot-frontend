<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
</script>

<template>
  <UContainer class="py-8 sm:py-12">
    <UPage>
      <slot />
    </UPage>
  </UContainer>
</template>
