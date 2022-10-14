<template>
  <main>
    <n-space vertical size="large">
      <section>
        <n-space vertical justify="center" align="center" style="height: calc(100vh - 64px)">
          <n-icon :size="largerThanSm ? 350 : 300">
            <svg viewBox="0 165 400 20" xmlns="http://www.w3.org/2000/svg">
              <path xmlns="http://www.w3.org/2000/svg"
                    d="M111.823 60.878c-.086.076-1.158.234-2.382.349-4.097.385-10.623 2.026-14.626 3.676l-1.667.685c-3.5 1.434-9.549 4.657-9.753 5.197-.068.179-.36.326-.648.326-.289 0-.525.167-.525.37 0 .204-.179.371-.398.371-.761 0-4.994 3.537-8.861 7.406-5.008 5.009-5.896 6.137-10.204 12.964-.738 1.17-2.856 5.492-4.36 8.898-.741 1.678-2.704 8.664-3.202 11.397a143.438 143.438 0 0 1-.583 3.039c-.109.509-.301 3.717-.426 7.129l-.227 6.204h-6.924v-17.724l-1.018-.803c-1.36-1.072-5.786-.947-6.615.186-.988 1.351-.743 87.211.253 88.476.562.715 1.106.976 2.037.976h1.269v7.757c0 10.692.528 11.502 7.5 11.502h3.5l.225 6.574c.124 3.616.318 7.074.431 7.686 1.259 6.827 2.591 11.742 4.122 15.216 2.093 4.751 5.213 10.619 5.759 10.833.173.068.315.294.315.502 0 .208.375.84.833 1.404a51.436 51.436 0 0 1 1.574 2.06c2.003 2.798 7.398 8.417 9.766 10.172a69.882 69.882 0 0 1 2.407 1.882c5.409 4.469 15.025 9.104 22.592 10.889 5.064 1.194 5.527 1.276 8.939 1.587 3.87.352 173.537.352 177.407 0 3.478-.316 3.959-.404 9.074-1.645 7.292-1.771 14.886-5.346 21.667-10.203 4.252-3.045 11.088-9.773 13.09-12.883.328-.509.69-1.009.803-1.111.84-.752 3.953-5.936 5.673-9.444 3.746-7.642 5.203-12.981 6.367-23.334.046-.407.105-2.865.131-5.463l.047-4.722h4.053c7.316 0 7.799-.722 7.799-11.664v-7.5l1.461-.234c2.822-.451 2.613 3.157 2.613-45.079 0-49.946.398-45.152-3.749-45.152-1.26 0-2.684.243-3.306.565l-1.093.565V128.889h-7.778l-.058-4.167c-.161-11.579-2.015-19.319-7.033-29.352-1.592-3.181-4.102-7.359-4.785-7.963-.115-.101-.742-.967-1.392-1.923-3.695-5.43-12.648-13.151-19.438-16.761-.87-.463-1.908-1.025-2.308-1.249-4.305-2.418-10.833-4.557-17.764-5.82l-4.814-.878-87.808-.019c-48.293-.011-87.877.044-87.962.121m197.066 84.2c4.692 1.54 12.19 6.986 12.216 8.873.003.237.144.487.313.555.463.186 2.134 3.916 2.828 6.314 1.029 3.549.65 26.22-.493 29.548-2.113 6.154-7.104 11.184-13.522 13.627L307.593 205l-106.297.11c-81.447.084-106.815.006-108.518-.334-4.103-.819-7.963-2.93-11.108-6.075-5.691-5.691-6.508-8.73-6.47-24.071.029-12.254.316-14.625 2.214-18.347.754-1.477 4.241-5.888 5.047-6.384.256-.157.682-.493.947-.745 2.198-2.1 7.086-4.2 10.666-4.583 1.12-.12 2.109-.283 2.197-.363.088-.08 47.421-.095 105.185-.033l105.025.112 2.408.791m-172.778 6.067a22.375 22.375 0 0 0-12.445 9.132c-.998 1.507-1.814 2.828-1.814 2.935 0 .107-.237.72-.527 1.362-3.922 8.693-.718 23.254 6.176 28.069.662.462 1.286.932 1.388 1.044 6.777 7.468 24.948 4.745 31.012-4.647.251-.389.9-1.373 1.442-2.188 4.157-6.245 4.434-17.22.608-24.074-.455-.815-1.003-1.884-1.218-2.377-2.984-6.832-16.026-11.735-24.622-9.256m117.593-.046c-11.491 3.46-18.275 14.192-16.675 26.377 2.288 17.418 20.842 26.289 34.92 16.696 2.51-1.711 5.829-5.111 5.829-5.971 0-.233.134-.423.299-.423 1.23 0 3.765-8.151 3.919-12.603.555-16.112-13.897-28.411-28.292-24.076m24.994 96.401c-1.19 7.321-5.955 12.8-12.957 14.898-2.809.842-129.804.839-132.584-.003-2.151-.651-4.869-1.922-5.869-2.744-1.026-.844-3.961-3.94-4.601-4.854-1.21-1.726-2.96-7.76-2.478-8.54.12-.193 33.236-.331 79.475-.331h79.27l-.256 1.574m-154.254 79.352"
                    fill-rule="evenodd"></path>
            </svg>
          </n-icon>
          <n-h1 class="title">PrimeBot</n-h1>
          <n-space>
            <nuxt-link to="get-started/discord">
            <n-button color="#7289da" size="large">
              <n-icon size="30" color="white">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="h-8">
                  <path xmlns="http://www.w3.org/2000/svg"
                        d="M13.647 14.907a1.448 1.448 0 1 0 1.326 1.443a1.385 1.385 0 0 0-1.326-1.443zm4.745 0a1.448 1.448 0 1 0 1.326 1.443a1.385 1.385 0 0 0-1.326-1.443z"
                        fill="currentColor"></path>
                  <path xmlns="http://www.w3.org/2000/svg"
                        d="M24.71 4H7.29a2.671 2.671 0 0 0-2.665 2.678v17.576a2.671 2.671 0 0 0 2.665 2.678h14.742l-.689-2.405l1.664 1.547l1.573 1.456L27.375 30V6.678A2.671 2.671 0 0 0 24.71 4zm-5.018 16.978s-.468-.559-.858-1.053a4.102 4.102 0 0 0 2.353-1.547a7.44 7.44 0 0 1-1.495.767a8.556 8.556 0 0 1-1.885.559a9.107 9.107 0 0 1-3.367-.013a10.913 10.913 0 0 1-1.911-.559a7.618 7.618 0 0 1-.949-.442c-.039-.026-.078-.039-.117-.065a.18.18 0 0 1-.052-.039a4.56 4.56 0 0 1-.364-.221a4.043 4.043 0 0 0 2.275 1.534c-.39.494-.871 1.079-.871 1.079a4.713 4.713 0 0 1-3.965-1.976a17.409 17.409 0 0 1 1.872-7.579a6.428 6.428 0 0 1 3.653-1.365l.13.156a8.77 8.77 0 0 0-3.419 1.703s.286-.156.767-.377a9.762 9.762 0 0 1 2.951-.819a1.28 1.28 0 0 1 .221-.026a11 11 0 0 1 2.626-.026a10.597 10.597 0 0 1 3.913 1.248a8.652 8.652 0 0 0-3.237-1.651l.182-.208a6.428 6.428 0 0 1 3.653 1.365a17.409 17.409 0 0 1 1.872 7.579a4.752 4.752 0 0 1-3.978 1.976z"
                        fill="currentColor"></path>
                </svg>
              </n-icon>
              <n-text style="color: white" strong>Get Started</n-text>
            </n-button>
            </nuxt-link>
            <nuxt-link to="get-started/telegram">
              <n-button color="#2AABEE" size="large">
                <n-icon size="25" color="white">
                  <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" class="h-8 my-auto">
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                          fill="currentColor"></path>
                  </svg>
                </n-icon>
                <n-text style="color: white" strong>Get Started</n-text>
              </n-button>
            </nuxt-link>
          </n-space>
          <n-button size="small" @click="scrollDown">Überblick</n-button>
        </n-space>
      </section>
      <article ref="about" style="text-align: center">
        <ContentDoc path="/home/short-description"/>
      </article>
      <section>
        <ContentQuery path="/home/overview/meta" v-slot="{data}" find="one">
          <n-h2 style="text-align: center">{{ data.title }}</n-h2>
        </ContentQuery>

        <ContentQuery :path="`home/overview/features/descriptions`" v-slot="{ data }">
          <article class="feature-list"  v-for="(feature, index) in data">
              <div>
                <v-discord-messages v-if="feature.messages?.length">
                  <v-discord-message v-for="message in feature?.messages" v-bind="getMessage(message)">
                    <ContentRenderer :value="getMessage(message)" :components="{p:'p'}"></ContentRenderer>
                  </v-discord-message>
                </v-discord-messages>
              </div>
              <div style="text-align: center">
                <ContentRenderer :value="feature"/>
              </div>
          </article>
        </ContentQuery>
      </section>
    </n-space>
  </main>
</template>

<script setup>
import {NH1, NH2, NIcon, NSpace, NText, NButton} from 'naive-ui'
import {queryContent, ref} from "#imports";

const about = ref()

const scrollDown = () => about.value?.scrollIntoView({behavior: "smooth"})

import {useBreakpoints, breakpointsTailwind} from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const largerThanSm = breakpoints.greater('sm')
// const largerThanMd = breakpoints.greater('md')


const {data: messages} = await useAsyncData('messages', () => queryContent('/home/overview/features/messages').find())
const {data: featuresMeta} = await useAsyncData('featuresMeta', () => queryContent('home/overview/meta').findOne())


const getMessage = (path) => {
  return messages.value.find((m) => {
    return m._path === `/home/overview/features/messages/${path}`
  })
}
</script>

<style>

a {
  text-decoration: none
}

.title {
  font-size: 4rem;
}

@media (min-width: 768px) {
  .feature-list {
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
  }

  .feature-list:nth-child(odd) {
    flex-direction: row;
  }

  .feature-list > div {
    flex: 1
  }

  .title {
    font-size: 6rem;
  }
}
</style>