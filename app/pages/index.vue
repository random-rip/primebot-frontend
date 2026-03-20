<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const collectionName = computed(() => `landing_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(()=>`${collectionName.value}:index`, () =>
  queryCollection(collectionName.value).path('/').first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
