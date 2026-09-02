'use client';

// Calm, purposeful "actively being written" indicator — not decorative.
// A soft highlight travels across the 12-part case-study structure to signal
// ongoing work, without asserting a specific claim about which section is
// currently in progress (that would be a fact I don't actually have).
// The @keyframes definition lives in globals.css, where the global
// prefers-reduced-motion rule already collapses it to a no-op.

const STAGES = [
  'Friction',
  'Assumptions',
  'Reframing',
  'Constraints',
  'Approaches',
  'Architecture',
  'Building',
  'Results',
  'Reflection',
  'Changes',
  'Next',
  'Discuss',
];

export function CaseStudyInProgress({ note }: { note?: string }) {
  return (
    <div className="my-10 not-prose rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <p className="text-eyebrow">Actively being written</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5" aria-hidden="true">
        {STAGES.map((stage, i) => (
          <span
            key={stage}
            className="px-2.5 py-1 text-[11px] font-mono rounded-full border border-border-subtle text-text-tertiary bg-surface-raised overflow-hidden relative"
          >
            <span
              className="absolute inset-0 bg-accent-subtle"
              style={{
                animation: 'case-study-scan 6s ease-in-out infinite',
                animationDelay: `${i * 0.35}s`,
              }}
            />
            <span className="relative">{stage}</span>
          </span>
        ))}
      </div>

      <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
        {note ??
          "This case study is being written section by section, with code snippets and architecture walkthroughs planned throughout rather than added at the end. What's already confirmed is above; the rest is coming."}
      </p>
    </div>
  );
}
