// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig:{
    public: {
      apiBase: "http://localhost:8000/api"
    }
  },

  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa',
      }
    }
  },

  css: [
    '~/assets/css/main.css',
    'notivue/notification.css',
    'notivue/animations.css',
    'notivue/notification-progress.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@pinia/nuxt', '@formkit/nuxt', 'notivue/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  formkit: {
    autoImport: true
  },
  
})