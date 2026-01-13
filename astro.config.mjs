// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // URL pública donde se alojará el sitio (GitHub Pages con nombre de repo)
  site: 'https://maurici123.github.io/maurici123-hub.github.io/',

  // Importante: base path para GitHub Pages (prefijo en las rutas)
  base: '/maurici123-hub.github.io/',

  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});