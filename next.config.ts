import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Lets a verification build write somewhere other than `.next`, so running
  // `npm run build:check` while `npm run dev` is up cannot clobber the dev
  // server's output (which surfaces as ENOENT on _document.js, or a 500 on
  // every route). Unset in normal use and on Vercel, so it stays `.next`.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  async redirects() {
    return [
      // The editorial design lived under /v2 while it was being built. It is
      // the main site now, so those paths fold into the root permanently.
      { source: '/v2', destination: '/', permanent: true },
      { source: '/v2/work', destination: '/work', permanent: true },
      { source: '/v2/work/:slug', destination: '/work/:slug', permanent: true },
      { source: '/v2/about', destination: '/about', permanent: true },
      { source: '/v2/studies', destination: '/studies', permanent: true },
      { source: '/v2/writing', destination: '/writing', permanent: true },
      { source: '/v2/passions', destination: '/passions', permanent: true },
      { source: '/v2/passions/:slug', destination: '/passions/:slug', permanent: true },
      { source: '/v2/blog/:slug', destination: '/blog/:slug', permanent: true },

      // The old design's project pages briefly sat at /projects before the
      // classic design moved under /classic. Never deployed, but cheap to keep
      // honest.
      { source: '/projects/:slug', destination: '/classic/projects/:slug', permanent: true },
    ];
  },

  eslint: {
    // Allow production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds to complete even with TypeScript errors
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
