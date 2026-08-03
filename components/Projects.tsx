// components/Projects.tsx - staggered grid reveal.
import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';
import { projects, projectHref } from '@/data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-container px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.h2
          className="text-responsive-heading font-bold mb-6 md:mb-8 text-center text-ink"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 responsive-grid-gap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group relative backdrop-blur-lg responsive-card-radius shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-surface border border-border-soft"
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div
                className="responsive-project-height relative overflow-hidden"
                style={{ backgroundColor: project.color }}
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="responsive-icon-size text-white/80 transition-transform duration-500 group-hover:scale-110">
                    🚀
                  </span>
                </div>
              </div>

              <div className="responsive-card-padding">
                <h3 className="font-bold text-responsive-card-title mb-3 md:mb-4 transition-colors text-ink group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  {project.title}
                </h3>
                <p className="text-responsive-card mb-4 md:mb-6 leading-relaxed opacity-90 text-ink-muted">
                  {project.desc}
                </p>

                <ul className="flex flex-wrap gap-2 mb-4 md:mb-6 list-none">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="responsive-badge-padding responsive-badge-text rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.slug ? (
                  <Link
                    href={projectHref(project.slug, 'classic')}
                    className="inline-flex items-center responsive-button-padding responsive-card-radius text-white font-semibold text-responsive-body shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: project.color }}
                  >
                    Read more
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                ) : (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center responsive-button-padding responsive-card-radius text-white font-semibold text-responsive-body shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: project.color }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                    <span className="sr-only"> - {project.title} (opens in a new tab)</span>
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
