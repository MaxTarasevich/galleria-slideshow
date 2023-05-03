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
    assets: 'assets',
  },
  /*
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (file) => {
            if (/\.(ttf|otf|woff|woff2)$/.test(file.name)) {
              return `fonts/${file.name}`
            }
            if (/\.(js)$/.test(file.name)) {
              return `scripts/${file.name}`
            }
            if (/\.(css)$/.test(file.name)) {
              return `styles/${file.name}`
            }
            return `images/${file.name}`
          },
        },
      },
    },
  },*/
})
