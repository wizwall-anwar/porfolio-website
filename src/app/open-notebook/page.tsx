import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const metadata: Metadata = {
  title: 'Open Notebook',
  description: 'Working positions, open questions, and ideas under revision — thinking that invites participation.',
};

export default function OpenNotebookPage() {
  return (
    <SectionContainer className="py-16 sm:py-24">
      <p className="text-eyebrow mb-3">Open Notebook</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-4">
        Thinking out loud
      </h1>
      <p className="text-text-secondary mb-12 max-w-lg">
        Positions I hold, questions I haven&apos;t settled, and ideas I&apos;m
        actively revising. You can respond, challenge, or contribute.
      </p>

      <div className="space-y-8">
        {/* Working Positions */}
        <section>
          <h2 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
            <span className="font-mono text-accent text-sm">01</span>
            Working Positions
          </h2>
          <div className="border border-border border-dashed rounded-lg p-8 text-center">
            <p className="text-text-tertiary font-mono text-sm">
              Working positions will be added in Phase 6
            </p>
          </div>
        </section>

        {/* Open Questions */}
        <section>
          <h2 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
            <span className="font-mono text-accent text-sm">02</span>
            Open Questions
          </h2>
          <div className="border border-border border-dashed rounded-lg p-8 text-center">
            <p className="text-text-tertiary font-mono text-sm">
              Open questions will be added in Phase 6
            </p>
          </div>
        </section>

        {/* Lessons Under Revision */}
        <section>
          <h2 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
            <span className="font-mono text-accent text-sm">03</span>
            Lessons Under Revision
          </h2>
          <div className="border border-border border-dashed rounded-lg p-8 text-center">
            <p className="text-text-tertiary font-mono text-sm">
              Lessons under revision will be added in Phase 6
            </p>
          </div>
        </section>
      </div>
    </SectionContainer>
  );
}
