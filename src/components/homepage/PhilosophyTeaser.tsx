import Link from 'next/link';
import { SectionContainer } from '../layout/SectionContainer';
import { LensNote } from './LensNote';

const beliefs = [
  {
    title: 'Build before perfect',
    text: 'Shipping an imperfect system often produces more useful information than privately perfecting it.',
  },
  {
    title: 'Understand before automating',
    text: "If you automate something you don't understand, you just automate the wrong process faster.",
  },
  {
    title: 'Failure is evidence',
    text: "An unsuccessful approach reduces uncertainty. It tells us which path probably shouldn't be repeated.",
  },
];

export function PhilosophyTeaser() {
  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="border-t border-border pt-12 sm:pt-16">
        <p className="text-eyebrow mb-3">How I Think</p>
        <h2 className="text-display text-2xl sm:text-3xl font-bold mb-4">
          Working beliefs
        </h2>
        <p className="text-text-secondary text-sm mb-6 max-w-lg">
          Ideas that shape how I approach problems. Some are settled. Others are still evolving.
          The full notebook entry for each is being written — for now, here&apos;s the idea itself.
        </p>

        <LensNote
          messages={{
            curious: {
              text: "Since you're curious: this is exactly what the Open Notebook is for.",
              href: '/open-notebook',
              linkLabel: 'Explore it',
            },
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="block p-6 rounded-lg border border-border"
            >
              <h3 className="font-display font-semibold text-base mb-3">
                {belief.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {belief.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/open-notebook"
            className="text-sm text-accent-text hover:text-accent-hover transition-colors"
          >
            Explore my open notebook →
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
