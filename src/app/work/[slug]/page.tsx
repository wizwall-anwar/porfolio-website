import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';
import Link from 'next/link';

// Placeholder project data until MDX content pipeline is built.
// NOTE: 'fast-scnn-road-segmentation' and 'financial-well-being' now have
// dedicated static routes with real content — Next.js resolves those static
// routes before this dynamic one, so both are intentionally left out of
// this map. Only 'form-correction' still needs one.
const projectData: Record<string, {
  title: string;
  question: string;
  status: 'complete' | 'in-progress' | 'archived';
  tags: string[];
  date: string;
}> = {
  'form-correction': {
    title: 'Form Correction',
    question: 'Can computer vision provide useful form feedback without requiring constant expert supervision?',
    status: 'in-progress',
    tags: ['Computer Vision', 'Pose Estimation', 'Python'],
    date: '2025',
  },
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.question,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) notFound();

  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/work" className="text-text-tertiary hover:text-text-secondary transition-colors">
          Work
        </Link>
        <span className="text-text-tertiary mx-2">/</span>
        <span className="text-text-secondary">{project.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <StatusBadge status={project.status} />
          <span className="text-xs font-mono text-text-tertiary">{project.date}</span>
        </div>
        <h1 className="text-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          {project.question}
        </h1>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Placeholder for case study content */}
      <div className="prose">
        <div className="border border-border border-dashed rounded-lg p-8 text-center">
          <p className="text-text-tertiary font-mono text-sm mb-2">
            Case study content will be built in Phase 3
          </p>
          <p className="text-text-tertiary text-xs">
            This page will use the 12-part storytelling structure: Friction → Initial Understanding → 
            Reframing → Constraints → Approaches → Architecture → Building → Results → 
            Reflection → What I&apos;d Change → What Happened Next → Visitor Participation
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
