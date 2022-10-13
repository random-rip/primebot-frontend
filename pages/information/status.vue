<template>
  <main>
    <n-h1>Status</n-h1>
        <n-space vertical>
          <n-card>
            <n-space justify="center">
              Discord Bot <n-text :type="status?.discord_status ? 'success' : 'error'" strong>{{status?.discord_status ? 'online' : 'offline'}}</n-text>
            </n-space>
          </n-card>
          <n-card>
            <n-space justify="center">
              Telegram Bot <n-text :type="status?.telegram_status ? 'success' : 'error'" strong>{{status?.telegram_status ? 'online' : 'offline'}}</n-text>
            </n-space>
          </n-card>
          <n-card>
            <n-space justify="center">
              PrimeLeague Api <n-text :type="status?.prime_league_status ? 'success' : 'error'" strong>{{status?.prime_league_status ? 'online' : 'offline'}}</n-text>
            </n-space>
          </n-card>
        </n-space>
  </main>
</template>

<script setup lang="ts">
import {NH1, NSpace, NCard, NText} from 'naive-ui'
import {useLazyFetch} from "#imports";


const { pending, data: status } = useLazyFetch('https://www.primebot.me/api/status/')
</script>