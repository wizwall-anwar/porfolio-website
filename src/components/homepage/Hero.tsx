import Link from 'next/link';
import { SectionContainer } from '../layout/SectionContainer';

export function Hero() {
  return (
    <SectionContainer className="pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
      <div className="max-w-[800px]">
        {/* Eyebrow */}
        <p className="text-eyebrow mb-6">
          Technology is the medium. Problem-solving is the discipline.
        </p>

        {/* Headline */}
        <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          <span className="block">I find the gap.</span>
          <span className="block mt-2">I question the system.</span>
          <span className="block mt-2 text-accent">I build a better path.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-[640px] mb-10">
          I&apos;m Anwar, a technology-driven problem solver using data, software,
          and AI to make complicated systems more practical, accessible, and human.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 
                       bg-accent text-white font-medium text-sm rounded-md
                       hover:bg-accent-hover transition-colors"
          >
            Explore how I solve problems
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center gap-2 px-6 py-3
                       border border-border text-text-primary font-medium text-sm rounded-md
                       hover:bg-surface-raised transition-colors"
          >
            Download résumé
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
