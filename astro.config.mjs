// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Pixel',
      customCss: ['./src/styles/custom.css'],
      components: {
        Hero: './src/components/Main.astro',
      },
      social: {
        github: 'https://github.com/igrisdev/ciberaprendepixel.git',
      },
      sidebar: [
        {
          label: 'Estadística Clásica',
          autogenerate: { directory: 'estadística-clásica' },
          collapsed: true,
        },
        {
          label: 'Estadística Computacional',
          autogenerate: { directory: 'estadística-computacional' },
          collapsed: false,
        },
        {
          label: 'Recursos Educativos',
          autogenerate: { directory: 'recursos-educativos' },
          collapsed: false,
        },
        {
          label: 'Datos Estadísticos Institucionales',
          autogenerate: { directory: 'datos-estadísticos-institucionales' },
          collapsed: false,
        },
      ],
    }),
    react(),
  ],
})
