// components/Passions.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { passions, passionHref } from '@/data/passions';

export default function Passions() {
  return (
    <section id="passions" className="section-container px-6 sm:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2
          className="text-responsive-heading font-bold mb-6 md:mb-8 text-center text-ink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Passions
        </motion.h2>

        <div className="grid md:grid-cols-2 passion-grid-gap">
          {passions.map((passion, i) => (
            <motion.div
              key={passion.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              className="h-full"
            >
              <Link
                href={passionHref(passion.slug, 'classic')}
                className="group block h-full passion-card-padding backdrop-blur-sm responsive-card-radius shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu bg-surface border border-border-soft"
              >
                <span
                  className="responsive-card-radius flex items-center justify-center mb-3 text-white passion-icon-size transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110"
                  style={{
                    backgroundColor: passion.color,
                    width: 'clamp(2rem, min(3.5vw, 4vh), 3rem)',
                    height: 'clamp(2rem, min(3.5vw, 4vh), 3rem)',
                  }}
                  aria-hidden="true"
                >
                  {passion.icon}
                </span>

                <h3 className="font-semibold text-responsive-card-title mb-2 transition-colors text-ink group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  {passion.title}
                </h3>
                <p className="text-responsive-card mb-3 opacity-90 text-ink-muted">{passion.desc}</p>

                <span className="flex items-center responsive-badge-text font-medium transition-colors text-ink-muted group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  Explore more
                  <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
