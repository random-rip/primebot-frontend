export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
    ],
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        }
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
                table: 'VTable',
                'discord-message': 'VDiscordMessage',
                'discord-messages': 'VDiscordMessages',
                'discord-interaction': 'VDiscordInteraction',
                'discord-markdown': 'VDiscordMarkdown',
                'discord-mention': 'VDiscordMention',
                'discord-reaction': 'VDiscordReaction',
                'discord-reactions': 'VDiscordReactions',
                'discord-embed': 'VDiscordEmbed',
                'discord-embed-fields': 'VDiscordEmbedFields',
                'discord-embed-field': 'VDiscordEmbedField',
            }
        }
    },
});
