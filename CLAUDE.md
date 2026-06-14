# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview the production build locally
npx astro check  # TypeScript/Astro type checking
```

There are no test scripts configured. The CI pipeline runs `npm ci && npm run build` on push to `main` and deploys to GitHub Pages (`https://nwkyom.github.io/portfolio`).

## Architecture

This is a **bilingual (fr/en) personal portfolio** built with Astro 5 + Vue 3 + Tailwind CSS v4.

### Routing & i18n

- The site lives at base path `/portfolio` (configured in `astro.config.mjs`).
- All routes are locale-prefixed: `/portfolio/fr/...` and `/portfolio/en/...`.
- `src/pages/index.astro` just redirects to `/portfolio/fr`.
- Each locale has its own page tree under `src/pages/fr/` and `src/pages/en/`.
- Translations live in `src/i18n/fr.ts` and `src/i18n/en.ts`. Use `t(locale)` from `src/i18n/utils.ts` to get typed translations in any component. Both files must stay in sync when adding new keys.

### Content Collections

Content is managed via Astro Content Collections (defined in `src/content.config.ts`):

- **`experience`** — `src/content/experience/{fr,en}/*.md` — professional timeline entries
- **`projects`** — `src/content/projects/{fr,en}/*.md` — project showcase cards

Each markdown file has frontmatter with a `locale` field (`fr` | `en`) and an `order` field (number, controls display order). When adding or updating content, **both locale versions must be created** (matching filenames under `fr/` and `en/`).

### Component Structure

```
src/
  components/
    animations/   # FadeIn.astro (GSAP ScrollTrigger wrapper)
    layout/       # Header.astro, Footer.astro
    sections/     # Hero, SkillsGrid, Timeline, ProjectCard, CounterStat
    ui/           # Badge, LangSwitch, ThemeToggle
  data/
    personal.ts   # Central source of truth for name, links, stats, bio
    skills.ts     # Skill categories and proficiency levels
  i18n/           # Translation files + utility functions
  layouts/
    BaseLayout.astro  # Root HTML shell (SEO, theme init, fonts)
  pages/
    {fr,en}/      # index, experience, projects, contact pages
  styles/
    global.css    # Global Tailwind + custom CSS
```

### Path Alias

`@/` maps to `src/` (configured in `tsconfig.json`). Use this alias for all imports.

### Theme

Dark/light mode is persisted in `localStorage` under the key `theme`. The `BaseLayout.astro` injects an inline script to apply the class before first render, preventing flash.

### Integrations

- **Vue 3** — used for interactive components when Astro's static rendering is insufficient
- **GSAP** — scroll-triggered animations via `FadeIn.astro` wrapper
- **@astrojs/sitemap** — auto-generates sitemap at build time
- **Tailwind CSS v4** — loaded via `@tailwindcss/vite` Vite plugin (not the Astro integration)
