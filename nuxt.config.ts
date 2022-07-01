import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content'
    ],
    build: {
        transpile: [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
        ],
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    vite: {
        optimizeDeps: {
            include: ["date-fns-tz/esm/formatInTimeZone"],
        },
    },
    css: ['@/assets/css/main.css'],
    components: true,
    content: {
        markdown: {
            tags: {
                h1: 'n-h1',
                h2: 'n-h2',
                h3: 'n-h3',
                h4: 'n-h4',
                h5: 'n-h5',
                h6: 'n-h6',
                p: 'n-p',
                ol: 'n-ol',
                ul: 'n-ul',
                li: 'n-li',
                a: 'n-a'
            }
        }
    },
})
