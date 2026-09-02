import Link from 'next/link';
import { SectionContainer } from '../layout/SectionContainer';

export function HomepageCTA() {
  return (
    <SectionContainer className="py-16 sm:py-24">
      <div className="border-t border-border pt-12 sm:pt-16">
        <div className="max-w-lg">
          <h2 className="text-display text-2xl sm:text-3xl font-bold mb-4">
            Let&apos;s talk about a problem worth solving.
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Whether you&apos;re hiring, building, or just curious about an idea — 
            I&apos;m always interested in conversations about how technology 
            can make things work better for people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 
                         bg-accent text-white font-medium text-sm rounded-md
                         hover:bg-accent-hover transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3
                         border border-border text-text-primary font-medium text-sm rounded-md
                         hover:bg-surface-raised transition-colors"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
