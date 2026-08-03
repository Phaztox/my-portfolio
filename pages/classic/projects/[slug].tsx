// pages/classic/projects/[slug].tsx - classic design, one project page.
// Keeps content parity: any project with its own page exists in both designs.
import { motion } from 'framer-motion';
import type { GetStaticPaths, GetStaticProps } from 'next';
import SubPageLayout from '@/components/SubPageLayout';
import ClassicContentBlocks from '@/components/ClassicContentBlocks';
import { getProject, projectsWithPages, type Project } from '@/data/projects';

export default function ClassicProjectPage({ project }: { project: Project }) {
  return (
    <SubPageLayout
      title={project.title}
      subtitle={project.desc}
      accent="orange"
      backHref="/classic#projects"
      backLabel="Back to Projects"
      variant="article"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tool) => (
            <span
              key={tool}
              className="text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {tool}
            </span>
          ))}
        </div>

        <ClassicContentBlocks blocks={project.blocks ?? []} />
      </motion.article>
    </SubPageLayout>
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
