import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    mdx(), 
    sitemap(), 
    partytown({
      config: {
        // Sallii GTM:n datalayer-viestien kulkevan pääsäikeen ja Partytownin välillä
        forward: ["dataLayer.push"],
      },
    })
  ],
  site: 'https://www.meriadoc.fi',
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    },
    remarkPlugins: [],
    rehypePlugins: []
  },
});