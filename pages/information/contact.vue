<template>
  <main>
    <n-h1>Kontakt</n-h1>
    <n-h2>Socials</n-h2>
    <n-a href="https://discord.gg/7NYgT2uFPm">
      <n-button type="info">Discord</n-button>
    </n-a>
    <n-h2>Core Crew</n-h2>
    <n-p>
      Ein Großteil von uns arbeitet als Entwickler:in bei der singularIT. Wir erhalten dort die Möglichkeit, Teile der
      Entwicklung am PrimeBot als SideProject-Time während der Arbeitszeit zu realisieren. Auch unterstützt uns die
      singularIT finanziell bei den Serverkosten.
    </n-p>
    <n-grid cols="1 600:3" x-gap="10" y-gap="10">
      <n-grid-item v-for="member in crewMembers">
        <n-card :title="member.name">
          <template #cover v-if="member.image">
            <img :src="member.image" :alt="`avatar-${member.name}`">
          </template>
          {{ member.role }}
        </n-card>
      </n-grid-item>
    </n-grid>
    <n-h2>Contributors</n-h2>
    <n-space vertical size="small">
      <n-a href="https://github.com/random-rip/primebot_backend/graphs/contributors">
        <n-image preview-disabled src="https://contrib.rocks/image?repo=random-rip/primebot_backend"/>
      </n-a>
      <n-p> Made with
        <n-a href="https://contrib.rocks">contrib.rocks</n-a>
      </n-p>
    </n-space>
  </main>
</template>

<script setup lang="ts">
import {NA, NButton, NCard, NGrid, NGridItem, NH1, NH2, NImage, NP, NSpace} from 'naive-ui'
import {ref, useMeta} from "#imports";

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
    name: "Janek",
    role: 'Lead-Developer[0]',
    image: '/janek.png',
  },
  {
    name: 'Robin',
    role: 'Lead-Developer[1]',
    image: '/robin.png'
  },
  {
    name: "Kira",
    role: 'Dogitalisierungsbeauftragte',
    image: '/kira.png',
  },
  {
    name: "Merlin",
    role: "Wizard developer",
    image: '/merlin.png',
  },
  {
    name: "Luca",
    role: "Designer",
    image: '/luca.jpeg',
  }
])

useMeta({title: 'Kontakt'})

</script>