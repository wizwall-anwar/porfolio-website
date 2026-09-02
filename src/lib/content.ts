import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  question: string;
  status: 'complete' | 'in-progress' | 'archived';
  date: string;
  tags: string[];
  result: string;
  lesson: string;
  thumbnail?: string;
  order: number;
}

export interface NotebookFrontmatter {
  title: string;
  slug: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
  relatedProject?: string;
  references?: string[];
}

export interface ContentItem<T> {
  frontmatter: T;
  content: string;
}

function getContentFiles(subdir: string): string[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
}

function readContentFile<T>(subdir: string, filename: string): ContentItem<T> {
  const filePath = path.join(contentDir, subdir, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data as T, content };
}

// Projects
export function getAllProjects(): ContentItem<ProjectFrontmatter>[] {
  return getContentFiles('projects')
    .map((f) => readContentFile<ProjectFrontmatter>('projects', f))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getProjectBySlug(slug: string): ContentItem<ProjectFrontmatter> | null {
  const files = getContentFiles('projects');
  for (const f of files) {
    const item = readContentFile<ProjectFrontmatter>('projects', f);
    if (item.frontmatter.slug === slug) return item;
  }
  return null;
}

export function getProjectSlugs(): string[] {
  return getContentFiles('projects').map((f) => {
    const item = readContentFile<ProjectFrontmatter>('projects', f);
    return item.frontmatter.slug;
  });
}

// Notebook
export function getAllNotebookEntries(): ContentItem<NotebookFrontmatter>[] {
  return getContentFiles('notebook')
    .map((f) => readContentFile<NotebookFrontmatter>('notebook', f))
    .filter((item) => item.frontmatter.status === 'published')
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getNotebookBySlug(slug: string): ContentItem<NotebookFrontmatter> | null {
  const files = getContentFiles('notebook');
  for (const f of files) {
    const item = readContentFile<NotebookFrontmatter>('notebook', f);
    if (item.frontmatter.slug === slug) return item;
  }
  return null;
}

export function getNotebookSlugs(): string[] {
  return getContentFiles('notebook').map((f) => {
    const item = readContentFile<NotebookFrontmatter>('notebook', f);
    return item.frontmatter.slug;
  });
}
