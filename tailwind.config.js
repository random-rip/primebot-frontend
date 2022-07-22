/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./content/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        // "./nuxt.config.{js,ts}", TODO: see https://github.com/nuxt/framework/issues/2886#issuecomment-1020237093
    ],
    theme: {
        extend: {
            colors: {
                test: '#fff000'
            }
        },
    },
    plugins: [],
}