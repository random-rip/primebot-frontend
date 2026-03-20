<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()
const collectionName = computed(() => `content_${locale.value}` as keyof Collections)
const slugPath = computed(() => '/' + (Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug || ''))

const { data: page } = await useAsyncData('page-' + slugPath.value, async () => {
  const result = await queryCollection(collectionName.value).path(slugPath.value).first()
  if (result) return result
  // Fallback to German content if not found in current locale
  if (locale.value !== 'de') {
    return queryCollection('content_de' as keyof Collections).path(slugPath.value).first()
  }
  return null
}, { watch: [locale] })

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
