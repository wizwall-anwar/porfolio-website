# Design System

## Visual Direction

Minimal editorial. Technically sophisticated. Spacious. Calm. Mature. Slightly experimental.

## Typography

- **Display**: Space Grotesk — geometric with character, technical but not cold
- **Body**: Inter — clean, highly readable at all sizes
- **Mono**: JetBrains Mono — code, annotations, technical metadata
- **Scale**: 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60 (fluid with clamp)

## Spacing

- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- Section vertical padding: 80–128px (responsive)

## Layout

- Max content width: 1200px
- Prose max width: 720px
- Grid: CSS Grid, flexible — not a rigid 12-column system
- Single column for reading, wider for project layouts

## Colors

### Light Mode
- `--bg`: #FAFAF9 (warm white)
- `--surface`: #FFFFFF
- `--border`: #E5E5E3
- `--text-primary`: #1A1A19
- `--text-secondary`: #6B6B69
- `--text-tertiary`: #9B9B99
- `--accent`: #2563EB (blue)
- `--accent-subtle`: #DBEAFE
- `--accent-text`: #1D4ED8

### Dark Mode
- `--bg`: #111110
- `--surface`: #1C1C1B
- `--border`: #2E2E2D
- `--text-primary`: #EDEDEC
- `--text-secondary`: #A3A3A1
- `--text-tertiary`: #737371
- `--accent`: #60A5FA
- `--accent-subtle`: #1E3A5F
- `--accent-text`: #93C5FD

### Semantic
- `--status-wip`: #F59E0B (amber)
- `--status-complete`: #10B981 (green)
- `--status-archived`: #6B7280 (gray)

## Surfaces

- Cards: 1px border, no heavy shadows
- Hover: border color shifts to accent or subtle elevation
- Active: accent left-border or underline

## Motion

- Duration: 200–300ms default
- Easing: ease-out for enters, ease-in for exits
- Scroll reveals: fade-up, ≤20px travel
- Respect `prefers-reduced-motion` — disable all non-essential animation
- No auto-playing loops, floating elements, or parallax

## What To Avoid

- Animated skill bars, percentage circles
- Giant tech logo walls
- Glassmorphism, neon, cyberpunk
- Fake terminals, code rain
- Giant 3D decorative objects
- Mouse-following blobs, particle systems
- Hero dominated by rotating job titles
- Fake statistics, testimonials, or content
