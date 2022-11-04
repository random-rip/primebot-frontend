<template>
  <v-platform :path="$route.path"></v-platform>
</template>

<script setup lang="ts">
  import VPlatform from "~/components/VPlatform.vue";
  import {useMeta} from "#imports";

  useMeta({title: 'Discord'})
</script>