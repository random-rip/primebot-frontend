<template>
  <main>
    <n-h1>Changelogs</n-h1>
    <ContentQuery path="/changelogs" v-slot="{data}" :sort="{created_at: -1}">
      <n-space vertical size="large">
        <article v-for="changelog in data" :key="changelog.id">
          <ContentRenderer :value="changelog"/>
        </article>
      </n-space>
    </ContentQuery>
  </main>
</template>

<script setup lang="ts">
import {NH1, NSpace} from 'naive-ui'
</script>
