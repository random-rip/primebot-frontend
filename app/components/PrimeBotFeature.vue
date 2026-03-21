<script setup>
defineProps({
  icon: { type: String, required: false },
  badge: { type: String, required: false },
})
</script>

<template>
  <UPageFeature :icon="icon">
    <template #title>
      <slot name="title" mdc-unwrap="p" />
    </template>
    <template #description>
      <slot name="description" mdc-unwrap="p" />
      <UBadge v-if="badge" :label="badge" color="primary" variant="subtle" size="xs" class="mt-1" />
    </template>
  </UPageFeature>
</template>
