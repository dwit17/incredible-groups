// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Ensure root directory is treated as the source directory
  srcDir: '.',
  future: {
    compatibilityVersion: 4
  },

  // Nitro preset for Vercel deployment and route pre-rendering
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/our-story',
        '/projects',
        '/projects/the-aurum-monolith',
        '/projects/sanctuary-of-solitude',
        '/projects/the-apex-financial-pavilion',
        '/projects/elysian-clifftop-manor',
        '/projects/millenium-private-park',
        '/projects/kns-stolbovo-residences',
        '/projects/kotelnaya-kinetics-pavilion',
        '/projects/almaty-stone-manor',
        '/companies',
        '/companies/vanguard-proptech',
        '/companies/aethelred-capital',
        '/companies/kallisto-luxury-living',
        '/companies/zenith-modular',
        '/companies/solaria-energy',
        '/companies/helios-aviation',
        '/companies/orion-materials',
        '/companies/terra-nova-farms',
        '/companies/hyperion-water',
        '/companies/aegis-tokenization',
        '/showcase',
        '/contact',
        '/terms',
        '/terms-and-conditions',
        '/privacy',
        '/privacy-policy',
        '/legal'
      ]
    }
  },

  // Global SCSS stylesheet
  css: [
    'assets/scss/main.scss'
  ],

  // Nuxt Modules
  modules: [
    '@nuxtjs/seo',
    'nuxt-gtag'
  ],

  // Google Analytics 4 configuration
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID || 'G-XXXXXXXXXX',
    config: {
      page_title: 'Incredible Groups - Premium Real Estate & Investments'
    }
  },

  // SEO & Site Meta defaults
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://incrediblegroups.com',
    name: 'Incredible Groups',
    description: 'Incredible Groups - Pioneer of Ultra-Luxury Real Estate Landmarks, Private Estates, and Strategic Alternative Investments in India.',
    defaultLocale: 'en'
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Incredible Groups',
      url: 'https://incrediblegroups.com',
      logo: 'https://incrediblegroups.com/placeholders/brand-logo.svg',
      sameAs: [
        'https://linkedin.com/company/incredible-groups',
        'https://instagram.com/incrediblegroups'
      ]
    }
  },

  seo: {
    validateAppHead: false
  },

  // Cloudflare Web Analytics beacon script & Head configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Incredible Groups - Premium Real Estate & Investments',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0c0d0e' },
        {
          name: 'description',
          content: 'Incredible Groups develops iconic architectural landmarks and allocates sovereign-grade capital into high-growth proptech, infrastructure, and sustainable living ventures.'
        },
        { property: 'og:title', content: 'Incredible Groups - Premium Real Estate & Investments' },
        {
          property: 'og:description',
          content: 'Pioneering ultra-luxury real estate landmarks, private coastal sanctuaries, and strategic alternative investment portfolios across India.'
        },
        { property: 'og:image', content: '/placeholders/og-cover.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'preload', href: '/fonts/neue-haas-roman.otf', as: 'font', type: 'font/otf', crossorigin: '' },
        { rel: 'preload', href: '/fonts/neue-haas-light.otf', as: 'font', type: 'font/otf', crossorigin: '' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
