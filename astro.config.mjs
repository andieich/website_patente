import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set this to your final site URL once you know where you're deploying.
// e.g. https://www.andreaseich.pf  or  https://andieich.github.io/patente_website
const SITE = 'https://websitepatente.netlify.app';

export default defineConfig({
  site: SITE,
  // If deploying to GitHub Pages under /repo-name/, also set:
  // base: '/patente_website',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // English at /, French at /fr/
    },
  },
  // Disable sitemap integration for now to avoid build failure on Netlify
  // Re-enable after updating or fixing @astrojs/sitemap if needed
  integrations: [],
});
