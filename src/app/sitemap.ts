import type { MetadataRoute } from 'next';

// NOTE: baseUrl is a placeholder until Anwar has a real deployed domain.
// Update this the moment a Vercel URL or custom domain exists — search
// stitching (Google Search Console etc.) depends on this being accurate.
const baseUrl = 'https://REPLACE-WITH-DEPLOYED-DOMAIN.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/work',
    '/work/fast-scnn-road-segmentation',
    '/work/financial-well-being',
    '/work/form-correction',
    '/notebook',
    '/open-notebook',
    '/about',
    '/resume',
    '/contact',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
