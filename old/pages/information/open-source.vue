<template>
  <main>
    <ContentDoc path="/open-source"></ContentDoc>
  </main>
  <n-h2>Contributors</n-h2>
  <n-space vertical size="small">
    <n-a href="https://github.com/random-rip/primebot_backend/graphs/contributors">
      <n-image preview-disabled src="https://contrib.rocks/image?repo=random-rip/primebot_backend"/>
    </n-a>
    <n-p> Made with
      <n-a href="https://contrib.rocks">contrib.rocks</n-a>
    </n-p>
  </n-space>
</template>


<script setup lang="ts">
import {NA, NH2, NImage, NP, NSpace} from 'naive-ui'
</script>