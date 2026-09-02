'use client';

import { useState, useEffect } from 'react';
import { SectionContainer } from '../layout/SectionContainer';

export type VisitorType = 'hiring' | 'technical' | 'building' | 'curious' | null;

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
  const [selected, setSelected] = useState<VisitorType>(null);

  // Restore selection from sessionStorage after mount (browser-only API,
  // unavailable during SSR — this is the standard exception to the rule).
  useEffect(() => {
    const stored = sessionStorage.getItem('visitor-lens') as VisitorType;
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(stored);
    }
  }, []);

  const handleSelect = (id: VisitorType) => {
    const next = selected === id ? null : id;
    setSelected(next);
    if (next) {
      sessionStorage.setItem('visitor-lens', next);
    } else {
      sessionStorage.removeItem('visitor-lens');
    }
  };

  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="border-t border-border pt-12 sm:pt-16">
        <p className="text-eyebrow mb-4">What brings you here?</p>
        <p className="text-text-secondary text-sm mb-8 max-w-md">
          This won&apos;t change the page — it highlights what&apos;s most relevant to you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {lenses.map((lens) => {
            const isActive = selected === lens.id;
            return (
              <button
                key={lens.id}
                onClick={() => handleSelect(lens.id)}
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
                  {lens.icon}
                </span>
                <p
                  className={`font-medium text-sm mb-1 ${
                    isActive ? 'text-text-primary' : 'text-text-primary'
                  }`}
                >
                  {lens.label}
                </p>
                <p className="text-xs text-text-tertiary leading-relaxed">
                  {lens.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
