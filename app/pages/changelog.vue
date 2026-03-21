<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('nav.changelog'),
  description: t('changelog.description')
})

interface Release {
  tag: string
  name: string
  createdAt: string
  markdown: string
}

const { data: versions } = await useFetch(computed(() => `https://ungh.cc/repos/random-rip/primebot_backend/releases`), {
  transform: (data: {
    releases: {
      name?: string
      tag: string
      publishedAt: string
      markdown: string
    }[]
  }) => {
    return data.releases.map(release => ({
      tag: release.tag,
      title: release.name || release.tag,
      date: release.publishedAt,
      markdown: release.markdown
    }))
  }
})
</script>

<template>
  <UContainer>
    <UPageHeader
      :title="t('nav.changelog')"
      :description="t('changelog.description')"
    />

    <UChangelogVersions>
      <UChangelogVersion
        v-for="release in versions"
        v-bind="release"
      >
        <template #body>
          <MDC :value="release.markdown" />
        </template>
      </UChangelogVersion>
    </UChangelogVersions>
  </UContainer>
</template>
