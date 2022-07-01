import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content'
    ],
    build: {
        transpile: ['vueuc', 'naive-ui'],   // fix dev error: Cannot find module 'vueuc'
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    vite: {
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()], // Automatically register all content in the `content` directory
            }),
        ],
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
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
            }
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: tag => ['vaadin-checkbox'].includes(tag)
        }
    },
})
