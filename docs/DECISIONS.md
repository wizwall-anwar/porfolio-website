# Architectural & Design Decisions

## D001 — CSS Variables for theming instead of Tailwind dark: prefix

**Decision**: Use CSS custom properties on `:root` and `[data-theme="dark"]` for all semantic colors. Tailwind config references these variables.

**Why**: Avoids duplicating every color class with `dark:` variants. Single source of truth. Easier to add future themes. Cleaner component code.

**Tradeoff**: Slightly more setup. Can't use Tailwind's built-in dark mode detection directly, but we control theme switching ourselves anyway.

## D002 — MDX content in repo, not a CMS

**Decision**: Store all content as MDX files in `/content/` directory within the repository.

**Why**: No external dependency. Content versioned with code. Fast builds. Easy to add new projects. Can migrate to headless CMS later without restructuring components.

**Tradeoff**: Non-technical content updates require code commits. Acceptable for a personal portfolio.

## D003 — Space Grotesk for display typography

**Decision**: Use Space Grotesk as the display/headline typeface paired with Inter for body.

**Why**: Geometric but with enough character to feel intentional, not generic. Technical without being cold. Distinguishes this from the thousands of Inter-only portfolios. The slightly unusual letterforms (especially 'a' and 'g') add personality without being distracting.

**Tradeoff**: Less universally "safe" than using Inter for everything. But the brief demands the site not feel template-like.

## D004 — Warm neutrals instead of pure gray

**Decision**: All neutral colors have a slight warm undertone (ending in 9/A instead of pure gray hex).

**Why**: Pure grays feel sterile and corporate. Warm neutrals feel calmer, more human, more like a real notebook/publication. Aligns with "curious, honest, technical but not sterile" personality.

## D005 — No skill bars, no percentage indicators

**Decision**: Skills are demonstrated through projects, never through percentage bars or circular indicators.

**Why**: A "Python: 85%" bar communicates nothing meaningful. Seeing a project where Python solved a real problem communicates everything. The brief explicitly prohibits these patterns.

## D006 — motion library (not raw CSS animations)

**Decision**: Use `motion` (framer-motion) for interactive animations, CSS transitions for simple hover/focus states.

**Why**: Motion provides animation primitives that respect `prefers-reduced-motion`, handle mount/unmount animations cleanly, and keep animation logic colocated with components. CSS transitions handle the 80% case (hovers, color changes) without JS overhead.

## D007 — next-mdx-remote for MDX rendering

**Decision**: Use `next-mdx-remote` to compile and render MDX content at build/request time.

**Why**: Works well with App Router. Allows custom component injection. Content files stay as plain MDX. No complex bundler config needed.

## D008 — Suppressed `react-hooks/set-state-in-effect` in three components

**Decision**: Added scoped `eslint-disable-next-line` comments (with justifying inline comments) in `ThemeProvider.tsx`, `SiteHeader.tsx`, and `VisitorLens.tsx` rather than restructuring away from `useEffect` + `setState`.

**Why**: This newer lint rule flags any `setState` call inside a `useEffect` body. All three cases are the standard, well-documented exception: syncing React state with a browser-only API (`localStorage`, `sessionStorage`, the router's `pathname`) that isn't available during SSR and can't be read during the initial render without risking a hydration mismatch. Restructuring to a lazy `useState` initializer would read `document`/`localStorage` during render, which is unsafe in SSR and would only move the problem, not solve it. Each suppression has a code comment explaining why it's there so a future session (or reviewer) doesn't mistake it for an oversight.

**Tradeoff**: Diverges from the stricter linting default. Revisit if a future React/Next.js version ships a first-class primitive for this (e.g. improved `useSyncExternalStore` ergonomics) that avoids the effect entirely.

## D009 — Verified Phase 1 & 2 with Playwright rather than visual inspection alone

**Decision**: After building, used Playwright (already available in the environment) to: run automated screenshots across breakpoints/themes, click through interactive components (visitor lens, problem-solving loop, theme toggle, mobile nav), and check all 12 routes for console errors and correct status codes.

**Why**: The brief explicitly requires working keyboard/tap interactions, no hover-only functionality, functioning light/dark mode, and mobile layouts that aren't "shrunk desktop." A visual screenshot alone doesn't confirm interactivity works — clicking through with automation catches regressions a static screenshot can't (e.g. state not persisting, panels not updating, theme not toggling).

**Result**: All checks passed on first full verification pass after fixing a batch of unescaped-apostrophe syntax errors and three lint errors from the `set-state-in-effect` rule (see D008).

## D010 — Fast-SCNN case study built from verified code analysis, not the presentation

**Context**: Anwar's original brief said the Fast-SCNN project has "code, presentation, results" available. Only the code (`fast_scnn.py`, `cityscapes_dataset.py`, `loaders_test.py`, `visualize_sample.py`, `train.py`) was actually provided — no presentation, no results.

**Decision**: Rather than waiting to build anything, traced the model's actual forward pass by hand (spatial resolution and channel counts at every stage) and computed exact parameter counts from the Conv2d/BatchNorm2d layer definitions using a standalone Python script — no torch install needed, pure arithmetic from documented formulas, double-checked by re-deriving the same numbers two different ways. Populated every case-study section that could be grounded in this analysis (Architecture, Constraints, most of Building the Workable Version) and left everything requiring Anwar's actual narrative (Friction, Initial Understanding, Reframing, Results, Reflection, What's Next) explicitly marked pending, with specific questions rather than filler text.

**Why**: This is a direct application of the site's own "never invent facts, mark uncertainty explicitly" rule (see PORTFOLIO_VISION.md) to building the site itself. It also caught two real mistakes from the Phase 1/2 session: an invented "TensorFlow" tag (code is PyTorch) and invented result/lesson copy ("achieved real-time performance... compared to heavier alternatives") with zero supporting evidence. Both were corrected once real code was available, and the same audit was applied to Financial Well-Being and Form Correction's cards, which had the same kind of invented result/lesson copy — replaced with an honest "pending — project files not yet reviewed."

**Result — the frozen PPM branch**: `GlobalFeatureExtractor.forward()` wraps its pyramid-pooling branch in `.eval()` + `torch.no_grad()`, with a comment reading `# ✅ Add this`. That branch (13.8% of total parameters) receives no gradient and stays at random initialization for the entire training run. This is presented on the case study page as a verified fact about the code, with a clearly-labeled hypothesis (BatchNorm instability on a 1×1 feature map at batch_size=2) rather than an assumed explanation.

**Tradeoff**: The Fast-SCNN case study is a fully hand-coded page (`/work/fast-scnn-road-segmentation/page.tsx`) rather than MDX-rendered, since the interactive diagram and the verified/pending distinction needed more structure than MDX + component injection cleanly supports. The MDX file for this project still exists with matching frontmatter (kept in sync by hand) so the homepage/work-index summary cards have a single source of truth to read from once that refactor happens.

## D011 — Ephemeral container storage: package and deliver a zip at the end of every turn with file changes

**Context**: The full Fast-SCNN case study (components, architecture diagram, case study page) was built in one turn but not re-packaged into a delivered zip before the turn ended. The next turn's container came up with an empty filesystem, and that work would have been silently lost if it weren't still visible in the conversation transcript and manually reconstructed.

**Decision**: Treat "deliver an updated zip via present_files" as a required last step of any turn that changes project files, not something reserved for phase boundaries.

**Why**: This environment's disk does not persist between conversation turns. The delivered zip in `/mnt/user-data/outputs/` is the only durable checkpoint. Skipping it isn't a style choice — it's a data-loss risk.

## D012 — Fast-SCNN case study finalized with Anwar's confirmed answers

**Context**: Anwar answered all 5 questions posed in D010/D011 with real, specific detail — including the exact root cause of the PPM crash (a real PyTorch `ValueError` from a final batch of size 1, not general small-batch instability as originally guessed), real training/evaluation numbers, and confirmation that the simplified architecture was not a deliberate benchmarked choice.

**Decision**: Rewrote every previously-pending section of the case study with this real content, while keeping the same honesty discipline: results that need qualification (training-set-only accuracy, a mislabeled aggregate IoU, an outright-impossible F1 value) are visually flagged as such — amber "needs caveat" or red "discarded — bug" — rather than presented as clean, validated numbers. Added a `flag` prop to `ResultBlock` and a new `TrainingLossChart` component to support this.

**Correction logged transparently**: my original hypothesis about the PPM freeze (small-batch BatchNorm instability generally) was directionally right but not precise — the actual trigger was a specific final batch of exactly one sample from an odd-sized dataset (2,975 images ÷ batch_size=2). The case study page itself notes this correction rather than quietly replacing the wrong guess with the right answer.

**Anomaly noted**: two files (`ResultBlock.tsx` with the `flag` prop, `TrainingLossChart.tsx` with the correct loss values already populated) were found already present at the start of this turn, before being written in this turn's work. Their content was verified independently against Anwar's answer and found accurate, so they were kept rather than discarded — but there's no clean explanation for their presence, and that's disclosed here rather than silently absorbed.

**Remaining transparency note kept on the page**: the reviewed version of `train.py` doesn't contain the checkpoint-saving or evaluation code that produced these results — Anwar's answer references `fast_scnn_final.pth` and a `config.py` not included in the files shared. This is disclosed inline on the case study page itself, not just in this log.

## D013 — Resume vs. case study conflict on Fast-SCNN: flagged, not resolved unilaterally

**Context**: Anwar's uploaded resume describes the Fast-SCNN project as including quantization, structured pruning, a 3× inference-latency reduction, and deployment to an NVIDIA Jetson Nano. His own detailed Q&A answer from the previous phase explicitly listed all of those as *not yet completed* — named individually as future work, including "deployment to a Jetson/Raspberry Pi/other physical edge board" by name. These cannot both be accurate as currently written.

**Decision**: Did not edit the resume's wording (it's Anwar's own professional document, likely already in circulation) and did not alter the case study's claims (which are grounded in his own detailed, carefully-hedged technical account — including an admission of a bug in the F1 calculation, which reads as a rigorous, non-inflated source). Instead: flagged the conflict prominently in the chat response, and added a visible in-page callout on `/resume` directly under the affected project entry, linking to the case study and stating plainly that the two don't currently agree.

**Why**: Silently picking one version over the other would be presenting invented or unconfirmed facts as settled, which the whole project's ethos exists to avoid. Editing Anwar's resume wording without being asked oversteps — it's his professional document. But shipping two contradictory public-facing accounts of the same specific claim (Jetson Nano deployment) side by side, unflagged, is a real credibility risk if a hiring manager or interviewer cross-references them. Surfacing it clearly, in both places, respects both constraints: no fabrication, no unilateral editorializing of his resume.

**Status**: unresolved, pending Anwar's clarification. Once resolved, remove the flag from the resume page and update whichever document was inaccurate.
