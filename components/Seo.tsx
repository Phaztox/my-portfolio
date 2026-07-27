// components/Seo.tsx — per-page title, description and social cards.
import Head from 'next/head';
import { useRouter } from 'next/router';
import { site } from '@/data/site';

interface SeoProps {
  /** Page title. Rendered as "<title> — Antonin Gabet" unless it's the home page. */
  title?: string;
  description?: string;
  /** Set for blog posts so they share as articles rather than as a website. */
  type?: 'website' | 'article';
  /** Absolute or root-relative path to a social preview image. */
  image?: string;
  publishedTime?: string;
}

export default function Seo({
  title,
  description = site.description,
  type = 'website',
  image,
  publishedTime,
}: SeoProps) {
  const { asPath } = useRouter();

  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — Data & AI Portfolio`;
  const canonical = `${site.url}${asPath === '/' ? '' : asPath.split('#')[0].split('?')[0]}`;

  // Falls back to the generated card, with the page title baked in.
  const defaultImage = `/api/og?title=${encodeURIComponent(title ?? site.name)}&subtitle=${encodeURIComponent(
    title ? site.role : 'Data & AI — Engineering student at EFREI Paris'
  )}`;
  const resolved = image ?? defaultImage;
  const imageUrl = resolved.startsWith('http') ? resolved : `${site.url}${resolved}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={site.name} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph — LinkedIn, Discord, Slack, Facebook */}
      <meta property="og:site_name" content={site.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={site.locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
