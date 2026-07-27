// components/SectionIndicator.tsx
import { motion } from 'framer-motion';
import { sections } from '@/data/sections';

interface SectionIndicatorProps {
  currentSection: number;
  onSectionClick: (index: number) => void;
}

export default function SectionIndicator({ currentSection, onSectionClick }: SectionIndicatorProps) {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 sm:gap-3"
    >
      {sections.map((section, index) => {
        const isActive = currentSection === index;

        return (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick(index)}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
            className={`group relative flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 ${
              isActive
                ? 'bg-pink-500 border-pink-500 scale-125'
                : 'bg-transparent border-gray-400 hover:border-pink-400 hover:scale-110 dark:border-gray-500'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute right-6 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none dark:bg-gray-100 dark:text-gray-900">
              {section.label}
              <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent dark:border-l-gray-100" />
            </span>

            {isActive && (
              <motion.span
                className="w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}
