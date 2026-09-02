# Site Architecture

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion (framer-motion successor)
- MDX via next-mdx-remote + gray-matter
- Deployment: Vercel
- Future backend: Supabase

## Routes

```
/                          Homepage (narrative structure)
/work                      Projects index
/work/[slug]               Individual case study (MDX)
/notebook                  Thinking pieces index
/notebook/[slug]           Individual notebook entry (MDX)
/open-notebook             Working positions, open questions, lessons
/about                     Personal story
/resume                    Resume view + download
/contact                   Contact (or embedded in footer)
```

## Content Model

All project and notebook content lives in `/content/` as MDX files with frontmatter. Content is loaded at build time via utility functions in `/src/lib/content.ts`.

### Project Frontmatter
```yaml
title: string
slug: string
question: string          # Problem framed as a question
status: 'complete' | 'in-progress' | 'archived'
date: string
tags: string[]
result: string            # One key result or observation
lesson: string            # One key lesson or opinion
thumbnail: string         # Path to thumbnail image
order: number             # Display order
```

### Notebook Frontmatter
```yaml
title: string
slug: string
category: string          # Building | Data & AI | Problem Solving | etc.
date: string
status: 'published' | 'draft'
relatedProject: string    # Optional slug reference
references: string[]      # Optional external links
```

## Component Organization

```
src/components/
  layout/         SiteHeader, SiteFooter, PageLayout, SectionContainer
  navigation/     MainNav, MobileNav, Breadcrumb
  homepage/       Hero, VisitorLens, ProjectCard, ProblemSolvingLoop, PhilosophyTeaser
  case-study/     ProjectHeader, ProblemStatement, AssumptionBlock, etc.
  notebook/       NotebookCard, NotebookEntry
  open-notebook/  WorkingPosition, OpenQuestion, LessonUnderRevision, ResponseForm
  shared/         ThemeToggle, Tag, StatusBadge, Callout, etc.
  mdx/            Custom MDX component mappings
```

## Key Architectural Decisions

1. **MDX for content**: Separates content from presentation. New projects/posts don't require code changes.
2. **App Router**: File-based routing, server components by default, client components only where needed.
3. **No CMS initially**: Content lives in the repo. Can migrate to headless CMS later without restructuring.
4. **Theme via CSS variables**: Avoids Tailwind dark: prefix sprawl. Single source of truth for colors.
5. **Motion library**: Only for interactions that communicate meaning. No decorative animation.
