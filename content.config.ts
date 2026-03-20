import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    content: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md']
      }
    })
  }
})
