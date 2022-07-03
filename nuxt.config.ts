import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'naive-ui/nuxt'
    ],
    build: {
        transpile: [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
        ],
    },
    vite: {
        optimizeDeps: {
            include: ["date-fns-tz/esm/formatInTimeZone"],
        },
    },
    components: true,
    content: {
        markdown: {
            tags: {
                h1: 'VH1',
                h2: 'VH2',
                h3: 'VH3',
                h4: 'VH4',
                h5: 'VH5',
                h6: 'VH6',
                p: 'VP',
                ol: 'VOl',
                ul: 'VUl',
                li: 'VLi',
                a: 'VA',
                blockquote: 'VBlockquote',
            }
        }
    },
});
