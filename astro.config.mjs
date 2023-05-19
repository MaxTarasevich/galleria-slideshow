import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  build: {
    assets: 'images',
    format:'file',
  },
  
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (file) => {
            if (/\.(ttf|otf|woff|woff2|js|css)$/.test(file.name)) {
              return `assets/${file.name}`
            }
            return `oldImages/${file.name}`
          },
        },
      },
    },
  },
})
