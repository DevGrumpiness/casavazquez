module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' ? {
            content: [
                './index.html',
                './src/**/*.{vue,js,ts,jsx,tsx}',
            ],
            defaultExtractor: (content) => {
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                return broadMatches.concat(innerMatches)
            },
            safelist: {
                standard: [
                    /-(leave|enter|appear)(|-(to|from|active))$/,
                    /^(?!cursor-move).+-move$/,
                    /^router-link(|-exact)-active$/,
                    /data-v-.*/,
                    /^v-/,
                    /^p-/,
                    /^pi-/,
                ],
                deep: [/modal/, /slider/, /notification/, /wine/, /snack/, /nav/],
                greedy: [/^leaflet-/, /leaflet/],
            },
        } : false,
        autoprefixer: {},
    },
}
