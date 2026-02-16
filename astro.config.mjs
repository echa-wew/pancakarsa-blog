import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://pancakarsa.my.id',
	integrations: [mdx(), sitemap()],
});