// pages/work/[slug].tsx - editorial design, one project page.
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import ContentBlocks from '@/components/editorial/ContentBlocks';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { getProject, projectsWithPages, type Project } from '@/data/projects';

export default function EditorialProjectPage({ project }: { project: Project }) {
  return (
    <EditorialLayout title={project.title} description={project.desc}>
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            <Link href="/work" className="ed-link">
              02 <span className="text-accent">/</span> Work
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="ed-display text-ink">{project.title}</h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <div className="col-span-6 md:col-span-2">
            <Reveal>
              {project.year && <p className="ed-meta text-ink-muted">{project.year}</p>}
              {project.ongoing && (
                <p className="ed-label text-accent mt-2">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle animate-pulse-soft"
                  />
                  Ongoing
                </p>
              )}
              {project.context && (
                <p className="ed-meta text-ink-muted mt-2">{project.context}</p>
              )}
            </Reveal>
          </div>

          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">{project.desc}</p>
            <ul className="flex flex-wrap gap-x-2 gap-y-1.5 mt-5 list-none">
              {project.tech.map((tool) => (
                <li key={tool} className="ed-meta text-ink-muted border border-rule px-2 py-0.5">
                  {tool}
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link ed-label text-ink-muted inline-block mt-5"
              >
                View the code <span aria-hidden="true">→</span>
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="ed-shell pt-6 md:pt-10">
        <DrawnRule heavy />
        <div className="ed-grid">
          <div className="col-span-6 md:col-span-6 md:col-start-4 pt-8 md:pt-10">
            <ContentBlocks blocks={project.blocks ?? []} />
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="ed-shell pt-10 md:pt-16">
        <Link
          href="/work"
          className="ed-row group grid grid-cols-6 md:grid-cols-12 gap-4 items-baseline py-8 md:py-10 border-t-2 border-ink"
        >
          <span className="ed-label text-ink-muted col-span-6 md:col-span-3">Back to</span>
          <span className="ed-title text-ink col-span-5 md:col-span-8 transition-colors group-hover:text-accent">
            All work
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
  paths: projectsWithPages.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getProject(params?.slug as string);
  if (!project?.blocks) return { notFound: true };

  return { props: { project } };
};
