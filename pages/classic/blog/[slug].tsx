// pages/classic/blog/[slug].tsx - classic design, one blog post.
// Replaces the hand-written post file; content comes from data/posts.ts.
import { motion } from 'framer-motion';
import type { GetStaticPaths, GetStaticProps } from 'next';
import SubPageLayout from '@/components/SubPageLayout';
import ClassicContentBlocks from '@/components/ClassicContentBlocks';
import { getPost, publishedPosts, type Post } from '@/data/posts';

export default function BlogPost({ post }: { post: Post }) {
  return (
    <SubPageLayout
      title={post.title}
      subtitle={post.excerpt}
      accent="purple"
      backHref="/classic#blog"
      backLabel="Back to Blog"
      seoType="article"
      publishedTime={post.date}
      variant="article"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <ClassicContentBlocks blocks={post.blocks ?? []} />
      </motion.article>
    </SubPageLayout>
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
