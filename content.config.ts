import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing_de: defineCollection({
      type: 'page',
      source: { include: 'de/**/index.md', prefix: '' },
    }),
    landing_en: defineCollection({
      type: 'page',
      source: { include: 'en/**/index.md', prefix: '' },
    }),
    content_de: defineCollection({
      type: 'page',
      source: { include: 'de/**', exclude: ['de/index.md'], prefix: '' },
    }),
    content_en: defineCollection({
      type: 'page',
      source: { include: 'en/**', exclude: ['en/index.md'], prefix: '' },
    }),
  },
})
