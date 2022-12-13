<template>
  <main>
    <n-h1>Partner</n-h1>
    <n-space vertical>
      <n-card title="singularIT" style="max-width: 15rem">
        <template #cover>
          <n-image src="/sit-logo.png" alt="singularIT Logo" />
        </template>
        <n-space>
          <n-a href="https://www.singular-it.de">Website</n-a>
          <n-a href="https://blog.singular-it.de">Blog</n-a>
          <n-a href="https://www.singular-it.de/deine-karriere/dein-team">Team</n-a>
        </n-space>
      </n-card>
    </n-space>
  </main>
</template>

<script setup lang="ts">
import {NH1, NSpace, NCard, NA, NImage} from 'naive-ui'
import {useMeta} from "#imports";


useMeta({title: 'Partner'})
</script>