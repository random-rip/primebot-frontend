<template>
  <n-h1>Kontakt</n-h1>
  <n-h2>Socials</n-h2>
  <a href="https://discord.gg/7NYgT2uFPm"><n-button type="info">Discord</n-button></a>
  <n-h2>Core Crew</n-h2>
  <n-grid cols="1 600:3" x-gap="10" y-gap="10">
    <n-grid-item v-for="member in crewMembers">
      <n-card :title="member.name">
        <template #cover>
          <img :src="member.image" :alt="`avatar-${member.name}`">
        </template>
        {{ member.role }}
      </n-card>
    </n-grid-item>
  </n-grid>
  <n-h2>Contributors</n-h2>
  <n-a href="https://github.com/random-rip/primebot-frontend/graphs/contributors">hier</n-a>

</template>

<script setup lang="ts">
import {NH1, NH2, NGrid, NGridItem, NCard, NButton, NA} from 'naive-ui'
import {ref} from "#imports";

interface SocialLink {
  type: string,
  link: {
    href: string,
    text: string
  }
}

interface CrewMember {
  name: string,
  role: string,
  image?: string,
  social?: Array<SocialLink>
}

const crewMembers = ref<Array<CrewMember>>([
  {
    name: 'Robin',
    role: 'Developer',
    image: '/robin.png'
  },
  {
    name: "Janek",
    role: 'Developer',
    image: '/janek.png',
  },
  {
    name: "Kira",
    role: 'Dogitalisierungsbeauftrage',
    image: '/kira.png',
  },
  {
    name: "Merlin",
    role: "Merlin",
    image: '/merlin.png',
  },
  {
    name: "Luca",
    role: "Designer",
  }
])
</script>