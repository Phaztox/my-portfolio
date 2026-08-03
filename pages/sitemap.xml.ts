// pages/sitemap.xml.ts — generated from the data files so new passion pages or
// published posts show up automatically.
import type { GetServerSideProps } from 'next';
import { site } from '@/data/site';
import { passions, passionHref } from '@/data/passions';
import { publishedPosts, postHref } from '@/data/posts';
import { projectsWithPages, projectHref } from '@/data/projects';
import { defaultDesign } from '@/data/designs';

interface Entry {
  path: string;
  priority: string;
  lastmod?: string;
}

/** Only the default design is listed; the other is marked noindex. */
function entriesForActiveDesign(): Entry[] {
  if (defaultDesign === 'editorial') {
    return [
      { path: '/', priority: '1.0' },
      { path: '/about', priority: '0.9' },
      { path: '/work', priority: '0.9' },
      { path: '/studies', priority: '0.8' },
      { path: '/writing', priority: '0.8' },
      { path: '/passions', priority: '0.7' },
      ...projectsWithPages.map((project) => ({
        path: projectHref(project.slug),
        priority: '0.8',
      })),
      ...passions.map((passion) => ({ path: passionHref(passion.slug), priority: '0.7' })),
      ...publishedPosts.map((post) => ({
        path: postHref(post.slug),
        priority: '0.8',
        lastmod: post.date,
      })),
    ];
  }

  return [
    { path: '/classic', priority: '1.0' },
    ...passions.map((passion) => ({
      path: passionHref(passion.slug, 'classic'),
      priority: '0.7',
    })),
    ...projectsWithPages.map((project) => ({
      path: projectHref(project.slug, 'classic'),
      priority: '0.8',
    })),
    ...publishedPosts.map((post) => ({
      path: postHref(post.slug, 'classic'),
      priority: '0.8',
      lastmod: post.date,
    })),
  ];
}

function buildSitemap(): string {
  const entries = entriesForActiveDesign();

  const urls = entries
    .map(({ path, priority, lastmod }) =>
      [
        '  <url>',
        `    <loc>${site.url}${path === '/' ? '/' : path}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

// Never rendered — getServerSideProps writes the response directly.
export default function Sitemap() {
  return null;
}
