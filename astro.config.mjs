import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://echa-wew.github.io',
	base: '/pancakarsa-blog',
	integrations: [mdx(), sitemap()],
});