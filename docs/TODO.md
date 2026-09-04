# TODO

## Phase 1 — Foundation ✅ Complete
- [x] Project scaffolding (Next.js 16, TypeScript, Tailwind v4)
- [x] Directory structure
- [x] Documentation (all 6 docs files)
- [x] Design tokens (CSS variables, light/dark, mapped to Tailwind v4 @theme)
- [x] Typography setup (Space Grotesk, Inter, JetBrains Mono via next/font)
- [x] Theme system (light/dark, no flash — inline script + React context)
- [x] Layout components (SiteHeader, SiteFooter, SectionContainer)
- [x] Navigation (responsive, mobile menu tested with Playwright)
- [x] Shared components (ThemeToggle, Tag, StatusBadge, Callout)
- [x] All route pages scaffolded with real metadata (no blank pages)
- [x] Content loading utilities (MDX + gray-matter, src/lib/content.ts)
- [x] Responsive system verified (390px mobile → 1440px desktop screenshots)
- [x] Build passes cleanly (`npm run build`)
- [x] Lint passes cleanly (`npm run lint`, 0 errors/warnings)
- [x] All 12 routes verified 200 status, zero console errors
- [x] prefers-reduced-motion verified working
- [x] Keyboard navigation verified (Tab moves through interactive elements)

**QA notes**: Verified via Playwright automation — build, lint, all routes,
interactive components (visitor lens, problem-solving loop, theme toggle,
mobile nav), and reduced-motion behavior. Screenshots taken at 1440px and
390px, light and dark themes.

## Phase 2 — Homepage ✅ Complete
- [x] Hero section (eyebrow, headline, supporting text, dual CTA — no rotating job titles)
- [x] Visitor lens interaction (4 options, sessionStorage persistence, verified working)
- [x] Project cards (problem-first framing, status badge, result + lesson, tags)
- [x] Problem-solving loop (interactive 6-step, real project examples, verified working)
- [x] Philosophy teasers (3 working beliefs linking to Notebook)
- [x] Homepage narrative flow (Hero → Lens → Work → Loop → Philosophy → CTA)

**Not yet done**: Homepage currently uses hardcoded project data in
FeaturedProjects.tsx rather than reading from `/content/projects/*.mdx`.
Should be wired to `getAllProjects()` from `src/lib/content.ts` once more
than one project has real MDX content (Phase 3/4).

## Phase 3 — Fast-SCNN Case Study ✅ Complete

**Received from Anwar**: `fast_scnn.py`, `cityscapes_dataset.py`, `loaders_test.py`,
`visualize_sample.py`, `train.py`, plus a full written follow-up answering 5
targeted questions (root cause of the PPM patch, real results, whether the
simplified architecture was deliberate, motivation, and what happened after).

- [x] Read and traced the actual architecture by hand (verified shapes + parameter
      counts with a standalone script — see `docs/DECISIONS.md` D010)
- [x] Corrected earlier invented claims: PyTorch not TensorFlow, no fabricated
      "real-time"/"vs. heavier alternatives" claims, corrected date to May 2025
- [x] Full case-study component library built, including `TrainingLossChart` and
      a `flag`-aware `ResultBlock` (caveat / invalid states) for presenting
      results that need visible qualification, not just a clean number
- [x] Interactive architecture diagram (`FastSCNNArchitectureDiagram`)
- [x] Case study page fully populated at `/work/fast-scnn-road-segmentation`
      using the 12-part structure — Friction, Initial Understanding, Reframing,
      Constraints, Approaches Considered, Architecture, Building the Workable
      Version, Results, Reflection, What I'd Change, and What Happened Next are
      all now real content grounded in Anwar's own account, not placeholders
- [x] The PPM `.eval()`/`no_grad()` mystery is resolved and precisely explained:
      a real `ValueError` from BatchNorm receiving a batch of exactly 1 sample
      (2,975 images ÷ batch_size=2 leaves a final batch of 1) — corrected from
      my earlier, directionally-right-but-imprecise hypothesis
- [x] Real results presented with real caveats kept visible, not smoothed over:
      86.59% pixel accuracy (training-set, not held-out), 0.6853 "mIoU" (actually
      an aggregate IoU, not true per-class mIoU), F1=414.28 (mathematically
      impossible, a bug, struck through and marked discarded)
- [x] Homepage/work-index cards and MDX frontmatter updated to match
- [x] Build + lint pass clean; verified via Playwright (all routes 200, zero
      console errors, visual review light/dark/mobile of the new sections)

**Small residual gap, noted transparently on the page itself**: the version of
`train.py` reviewed doesn't include the checkpoint-saving or evaluation code
that produced these results — Anwar's account references `fast_scnn_final.pth`
and a `config.py` that weren't part of the files shared. Not blocking, just
disclosed rather than glossed over.

**Anomaly worth flagging**: partway through this phase, two files
(`ResultBlock.tsx` with a `flag` prop, `TrainingLossChart.tsx` with the correct
real loss values already in it) were found already present in the project
before I'd written them in that turn. Content was verified against Anwar's
answer and found accurate, so it was kept and built upon rather than discarded
— but flagged here for transparency since I don't have a clean explanation for
how it got there.

## Phase 4 — Other Projects 🔶 Started
- [x] Resume PDF received and integrated: `/public/files/resume.pdf` now serves
      Anwar's real resume (verified: 359,527 bytes, correct content-type)
- [x] `/resume` page rebuilt with real content: skills (grouped, no bars/percentages
      per the brief's explicit prohibition), 3 real work experiences, 5 real
      projects, education, certifications, honors
- [x] Sitewide contact info corrected: footer + `/contact` now use real
      email/LinkedIn/GitHub instead of PLACEHOLDER
- [x] Financial Well-Being homepage/work-index cards enriched with real resume
      facts (R² 0.14→0.59, XGBoost 0.64 test R², 6,300+ CFPB responses) — but
      NOT promoted to a full case study yet; only resume-bullet-level detail
      exists, not source files or a detailed account
- [ ] Financial Well-Being full case study — needs code/notebooks, or a
      detailed Q&A like Fast-SCNN got
- [ ] Form Correction — no files received yet at all, doesn't even appear on
      the resume; needs files or clarification
- [ ] Add Financial Well-Being + Form Correction — /work index page

**🚩 Unresolved cross-document conflict (see DECISIONS.md D013)**: Anwar's
resume claims the Fast-SCNN project included quantization, structured pruning,
a 3× latency reduction, and deployment to an NVIDIA Jetson Nano. His own
detailed answer in Phase 3 explicitly said none of that had happened yet —
those were named as *future work not completed*. This is flagged visibly on
both the resume page and in chat, not resolved unilaterally in either
direction. Needs Anwar's clarification before either document is finalized.

## Deployment readiness (requested: "get it live as soon as possible")

- [x] `financial-well-being` given its own dedicated route with real resume
      numbers + `CaseStudyInProgress` animation, matching the Fast-SCNN pattern
- [x] `CaseStudyInProgress` component built — calm, purposeful motion (a soft
      highlight scanning across the 12-part structure), not decorative;
      respects `prefers-reduced-motion` via the global CSS rule
- [x] `sitemap.ts` and `robots.ts` added (Next.js App Router auto-generation)
- [x] Build + lint clean, all 12 routes (including `/sitemap.xml`,
      `/robots.txt`) verified 200 with zero console errors
- [x] `baseUrl` in `sitemap.ts`, `robots.ts`, and OG metadata in `layout.tsx`
      updated to the real live URL: `https://portfolio-anwar-zeta.vercel.app`
- [ ] No git repository initialized yet in this environment — Anwar needs to
      `git init`, push to a GitHub repo he owns, then import that repo in
      Vercel. This can't be done from this sandboxed environment (no GitHub/
      Vercel account access) — see chat response for exact steps.
- [ ] OG image / social-sharing image not yet created (placeholder in
      `layout.tsx` metadata) — low priority, doesn't block a first deploy

## Live-site review findings (from acting as HR-manager persona on the deployed site)

Found and fixed same-session:
- [x] **Visitor lens did nothing.** The "I'm hiring / technical / building /
      curious" selector visually toggled but never affected any other content
      — a real gap versus the original spec ("selecting one should subtly
      highlight or prioritize relevant content"). Built `VisitorLensContext`
      (shared React context) + `LensNote` (small client island) so
      FeaturedProjects and PhilosophyTeaser now show one short, relevant note
      when a lens is selected, and nothing when it isn't. Verified with
      Playwright: exactly one note shows at a time, switches cleanly, clears
      on deselect.
- [x] **Three dead links.** PhilosophyTeaser's "Read more →" links pointed to
      `/notebook/build-before-perfect` etc. — slugs that don't exist since
      Notebook has zero entries. Removed the links (cards are no longer
      clickable to nowhere); added one working link to `/open-notebook`
      instead, framed honestly ("the full entry is being written").
- [x] **Internal dev notes had leaked into public copy.** Card text like
      "same as Fast-SCNN got" and repeated "Pending — project files not yet
      reviewed" reads as confusing internal tracking language to an external
      visitor, not intentional transparency. Rewritten in external-facing
      voice.
- [x] **Notebook and Notebook/[slug] were static placeholders, not wired to
      the content pipeline** — even though `getAllNotebookEntries()` /
      `getNotebookBySlug()` already existed in `src/lib/content.ts` and
      `next-mdx-remote` was already a dependency. Wired both pages for real:
      index now calls `getAllNotebookEntries()` with a graceful empty state,
      detail page renders real MDX via `next-mdx-remote/rsc` with
      `generateStaticParams`. The moment a real `.mdx` file lands in
      `content/notebook/`, it appears — no more code changes needed.

Noted but not unilaterally changed (flagged to Anwar instead, since these are
identity/content-strategy calls, not bugs):
- "Notebook" vs "Open Notebook" as nav labels are genuinely ambiguous to a
  first-time visitor before either is clicked — worsened right now by both
  being nearly empty. Options discussed in chat rather than decided here.

## Phase 5 — Notebook
- [ ] Notebook index page
- [ ] ~5 notebook entries
- [ ] Category filtering

## Phase 6 — Open Notebook
- [ ] Working positions
- [ ] Open questions
- [ ] Lessons under revision
- [ ] Response/feedback forms

## Phase 7 — Backend
- [ ] Supabase integration
- [ ] Form submissions
- [ ] Response moderation

## Phase 8 — AI Assistant
- [ ] Portfolio-trained assistant
- [ ] Content retrieval
- [ ] Answer grounding
