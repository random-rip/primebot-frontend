import { setup } from '@css-render/vue3-ssr';
import { defineNuxtPlugin } from '#app';
import naive, {NGi, NTransfer} from "naive-ui";
// I'm not sure whether the plugin is called twice in each refreshing
// Maybe it's expected. If you have more information about it, please comment in the issue

export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) {
        const { collect } = setup(nuxtApp.vueApp);
        const originalRenderMeta = nuxtApp.ssrContext?.renderMeta;
        // @ts-expect-error
        nuxtApp.ssrContext = nuxtApp.ssrContext || {};
        // @ts-expect-error
        nuxtApp.ssrContext.renderMeta = () => {
            if (!originalRenderMeta) {
                return {
                    headTags: collect(),
                };
            }
            const originalMeta = originalRenderMeta();
            if ("then" in originalMeta) {
                return originalMeta.then((resolvedOriginalMeta) => {
                    return {
                        ...resolvedOriginalMeta,
                        headTags: resolvedOriginalMeta["headTags"] + collect(),
                    };
                });
            } else {
                return {
                    ...originalMeta,
                    headTags: originalMeta["headTags"] + collect(),
                };
            }
        };
    }
});

