import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who I am, how I approach unfamiliar problems, and why I care about reducing friction through technology.',
};

export default function AboutPage() {
  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      <p className="text-eyebrow mb-3">About</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-8">
        How I ended up here
      </h1>

      <div className="prose">
        {/* PLACEHOLDER: Real personal story needed from Anwar */}
        <p>
          I notice things that feel harder than they need to be. Not because I&apos;m 
          looking for problems — but because friction has a way of making itself obvious 
          once you start paying attention.
        </p>

        <p>
          Most of my work starts the same way: something is slow, confusing, or overly
          complicated. I ask why. The first answer is usually surface-level. The useful 
          answer lives deeper — in the system, the assumptions, or the way the problem 
          was framed in the first place.
        </p>

        <div className="border-l-3 border-accent pl-5 my-8 py-1">
          <p className="text-text-secondary italic">
            [PLACEHOLDER: Personal origin story — what first drew you to technology, 
            what pivotal experience shaped your approach, a specific moment that 
            illustrates your curiosity. This should be genuine and specific to you.]
          </p>
        </div>

        <h2>How I approach unfamiliar problems</h2>

        <p>
          I start by resisting the urge to solve immediately. The first step is 
          understanding — mapping the system, identifying what I don&apos;t know, and 
          figuring out where my assumptions might be wrong. Only then do I start building.
        </p>

        <p>
          I believe in shipping early, not because imperfect work is acceptable forever, 
          but because reality exposes problems that planning alone cannot predict. A 
          working prototype, even a rough one, teaches you things that specifications 
          and whiteboards cannot.
        </p>

        <div className="border-l-3 border-accent pl-5 my-8 py-1">
          <p className="text-text-secondary italic">
            [PLACEHOLDER: What kind of impact you want your work to have, what you&apos;re 
            currently learning, what mistakes shaped your thinking. Specific examples 
            from your experience.]
          </p>
        </div>

        <h2>Beyond the work</h2>

        <div className="border-l-3 border-accent pl-5 my-8 py-1">
          <p className="text-text-secondary italic">
            [PLACEHOLDER: Personal interests, what you do outside of technology work, 
            anything that gives a human dimension beyond professional identity.]
          </p>
        </div>

        <hr />

        <p>
          If any of this resonates — or if you think I&apos;m wrong about something — 
          I&apos;d like to hear from you.
        </p>

        <div className="flex gap-4 mt-6 not-prose">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 
                       bg-accent text-white font-medium text-sm rounded-md
                       hover:bg-accent-hover transition-colors"
          >
            Get in touch
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
