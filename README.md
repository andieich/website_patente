# Andreas Eich — patente website

A bilingual (English / French) static website built with [Astro](https://astro.build/). Content lives in editable Markdown and `.astro` page files; the build outputs plain static HTML, CSS, and tiny JS — no server, no database, no CMS to maintain.

---

## Quick start (local development)

You need Node.js 20+ installed. [Install from nodejs.org](https://nodejs.org/) if you don't have it.

```bash
cd astro-site
npm install
npm run dev
```

Open <http://localhost:4321> — the site reloads automatically as you edit files.

To build the production site:

```bash
npm run build      # outputs to astro-site/dist/
npm run preview    # local preview of the built site
```

---

## Editing content

### Text on pages (home, about, services, CV, publications, contact)

Each page has its content **inline** in a small `.astro` component under `src/components/`. The English and French copy sit side-by-side in a single `c = lang === 'fr' ? {…} : {…}` block — edit the strings, save, the dev server reloads.

| Page              | File                                          |
|-------------------|-----------------------------------------------|
| Home              | `src/components/Home.astro`                   |
| About             | `src/components/AboutPage.astro`              |
| CV                | `src/components/CVPage.astro`                 |
| Publications      | `src/components/PublicationsPage.astro`       |
| Services overview | `src/components/ServicesIndex.astro`          |
| Service detail    | `src/pages/services/<slug>.astro` (and `fr/`) |
| Contact           | `src/components/ContactPage.astro`            |

### Navigation labels, button text, footer

All UI strings (menu items, breadcrumbs, button labels) are in **`src/i18n/ui.ts`** — one object per language. Add a key, use it as `tt('your.key')` from any page.

### News / blog posts

News posts are Markdown files in `src/content/news/<lang>/`. Each post has frontmatter:

```markdown
---
title: "Your post title"
date: 2025-04-10
summary: "Short description shown on the listing page."
image: "/images/coral-rays.jpg"     # optional
imageAlt: "Description for screen readers"
lang: "en"                           # or "fr"
translationKey: "unique-slug"        # MUST match between EN and FR versions
draft: false                         # set true to hide
---

Your post body in **Markdown**.
```

To add a post:

1. Create `src/content/news/en/2026-01-my-post.md` (English version).
2. Create `src/content/news/fr/2026-01-my-post.md` (French version) with the **same `translationKey`**.
3. Save. Dev server picks it up automatically.

The `translationKey` lets the language switcher take a reader from the EN version of a post to the FR version of the *same* post. If a post only exists in one language, the switcher falls back to the news index.

### Images

Drop them into `astro-site/public/images/`. Reference them as `/images/your-photo.jpg` from anywhere.

The hero photo on the home page is `public/images/hero-fish-rays.jpg` — replace the file (keep the name) and the home page updates.

---

## Adding a third language later (e.g. German)

1. Add `de: 'Deutsch'` to `languages` in `src/i18n/ui.ts`, and a `de: { … }` block with all keys translated.
2. Add `'de'` to `locales` in `astro.config.mjs`.
3. Mirror the `src/pages/fr/` folder structure under `src/pages/de/`, importing the same components with `lang="de"`.
4. Add German Markdown posts under `src/content/news/de/`.

The `Nav` component reads from `languages` and renders a switcher entry automatically.

---

## Deploying

### Option 1 — Netlify (simplest)

1. Push the project to GitHub.
2. Sign in to [netlify.com](https://www.netlify.com/), "Add new site → Import an existing project", select your repo.
3. Netlify detects Astro automatically. Build command: `npm run build`. Publish directory: `dist`.
4. Done. Every push to `main` rebuilds and deploys; pull requests get preview URLs.

You can plug in a custom domain (e.g. `andreaseich.pf`) from Netlify's dashboard.

### Option 2 — GitHub Pages (free, everything on GitHub)

1. In `astro.config.mjs`, set `site` to your final URL (e.g. `https://andieich.github.io`) and uncomment `base` if publishing under a subpath like `/patente_website`.
2. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci
           working-directory: astro-site
         - run: npm run build
           working-directory: astro-site
         - uses: actions/upload-pages-artifact@v3
           with: { path: astro-site/dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

3. Repo Settings → Pages → Source: "GitHub Actions". Push to `main`.

### Option 3 — Cloudflare Pages

Similar to Netlify — connect repo, build command `npm run build`, output directory `astro-site/dist`. Fastest CDN of the three.

---

## URL structure

- `/` → English home
- `/about/`, `/services/`, `/news/`, `/contact/`, `/cv/`, `/publications/`
- `/services/fieldwork/`, `/services/statistics/`, `/services/surveys/`, `/services/documentation/`
- `/news/<translationKey>/` for each post
- `/fr/…` mirrors all of the above in French

The default language (English) sits at the root; French is prefixed with `/fr/`. To swap them, change `defaultLocale` in `astro.config.mjs` and `defaultLang` in `src/i18n/ui.ts`.

---

## File map

```
astro-site/
├── astro.config.mjs            # Astro + i18n configuration
├── package.json
├── public/
│   ├── images/                 # Photos referenced as /images/<name>.jpg
│   └── 2026_CV_AEich.pdf       # Drop your CV PDF here
└── src/
    ├── components/             # Reusable .astro components (Nav, Footer, page bodies)
    ├── content/
    │   ├── config.ts           # News collection schema
    │   └── news/
    │       ├── en/             # English Markdown posts
    │       └── fr/             # French Markdown posts
    ├── i18n/ui.ts              # All UI strings, both languages
    ├── layouts/Base.astro      # HTML shell
    ├── pages/
    │   ├── *.astro             # English routes
    │   └── fr/                 # French routes (mirror of above)
    └── styles/global.css       # Design tokens & base styles
```

---

## Notes

- The contact page uses `mailto:` — no form backend to maintain.
- The patente number (`G82689`) is in `src/i18n/ui.ts` under `footer.legal`.
- Sitemap and `hreflang` tags are generated automatically on build.
