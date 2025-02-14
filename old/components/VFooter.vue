<template>
  <footer>
    <n-space justify="center" size="medium">
      <NuxtLink :to="link.to" v-for="link in links" :key="link.to"><n-text depth="3">{{link.text}}</n-text></NuxtLink>
    </n-space>
  </footer>
</template>

<script setup lang="ts">
import {NSpace, NText} from 'naive-ui'

const links = [
  {text: 'Impressum', to: '/imprint'},
  {text: 'Kontakt', to: '/information/contact'},
  {text: 'Datenschutz', to: '/privacy'},
  {text: 'Nutzungsbedingungen', to: '/tos'},
]
</script>