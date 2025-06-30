import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'bokadirekt-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          /^\/_/,
          /\/[^/?]+\.[^/]+$/,
          /^\/api\//,
          /^\/offline\.html$/
        ],
        skipWaiting: true,
        clientsClaim: true
      },
      includeAssets: [
        'favicon.ico', 
        'offline.html',
        'logo.png',
        'staff/*.png'
      ],
      manifest: {
        name: 'Massageverkstan i Jönköping AB',
        short_name: 'Massageverkstan',
        description: 'Massageverkstan i Jönköping AB - Professionell massage och välmående. Boka din behandling online.',
        theme_color: '#2D5A4F',
        background_color: '#2D5A4F',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['health', 'wellness', 'lifestyle'],
        lang: 'sv',
        icons: [
          {
            src: '/logo.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/logo.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/logo.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/logo.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/logo.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Boka behandling',
            short_name: 'Boka',
            description: 'Boka din behandling hos Massageverkstan',
            url: '/',
            icons: [
              {
                src: '/logo.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          },
          {
            name: 'Om oss',
            short_name: 'Om oss',
            description: 'Läs mer om Massageverkstan',
            url: '/om-oss',
            icons: [
              {
                src: '/logo.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          }
        ]
      },
      devOptions: {
        enabled: false
      },
      injectRegister: 'script',
      strategies: 'generateSW'
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion']
        }
      }
    }
  }
});