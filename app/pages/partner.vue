<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const collectionName = computed(() => `content_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(() => `${collectionName.value}:partner`, () =>
  queryCollection(collectionName.value).path('/partner').first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" :prose="false" />
</template>
