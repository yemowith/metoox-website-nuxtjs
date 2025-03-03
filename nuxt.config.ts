// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tr from './i18n/locales/tr-TR.json'
import en from './i18n/locales/en-US.json'
import ar from './i18n/locales/ar-AR.json'

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.VITE_BASE_URL, //  || 'http://localhost:3000'
    },
  },

  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@dargmuesli/nuxt-cookie-control',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },

  css: ['~/assets/scss/app.scss'],

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ['./stores', './locales'],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  colorMode: {
    classSuffix: '',
  },

  image: {
    provider: 'ipx', // change to e.g 'vercel' if hosted on vercel
    quality: 80,
    format: ['png', 'jpeg', 'webp'],
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  i18n: {
    baseUrl: process.env.VITE_BASE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        isCatchallLocale: true,
      },
      {
        code: 'tr',
        iso: 'tr-TR',
        file: 'tr-TR.json',
      },
      {
        code: 'ar',
        iso: 'ar-AR',
        file: 'ar-AR.json',
      },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',

    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  eslint: {
    // lintOnStart: false,
  },

  pinia: {
    // autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  cookieControl: {
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    locales: ['en', 'tr', 'ar'],
  },

  compatibilityDate: '2024-12-26',
})
