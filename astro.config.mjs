// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGithubAlerts from 'remark-github-alerts';
import "remark-github-alerts/styles/github-colors-light.css";
import "remark-github-alerts/styles/github-colors-dark-class.css";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGithubAlerts],
  },
  site: 'https://hakimifr.github.io',
  base: '/RM6785-docs',
  integrations: [
    starlight({
      title: 'RM6785 Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hakimifr/RM6785-docs' }],
      favicon: '/favicon.jpg',
      sidebar: [
        {
          label: 'Main',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Moved', slug: '404' },
          ],
        },
      ],
    }),
  ],
});
