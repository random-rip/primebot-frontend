<template>
  <n-a v-bind="$props"><slot></slot></n-a>
</template>

<script setup>
import {NA, aProps} from 'naive-ui'

defineProps(aProps)
</script>