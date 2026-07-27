# Antonin Gabet — Portfolio

Personal portfolio built with **Next.js (Pages Router)**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.
Deployed on Vercel: every push to `master` triggers a new deployment.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (flat config)
```

## Project layout

```
data/          All site content — edit here, not in the components
  site.ts        Name, role, links, CV URLs, brand palette
  sections.ts    Homepage sections (ids, labels, nav labels)
  about.ts       "About Me" paragraphs
  timeline.ts    Education timeline
  projects.ts    Project cards
  passions.ts    Passion cards + navbar dropdown
  posts.ts       Blog index (a post without `href` renders as "work in progress")

components/    UI. SubPageLayout provides the shared chrome for passion/blog pages
hooks/         useActiveSection — observes which section is in view
contexts/      ThemeContext — class-based dark mode, applied before first paint
pages/         Routes. sitemap.xml and api/og are generated
styles/        globals.css — design tokens, fluid type scale, scroll-snap
```

### Adding content

- **A project / passion / blog entry** — add an object to the matching file in `data/`.
- **A blog post page** — create `pages/blog/<slug>.tsx` using `SubPageLayout` with
  `variant="article"`, then add the entry to `data/posts.ts` with a matching `href`.
  The sitemap picks it up automatically.

## Design system

Tailwind v4 is configured entirely from CSS — there is no `tailwind.config.js`.

- **Brand palette** — `@theme` in `styles/globals.css` exposes `bg-pastel-pink`,
  `bg-pastel-purple`, `bg-pastel-orange`, etc.
- **Semantic tokens** — `text-ink`, `text-ink-soft`, `text-ink-muted`, `bg-surface`,
  `border-border-soft` flip automatically between light and dark. Prefer these over
  writing `darkMode ? … : …` in components.
- **Dark mode** — driven by the `.dark` class on `<html>`. `@custom-variant dark`
  in `globals.css` is what makes `dark:` utilities follow the in-page toggle rather
  than the OS setting; without it Tailwind v4 defaults to `prefers-color-scheme`.

## Scrolling

The homepage sections snap via CSS (`scroll-snap-type: y proximity` on
`html.snap-sections`). Scrolling is never taken over in JavaScript, so trackpad,
wheel, touch and keyboard all behave natively. `useActiveSection` only observes
which section is in view to drive the side indicator.

## SEO

`components/Seo.tsx` renders the title, description, canonical URL and Open Graph /
Twitter cards for every page. Social preview images are generated at `/api/og`, and
`/sitemap.xml` is built from the `data/` files.
