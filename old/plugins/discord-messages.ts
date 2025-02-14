import '@discord-message-components/vue/styles'

import { defineNuxtPlugin } from '#app';
// @ts-ignore
import { install as DiscordMessageComponents } from '@discord-message-components/vue'

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(DiscordMessageComponents, {
      profiles: {
         kira: {
            author: 'Kira',
            avatar: '/kira.png',
            roleColor: '#0099ff',
         },
         primebot: {
            author: 'PrimeBot',
            avatar: '/prime_bot_avatar.jpg',
            roleColor: '#0099ff',
         },
         pinguine: {
            author: "Pinguine"
         }
      },
   })
});

