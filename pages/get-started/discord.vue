<template>
  <ContentQuery :path="`${$route.path}/meta`" v-slot="{ data }" find="one">
    <n-h1>{{ data.title }}</n-h1>
  </ContentQuery>
  <ContentDoc :path="`/features`" v-slot="{ doc }">
    <n-h2>{{ doc.title }}</n-h2>
    <ContentRenderer :value="doc" />
  </ContentDoc>
  <ContentDoc :path="`${$route.path}/first-steps`" v-slot="{ doc }">
    <n-h2>{{ doc.title }}</n-h2>
    <ContentRenderer :value="doc" />
  </ContentDoc>
  <ContentDoc :path="`${$route.path}/commands`" v-slot="{ doc }">
    <n-h2>{{ doc.title }}</n-h2>
    <ContentRenderer :value="doc" />
  </ContentDoc>
  <ContentQuery :path="`${$route.path}/faqs`" v-slot="{ data }">
    <n-h2>FAQ</n-h2>
    <v-faqs :data="data"></v-faqs>
  </ContentQuery>
</template>

<script setup lang="ts">
  import { NH1, NH2} from "naive-ui"
</script>