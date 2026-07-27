// components/CVDownload.tsx — CV language selection.
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cvLinks } from '@/data/site';

const options = [
  {
    key: 'english' as const,
    label: 'English',
    caption: 'English version',
    flag: '/Flag-United-Emoji.svg',
    alt: 'UK flag',
  },
  {
    key: 'french' as const,
    label: 'Français',
    caption: 'French version',
    flag: '/Flag-France-Emoji.svg',
    alt: 'French flag',
  },
];

export default function CVDownload({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div className="relative w-auto" ref={containerRef}>
      <motion.button
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`responsive-button-padding text-white responsive-card-radius shadow-xl hover:shadow-2xl text-responsive-body font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-pastel-pink ${className}`}
        whileHover={{ scale: 1.05, backgroundColor: '#EC4899' }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Download CV</span>
        <motion.span
          className="text-sm opacity-80"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 responsive-card-radius shadow-2xl border z-50 overflow-hidden backdrop-blur-xl bg-white/90 border-gray-200/50 dark:bg-gray-800/90 dark:border-gray-700/50"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {options.map((option, i) => (
                <div key={option.key}>
                  {i > 0 && <div className="h-px mx-4 bg-gray-200/50 dark:bg-gray-700/50" />}
                  <motion.a
                    href={cvLinks[option.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-5 py-4 text-left flex items-center gap-4 transition-all duration-300 group text-gray-700 hover:bg-gradient-to-r hover:from-pink-100/80 hover:to-purple-100/80 hover:text-pink-700 dark:text-gray-200 dark:hover:from-pink-500/20 dark:hover:to-purple-500/20 dark:hover:text-pink-300"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={option.flag}
                      alt={option.alt}
                      width={32}
                      height={32}
                      className="rounded-sm flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="flex-1">
                      <span className="block font-bold text-responsive-body">{option.label}</span>
                      <span className="block text-sm transition-colors text-gray-500 group-hover:text-pink-600 dark:text-gray-400 dark:group-hover:text-pink-200">
                        {option.caption}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-sm transition-all duration-200 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 dark:text-gray-500 dark:group-hover:text-pink-400"
                    >
                      →
                    </span>
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
