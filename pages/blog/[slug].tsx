// pages/blog/[slug].tsx - editorial design, one blog post.
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import ContentBlocks from '@/components/editorial/ContentBlocks';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { getPost, publishedPosts, type Post } from '@/data/posts';

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : undefined;

export default function EditorialBlogPost({ post }: { post: Post }) {
  return (
    <EditorialLayout
      title={post.title}
      description={post.excerpt}
      seoType="article"
      publishedTime={post.date}
    >
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            <Link href="/writing" className="ed-link">
              04 <span className="text-accent">/</span> Writing
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          {/* Article titles are sentence-length, so they use the title scale
              rather than the all-caps display scale. */}
          <h1 className="ed-title text-ink max-w-[22ch]">{post.title}</h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <div className="col-span-6 md:col-span-2">
            {post.date && (
              <Reveal>
                <p className="ed-meta text-ink-muted">{formatDate(post.date)}</p>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">{post.excerpt}</p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="ed-shell pt-6 md:pt-10">
        <DrawnRule heavy />
        <div className="ed-grid">
          <div className="col-span-6 md:col-span-6 md:col-start-4 pt-8 md:pt-10">
            <ContentBlocks blocks={post.blocks ?? []} />
          </div>
        </div>
      </section>

      {/* Back to index */}
      <section className="ed-shell pt-10 md:pt-16">
        <Link
          href="/writing"
          className="ed-row group grid grid-cols-6 md:grid-cols-12 gap-4 items-baseline py-8 md:py-10 border-t-2 border-ink"
        >
          <span className="ed-label text-ink-muted col-span-6 md:col-span-3">Back to</span>
          <span className="ed-title text-ink col-span-5 md:col-span-8 transition-colors group-hover:text-accent">
            All writing
          </span>
          <span
            aria-hidden="true"
            className="hidden md:block md:col-span-1 text-right text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
          >
            →
          </span>
        </Link>
      </section>
    </EditorialLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: publishedPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPost(params?.slug as string);
  if (!post?.blocks) return { notFound: true };

  return { props: { post } };
};
