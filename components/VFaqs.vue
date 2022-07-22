<template>
  <NCollapse display-directive="show">
<!--    <n-collapse-item v-for="faq in data" :key="faq.title" :title="faq.title" :name="faq.title">-->
<!--      <div>test</div>-->
<!--    </n-collapse-item>-->
    <NCollapseItem title="right" name="1">
      <div>good</div>
    </NCollapseItem>
<!--    <n-collapse-item title="right" name="2">-->
<!--      <div>nice</div>-->
<!--    </n-collapse-item>-->
<!--    <n-collapse-item title="right" name="3">-->
<!--      <div>very good</div>-->
<!--    </n-collapse-item>-->
  </NCollapse>
</template>

<script setup lang="ts">
import {NCollapse, NCollapseItem} from "naive-ui";

const props = defineProps<{data: Array<any>}>()
</script>