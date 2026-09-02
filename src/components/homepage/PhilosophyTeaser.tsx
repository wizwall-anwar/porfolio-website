import Link from 'next/link';
import { SectionContainer } from '../layout/SectionContainer';

const beliefs = [
  {
    title: 'Build before perfect',
    text: 'Shipping an imperfect system often produces more useful information than privately perfecting it.',
    link: '/notebook/build-before-perfect',
  },
  {
    title: 'Understand before automating',
    text: "If you automate something you don't understand, you just automate the wrong process faster.",
    link: '/notebook/understand-before-automating',
  },
  {
    title: 'Failure is evidence',
    text: "An unsuccessful approach reduces uncertainty. It tells us which path probably shouldn't be repeated.",
    link: '/notebook/failure-is-evidence',
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
        <p className="text-text-secondary text-sm mb-10 max-w-lg">
          Ideas that shape how I approach problems. Some are settled. Others are still evolving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {beliefs.map((belief) => (
            <Link
              key={belief.title}
              href={belief.link}
              className="group block p-6 rounded-lg border border-border hover:border-accent/40 transition-all duration-200 hover:bg-surface-raised"
            >
              <h3 className="font-display font-semibold text-base mb-3 group-hover:text-accent transition-colors">
                {belief.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {belief.text}
              </p>
              <span className="inline-block mt-4 text-xs text-accent-text font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                Read more →
              </span>
            </Link>
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
