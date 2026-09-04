import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects — problems investigated, solutions built, and lessons learned.',
};

// Temporary hardcoded data until MDX content is created
const projects = [
  {
    slug: 'fast-scnn-road-segmentation',
    question: 'How can road scenes be segmented efficiently without requiring an unnecessarily heavy model?',
    status: 'complete' as const,
    result: '86.6% pixel accuracy at ~20.6ms/frame (48.5 FPS) on CPU — measured on the training set, not yet held out.',
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'PyTorch'],
  },
  {
    slug: 'financial-well-being',
    question: 'Can financial data help someone understand their behavior instead of merely showing where their money went?',
    status: 'complete' as const,
    result: 'From the resume: R² improved from 0.14 to 0.59, then 0.64 test R² with tuned XGBoost — full case study pending.',
    tags: ['Data Analytics', 'Python', 'XGBoost'],
  },
  {
    slug: 'form-correction',
    question: 'Can computer vision provide useful form feedback without requiring constant expert supervision?',
    status: 'in-progress' as const,
    result: 'Still in active development — check back for a full write-up.',
    tags: ['Computer Vision', 'Pose Estimation', 'Python'],
  },
];

export default function WorkPage() {
  return (
    <SectionContainer className="py-16 sm:py-24">
      <p className="text-eyebrow mb-3">Work</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-4">
        Problems I&apos;ve investigated
      </h1>
      <p className="text-text-secondary mb-12 max-w-lg">
        Each project started with something that felt harder than it needed to be.
        Here&apos;s what I found and what I built.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="block group"
          >
            <article className="p-6 sm:p-8 rounded-lg border border-border hover:border-accent/40 transition-all duration-200 hover:bg-surface-raised">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <h2 className="font-display font-semibold text-lg sm:text-xl text-text-primary group-hover:text-accent transition-colors leading-snug max-w-2xl">
                  {project.question}
                </h2>
                <div className="shrink-0">
                  <StatusBadge status={project.status} />
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-2xl">
                {project.result}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
