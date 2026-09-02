import Link from 'next/link';
import { SectionContainer } from '@/components/layout/SectionContainer';

export default function NotFound() {
  return (
    <SectionContainer className="py-24 sm:py-36">
      <div className="max-w-md">
        <p className="font-mono text-text-tertiary text-sm mb-4">404</p>
        <h1 className="text-display text-3xl font-bold mb-4">
          This page doesn&apos;t exist yet
        </h1>
        <p className="text-text-secondary mb-8">
          It might be under construction, or you may have followed a broken link. 
          Either way, here are some paths that do work.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 
                       bg-accent text-white font-medium text-sm rounded-md
                       hover:bg-accent-hover transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5
                       border border-border text-text-primary font-medium text-sm rounded-md
                       hover:bg-surface-raised transition-colors"
          >
            See my work
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
