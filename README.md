# Anwar Ayoon — Portfolio

Personal portfolio: a technology-driven problem solver's evolving notebook, 
case studies, and thinking — not a generic developer resume site.

**Start here if you're picking this project back up (human or Claude):**
Read `/docs/PORTFOLIO_VISION.md` first, then `/docs/TODO.md` for current status.

## Docs

- `docs/PORTFOLIO_VISION.md` — identity, priorities, core philosophy, north star
- `docs/DESIGN_SYSTEM.md` — typography, colors, spacing, motion rules
- `docs/SITE_ARCHITECTURE.md` — routes, stack, component organization
- `docs/CONTENT_MODEL.md` — case study structure, MDX components
- `docs/DECISIONS.md` — why things were built the way they were
- `docs/TODO.md` — phased roadmap and current status

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · MDX
(next-mdx-remote + gray-matter) · deployed to Vercel

## Adding Content

New projects and notebook entries are MDX files, not code changes:

- Projects: `content/projects/your-slug.mdx`
- Notebook entries: `content/notebook/your-slug.mdx`

See `docs/CONTENT_MODEL.md` for required frontmatter fields.

