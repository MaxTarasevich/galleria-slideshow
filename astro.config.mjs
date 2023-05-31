import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/MaxTarasevich.io/galleria-slideshow',
  base: 'galleria-slideshow',
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
    format: 'file',
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (file) => {
            if (/\.(ttf|otf|woff|woff2|js)$/.test(file.name)) {
              return `assets/${file.name}`
            }
            if (/\.(css)$/.test(file.name)) {
              return `assets/style.css`
            }
            return `oldImages/${file.name}`
          },
        },
      },
    },
  },
})
