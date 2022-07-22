<template>
  <NCollapse display-directive="show">
      <NCollapseItem :title="faq.title" :name="faq._path" v-for="faq in data">
        <ContentRenderer :value="faq"></ContentRenderer>
      </NCollapseItem>
  </NCollapse>
</template>

<script setup lang="ts">
import {NCollapse, NCollapseItem} from "naive-ui";

const props = defineProps<{data: Array<any>}>()
</script>