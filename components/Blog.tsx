// components/Blog.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { posts, postHref } from '@/data/posts';

export default function Blog() {
  return (
    <section id="blog" className="section-container px-6 sm:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2
          className="text-responsive-heading font-bold mb-6 md:mb-8 text-center text-ink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Blog
        </motion.h2>

        <div className="space-y-6">
          {posts.map((post, i) => {
            const body = (
              <>
                <h3
                  className={`font-semibold text-responsive-card-title mb-2 transition-colors duration-200 text-ink ${
                    post.blocks ? 'group-hover:text-purple-600 dark:group-hover:text-purple-400' : ''
                  }`}
                >
                  {post.title}
                  {!post.blocks && (
                    <span className="ml-2 align-middle text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      Work in progress
                    </span>
                  )}
                </h3>
                <p className="text-responsive-card leading-relaxed text-ink-soft">{post.excerpt}</p>
              </>
            );

            return (
              <motion.article
                key={post.title}
                className="backdrop-blur-sm responsive-card-radius responsive-card-padding shadow-lg hover:shadow-xl transition-shadow duration-300 bg-surface border border-border-soft"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                {post.blocks ? (
                  <Link href={postHref(post.slug, 'classic')} className="block group">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
