// pages/sitemap.xml.ts — generated from the data files so new passion pages or
// published posts show up automatically.
import type { GetServerSideProps } from 'next';
import { site } from '@/data/site';
import { passions } from '@/data/passions';
import { posts } from '@/data/posts';

interface Entry {
  path: string;
  priority: string;
  lastmod?: string;
}

function buildSitemap(): string {
  const entries: Entry[] = [
    { path: '/', priority: '1.0' },
    ...passions.map((passion) => ({ path: passion.href, priority: '0.7' })),
    ...posts
      .filter((post): post is typeof post & { href: string } => Boolean(post.href))
      .map((post) => ({ path: post.href, priority: '0.8', lastmod: post.date })),
  ];

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
