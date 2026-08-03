// pages/passions/[slug].tsx - editorial design, one passion page.
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import ContentBlocks from '@/components/editorial/ContentBlocks';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { getPassion, passions, passionHref, type Passion } from '@/data/passions';

export default function EditorialPassionPage({
  passion,
  next,
}: {
  passion: Passion;
  next: Pick<Passion, 'slug' | 'title'>;
}) {
  return (
    <EditorialLayout title={passion.title} description={passion.description}>
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            <Link href="/passions" className="ed-link">
              05 <span className="text-accent">/</span> Passions
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="ed-display text-ink">{passion.title}</h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">{passion.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="ed-shell pt-6 md:pt-10">
        <DrawnRule heavy />
        <div className="ed-grid">
          <div className="col-span-6 md:col-span-6 md:col-start-4 pt-8 md:pt-10">
            <ContentBlocks blocks={passion.blocks} />
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="ed-shell pt-10 md:pt-16">
        <Link
          href={passionHref(next.slug)}
          className="ed-row group grid grid-cols-6 md:grid-cols-12 gap-4 items-baseline py-8 md:py-10 border-t-2 border-ink"
        >
          <span className="ed-label text-ink-muted col-span-6 md:col-span-3">Next</span>
          <span className="ed-title text-ink col-span-5 md:col-span-8 transition-colors group-hover:text-accent">
            {next.title}
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
  paths: passions.map((passion) => ({ params: { slug: passion.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const index = passions.findIndex((passion) => passion.slug === slug);
  const passion = getPassion(slug);
  if (!passion) return { notFound: true };

  // Wraps around, so every page has somewhere to go next.
  const nextPassion = passions[(index + 1) % passions.length];

  return {
    props: {
      passion,
      next: { slug: nextPassion.slug, title: nextPassion.title },
    },
  };
};
