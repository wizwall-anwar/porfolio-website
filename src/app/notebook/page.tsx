import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { NotebookCard } from '@/components/notebook/NotebookCard';
import { getAllNotebookEntries } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Notebook',
  description: 'Short thinking pieces on building, data, problem-solving, and technology.',
};

const categories = ['Building', 'Data & AI', 'Problem Solving', 'Systems & People', 'Learning', 'Career', 'Experiments'];

export default function NotebookPage() {
  const entries = getAllNotebookEntries();

  return (
    <SectionContainer className="py-16 sm:py-24">
      <p className="text-eyebrow mb-3">Notebook</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-4">
        Thinking in progress
      </h1>
      <p className="text-text-secondary mb-4 max-w-lg">
        Short pieces on building, data, problem-solving, and how my thinking
        changes over time. Not a blog — a working notebook.
      </p>
      <p className="text-xs font-mono text-text-tertiary mb-12">
        {categories.join(' · ')}
      </p>

      {entries.length === 0 ? (
        <div className="border border-border border-dashed rounded-lg p-8 text-center">
          <p className="text-text-tertiary font-mono text-sm mb-2">
            Nothing published here yet
          </p>
          <p className="text-text-tertiary text-xs">
            This page renders automatically the moment an .mdx file is added to
            content/notebook/ — see docs/CONTENT_MODEL.md for the format.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {entries.map((entry) => (
            <NotebookCard key={entry.frontmatter.slug} frontmatter={entry.frontmatter} />
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
