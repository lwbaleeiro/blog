// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lwbaleeiro.github.io',
  // @ts-ignore
  base: process.env.NODE_ENV === 'production' ? '/blog' : '/',
});