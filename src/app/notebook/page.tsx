import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const metadata: Metadata = {
  title: 'Notebook',
  description: 'Short thinking pieces on building, data, problem-solving, and technology.',
};

export default function NotebookPage() {
  return (
    <SectionContainer className="py-16 sm:py-24">
      <p className="text-eyebrow mb-3">Notebook</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-4">
        Thinking in progress
      </h1>
      <p className="text-text-secondary mb-12 max-w-lg">
        Short pieces on building, data, problem-solving, and how my thinking 
        changes over time. Not a blog — a working notebook.
      </p>

      {/* Placeholder */}
      <div className="border border-border border-dashed rounded-lg p-8 text-center">
        <p className="text-text-tertiary font-mono text-sm mb-2">
          Notebook entries will be added in Phase 5
        </p>
        <p className="text-text-tertiary text-xs">
          Categories: Building · Data & AI · Problem Solving · Systems & People · Learning · Career · Experiments
        </p>
      </div>
    </SectionContainer>
  );
}
