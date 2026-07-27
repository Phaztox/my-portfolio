// components/Footer.tsx — always-visible footer with contact links.
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { site } from '@/data/site';

export default function Footer() {
  const { darkMode } = useTheme();

  const linkClass =
    'flex items-center gap-2 transition-all duration-300 text-sm md:text-base group text-gray-700 dark:text-gray-200';

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-4 px-6 backdrop-blur-md border-t shadow-lg transition-colors duration-300 bg-white/95 border-gray-200/50 dark:bg-gray-900/95 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-6">
            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} hover:text-blue-600 dark:hover:text-blue-400`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-5 h-5 md:w-6 md:h-6 relative">
                <Image
                  src="/LinkedIn_icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-full h-full object-contain group-hover:brightness-110 transition-all duration-300"
                />
              </span>
              <span className="hidden sm:inline">LinkedIn</span>
              <span className="sr-only sm:hidden">LinkedIn</span>
            </motion.a>

            <motion.a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} hover:text-purple-600 dark:hover:text-purple-400`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-5 h-5 md:w-6 md:h-6 relative">
                <Image
                  src={darkMode ? '/github-mark-white.svg' : '/github-mark.svg'}
                  alt=""
                  width={24}
                  height={24}
                  className="w-full h-full object-contain group-hover:opacity-80 transition-all duration-300"
                />
              </span>
              <span className="hidden sm:inline">GitHub</span>
              <span className="sr-only sm:hidden">GitHub</span>
            </motion.a>

            <motion.a
              href={`mailto:${site.email}`}
              className={`${linkClass} hover:text-pink-600 dark:hover:text-pink-400`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-5 h-5 md:w-6 md:h-6 relative">
                <Image
                  src="/email-fill.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                  style={{
                    filter: darkMode
                      ? 'brightness(0) saturate(100%) invert(85%) sepia(8%) saturate(423%) hue-rotate(173deg) brightness(96%) contrast(93%)'
                      : 'brightness(0) saturate(100%) invert(32%) sepia(6%) saturate(606%) hue-rotate(173deg) brightness(91%) contrast(87%)',
                  }}
                />
              </span>
              <span className="hidden sm:inline">Email</span>
              <span className="sr-only sm:hidden">Email</span>
            </motion.a>
          </div>

          {/* Rendered from the build date, so a redeploy keeps it current
              without anyone having to remember to bump it. */}
          <p
            suppressHydrationWarning
            className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
