import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import preact from '@astrojs/preact';
import solid from '@astrojs/solid-js';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    preact({
      include: ['**/preact/*'],
    }),
    solid({
      include: ['**/solid/*'],
    }),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});