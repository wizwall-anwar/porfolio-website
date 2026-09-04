import Link from 'next/link';
import type { NotebookFrontmatter } from '@/lib/content';

export function NotebookCard({ frontmatter }: { frontmatter: NotebookFrontmatter }) {
  const date = new Date(frontmatter.date);
  const formattedDate = isNaN(date.getTime())
    ? frontmatter.date
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <Link href={`/notebook/${frontmatter.slug}`} className="block group">
      <article className="p-6 rounded-lg border border-border hover:border-accent/40 transition-all duration-200 hover:bg-surface-raised">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-accent-text uppercase tracking-wider">
            {frontmatter.category}
          </span>
          <span className="text-xs font-mono text-text-tertiary">{formattedDate}</span>
        </div>
        <h2 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent transition-colors">
          {frontmatter.title}
        </h2>
        {frontmatter.relatedProject && (
          <p className="text-xs text-text-tertiary mt-2">
            Related to: {frontmatter.relatedProject}
          </p>
        )}
      </article>
    </Link>
  );
}
