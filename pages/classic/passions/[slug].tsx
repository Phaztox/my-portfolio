// pages/classic/passions/[slug].tsx - classic design, one passion page.
// Replaces the four near-identical page files; content comes from data/passions.ts.
import { motion } from 'framer-motion';
import type { GetStaticPaths, GetStaticProps } from 'next';
import SubPageLayout, { Accent } from '@/components/SubPageLayout';
import ClassicContentBlocks from '@/components/ClassicContentBlocks';
import { getPassion, passions, type Passion } from '@/data/passions';

/** Each passion keeps the background it had before the content was lifted out. */
const accents: Record<string, Accent> = {
  gaming: 'pink',
  music: 'orange',
  'asian-culture': 'indigo',
  'stats-and-logic': 'red',
};

export default function PassionPage({ passion }: { passion: Passion }) {
  return (
    <SubPageLayout
      title={passion.title}
      subtitle={passion.subtitle}
      description={passion.description}
      icon={passion.icon}
      accent={accents[passion.slug] ?? 'purple'}
      backHref="/classic#passions"
      backLabel="Back to Passions"
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <ClassicContentBlocks blocks={passion.blocks} />
      </motion.section>
    </SubPageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: passions.map((passion) => ({ params: { slug: passion.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const passion = getPassion(params?.slug as string);
  if (!passion) return { notFound: true };

  return { props: { passion } };
};
