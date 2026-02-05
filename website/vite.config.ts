import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor packages more granularly
          if (id.includes('node_modules')) {
            if (id.includes('vue-router')) {
              return 'vue-router';
            }
            if (id.includes('@vueuse')) {
              return 'vueuse';
            }
            if (id.includes('date-fns')) {
              return 'date-fns';
            }
            if (id.includes('leaflet')) {
              return 'leaflet';
            }
            if (id.includes('primevue') || id.includes('primeicons')) {
              return 'primevue';
            }
            if (id.includes('vue')) {
              return 'vue';
            }
            // Other node_modules
            return 'vendor';
          }
        },
      },
    },
  },
})
