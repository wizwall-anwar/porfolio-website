import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Callout } from '@/components/shared/Callout';
import { getNotebookBySlug, getNotebookSlugs } from '@/lib/content';

export async function generateStaticParams() {
  return getNotebookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getNotebookBySlug(slug);
  if (!entry) return { title: 'Notebook entry not found' };
  return {
    title: entry.frontmatter.title,
    description: `${entry.frontmatter.category} — Notebook entry by Anwar Ayoon`,
  };
}

// Components made available inside notebook MDX files
const mdxComponents = { Callout };

export default async function NotebookEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getNotebookBySlug(slug);
  if (!entry) notFound();

  const date = new Date(entry.frontmatter.date);
  const formattedDate = isNaN(date.getTime())
    ? entry.frontmatter.date
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/notebook" className="text-text-tertiary hover:text-text-secondary transition-colors">
          Notebook
        </Link>
        <span className="text-text-tertiary mx-2">/</span>
        <span className="text-text-secondary">{entry.frontmatter.title}</span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-accent-text uppercase tracking-wider">
          {entry.frontmatter.category}
        </span>
        <span className="text-xs font-mono text-text-tertiary">{formattedDate}</span>
      </div>

      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-8 leading-tight">
        {entry.frontmatter.title}
      </h1>

      <div className="prose">
        <MDXRemote source={entry.content} components={mdxComponents} />
      </div>

      {entry.frontmatter.relatedProject && (
        <p className="mt-10 pt-6 border-t border-border-subtle text-sm text-text-tertiary">
          Related project: {entry.frontmatter.relatedProject}
        </p>
      )}

      {entry.frontmatter.references && entry.frontmatter.references.length > 0 && (
        <div className="mt-4 text-sm text-text-tertiary">
          <p className="font-mono text-xs uppercase tracking-wider mb-2">References</p>
          <ul className="space-y-1">
            {entry.frontmatter.references.map((ref) => (
              <li key={ref}>
                <a href={ref} target="_blank" rel="noopener noreferrer" className="text-accent-text hover:text-accent-hover underline">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionContainer>
  );
}
