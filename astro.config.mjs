import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://usn-iot-final.denisd3d.fr',
  integrations: [tailwind()]
});