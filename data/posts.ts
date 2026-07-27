// data/posts.ts — blog index. `href` is omitted while a post is still a draft,
// which is what makes its card non-clickable and adds the "WIP" tag.

export interface Post {
  title: string;
  excerpt: string;
  href?: string;
  /** ISO date, used for sitemap freshness and post metadata. */
  date?: string;
}

export const posts: Post[] = [
  {
    title: 'The Compressed Truth: Unpacking My Fascination with Video Codecs & Quality',
    excerpt:
      'How my hobby for creating cool video edits unexpectedly led me down a rabbit hole into the hidden magic and clever science behind making visuals look amazing without hogging all your storage.',
    href: '/blog/the-compressed-truth',
    date: '2025-09-07',
  },
  {
    title: 'The Unseen Architect: My Personal Journey Through the Landscape of Music',
    excerpt:
      "A personal reflection on how music shapes my life, fuels my creativity, and serves as a constant companion through all of life's ups and downs.",
  },
  {
    title: 'Whispered Calculations: An Ode to Tuning Builds, Stats, and Team Alchemy',
    excerpt:
      'A deep dive into the art and science of game mechanics, exploring how small adjustments can lead to significant advantages in competitive play.',
  },
];
