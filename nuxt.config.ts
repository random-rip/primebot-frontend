// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/content', '@nuxt/image', '@nuxt/a11y', 'nuxt-studio', '@nuxtjs/mdc'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 5
  },
  experimental: {
    asyncContext: true
  },
  i18n: {
    locales: [
      { code: 'de', name: 'Deutsch', language: 'de-DE', file: 'de.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
    ],
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'de',
  },
  mdc: {
    highlight: {
      langs: ['diff']
    }
  },
  css: ['~/assets/css/main.css'],
  studio: {
    repository: {
      provider: 'github',
      owner: 'random-rip',
      repo: 'primebot-frontend',
      branch: 'next'
    }
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})