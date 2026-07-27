// components/Hero.tsx
import { motion } from 'framer-motion';
import CVDownload from './CVDownload';
import { site } from '@/data/site';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="hero" className="section-container justify-center text-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-responsive-hero font-extrabold mb-6 md:mb-8 text-ink"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className="text-responsive-subtitle mb-8 md:mb-12 responsive-section-padding text-ink-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {site.role}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row responsive-button-gap justify-center items-center responsive-section-padding"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <CVDownload />

          <motion.button
            onClick={onExplore}
            className="responsive-button-padding bg-transparent border-2 border-orange-400 responsive-card-radius hover:bg-orange-400 hover:text-white text-responsive-body font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.05, backgroundColor: '#FFB347', borderColor: '#FFB347' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
