<template>
  <main>
    <ContentQuery :path="`${path}/meta`" v-slot="{ data }" find="one">
      <n-h1>{{ data.contentTitle }}</n-h1>
    </ContentQuery>
    <ContentDoc :path="`/features`" v-slot="{ doc }">
      <n-h2>{{ doc.contentTitle }}</n-h2>
      <ContentRenderer :value="doc" />
    </ContentDoc>
    <ContentDoc :path="`${path}/first-steps`" v-slot="{ doc }">
      <n-h2>{{ doc.contentTitle }}</n-h2>
      <ContentRenderer :value="doc" />
    </ContentDoc>
    <ContentDoc :path="`${path}/commands`" v-slot="{ doc }">
      <n-h2>{{ doc.contentTitle }}</n-h2>
      <ContentRenderer :value="doc" />
    </ContentDoc>
    <ContentQuery :path="`${path}/faqs`" v-slot="{ data }">
      <n-h2>FAQ</n-h2>
      <v-faqs :data="data"></v-faqs>
    </ContentQuery>
  </main>
</template>

<script setup lang="ts">
import { NH1, NH2} from "naive-ui"

defineProps<{path: string}>()
</script>