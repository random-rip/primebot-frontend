<template>
  <n-table :single-line="false">
    <slot></slot>
  </n-table>
</template>

<script setup>
import {NTable} from 'naive-ui'
</script>