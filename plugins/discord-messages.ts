import '@discord-message-components/vue/styles'

import { defineNuxtPlugin } from '#app';
// @ts-ignore
import { install as DiscordMessageComponents } from '@discord-message-components/vue'

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(DiscordMessageComponents, {
      profiles: {
         grayknife: {
            author: 'Grayknife',
            avatar: 'https://i.imgur.com/0TeacfY.png',
            roleColor: '#0099ff',
         },
      },
   })
});

