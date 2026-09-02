import { SectionContainer } from '@/components/layout/SectionContainer';
import Link from 'next/link';

export default async function NotebookEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/notebook" className="text-text-tertiary hover:text-text-secondary transition-colors">
          Notebook
        </Link>
        <span className="text-text-tertiary mx-2">/</span>
        <span className="text-text-secondary">{slug.replace(/-/g, ' ')}</span>
      </nav>

      <div className="border border-border border-dashed rounded-lg p-8 text-center">
        <p className="text-text-tertiary font-mono text-sm">
          Notebook entry content will be added in Phase 5
        </p>
      </div>
    </SectionContainer>
  );
}
