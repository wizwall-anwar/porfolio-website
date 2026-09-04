'use client';

import { useVisitorLens, type VisitorType } from './VisitorLensContext';

const lenses = [
  {
    id: 'hiring' as const,
    label: "I'm hiring",
    description: 'See flagship projects, skills in action, and how to reach me.',
    icon: '◎',
  },
  {
    id: 'technical' as const,
    label: "I'm technical",
    description: 'Architecture diagrams, implementation details, and tradeoffs.',
    icon: '⟡',
  },
  {
    id: 'building' as const,
    label: "I'm building something",
    description: 'Problem framing, product thinking, and lessons from shipping.',
    icon: '△',
  },
  {
    id: 'curious' as const,
    label: "I'm curious",
    description: 'Notebook entries, open questions, and evolving ideas.',
    icon: '◇',
  },
];

export function VisitorLens() {
  const { lens: selected, setLens } = useVisitorLens();

  const handleSelect = (id: VisitorType) => {
    setLens(selected === id ? null : id);
  };

  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] border-t border-border pt-12 sm:pt-16">
        <p className="text-eyebrow mb-4">What brings you here?</p>
        <p className="text-text-secondary text-sm mb-8 max-w-md">
          Pick one — a few notes below will adjust to point you at what&apos;s most relevant.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {lenses.map((lensOption) => {
            const isActive = selected === lensOption.id;
            return (
              <button
                key={lensOption.id}
                onClick={() => handleSelect(lensOption.id)}
                className={`text-left p-5 rounded-lg border transition-all duration-200 group ${
                  isActive
                    ? 'border-accent bg-accent-subtle/40 ring-1 ring-accent/20'
                    : 'border-border hover:border-accent/40 hover:bg-surface-raised'
                }`}
                aria-pressed={isActive}
              >
                <span
                  className={`inline-block font-mono text-lg mb-2 transition-colors ${
                    isActive ? 'text-accent' : 'text-text-tertiary group-hover:text-accent'
                  }`}
                >
                  {lensOption.icon}
                </span>
                <p className="font-medium text-sm mb-1 text-text-primary">
                  {lensOption.label}
                </p>
                <p className="text-xs text-text-tertiary leading-relaxed">
                  {lensOption.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
