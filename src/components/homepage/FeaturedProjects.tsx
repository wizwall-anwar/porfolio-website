import Link from 'next/link';
import { SectionContainer } from '../layout/SectionContainer';
import { StatusBadge } from '../shared/StatusBadge';
import { Tag } from '../shared/Tag';

const projects = [
  {
    slug: 'fast-scnn-road-segmentation',
    question:
      'How can road scenes be segmented efficiently without requiring an unnecessarily heavy model?',
    status: 'complete' as const,
    result:
      '86.6% pixel accuracy at ~20.6ms/frame (48.5 FPS) on CPU — measured on the training set; a proper held-out benchmark is still pending.',
    lesson:
      'The model looked validated by its own numbers until closer inspection showed the accuracy was training-set only and the mIoU/F1 calculations had real bugs.',
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'PyTorch'],
  },
  {
    slug: 'financial-well-being',
    question:
      'Can financial data help someone understand their behavior instead of merely showing where their money went?',
    status: 'complete' as const,
    result:
      'From the resume: R² improved from 0.14 to 0.59 through progressive feature engineering, then 0.64 test R² with tuned XGBoost — full case study pending code/notebook review.',
    lesson: 'Pending — needs either source files or a detailed account, same as Fast-SCNN got.',
    tags: ['Data Analytics', 'Python', 'XGBoost'],
  },
  {
    slug: 'form-correction',
    question:
      'Can computer vision provide useful form feedback without requiring constant expert supervision?',
    status: 'in-progress' as const,
    result: 'Pending — project files not yet reviewed.',
    lesson: 'Pending — project files not yet reviewed.',
    tags: ['Computer Vision', 'Pose Estimation', 'Python'],
  },
];

export function FeaturedProjects() {
  return (
    <SectionContainer className="py-16 sm:py-20" id="work">
      <div className="border-t border-border pt-12 sm:pt-16">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="text-eyebrow mb-3">Selected Work</p>
            <h2 className="text-display text-2xl sm:text-3xl font-bold">
              Problems I&apos;ve investigated
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline-flex text-sm text-accent-text hover:text-accent-hover transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="block group"
            >
              <article className="p-6 sm:p-8 rounded-lg border border-border hover:border-accent/40 transition-all duration-200 hover:bg-surface-raised">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary group-hover:text-accent transition-colors leading-snug max-w-2xl">
                    {project.question}
                  </h3>
                  <div className="shrink-0">
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-1">
                      Key finding
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-1">
                      Lesson
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.lesson}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/work"
            className="text-sm text-accent-text hover:text-accent-hover transition-colors"
          >
            View all work →
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
