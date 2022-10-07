<template>
  <main>
  <n-h1>Status</n-h1>
  <n-space vertical>
    <n-card>
      <n-result :status="status.discord_status ? 'success' : 'error'" title="Discord Bot"></n-result>
    </n-card>
    <n-card>
      <n-result :status="status.telegram_status ? 'success' : 'error'" title="Telegram Bot"></n-result>
    </n-card>
    <n-card>
      <n-result :status="status.prime_league_status ? 'success' : 'error'" title="Primeleague API"></n-result>
    </n-card>
  </n-space>
  </main>
</template>

<script setup lang="ts">
import {NH1, NSpace, NResult, NCard} from 'naive-ui'
import {useLazyFetch} from "#app";

const { pending, data: status } = useLazyFetch('https://www.primebot.me/api/status/')
</script>