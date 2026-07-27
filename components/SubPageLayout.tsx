// components/SubPageLayout.tsx
// Shared chrome for the standalone pages (passions + blog posts): background,
// top bar, theme toggle, back link and page header. Previously every one of
// those five pages carried its own copy of all of this.
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Seo from './Seo';
import { site } from '@/data/site';

export type Accent = 'pink' | 'purple' | 'orange' | 'red' | 'indigo';

const backgrounds: Record<Accent, { light: string; dark: string }> = {
  pink: {
    light: 'bg-gradient-to-br from-pink-50 to-purple-100',
    dark: 'bg-gradient-to-br from-gray-900 via-pink-950/20 to-purple-950/20',
  },
  purple: {
    light: 'bg-gradient-to-br from-purple-50 to-indigo-100',
    dark: 'bg-gradient-to-br from-gray-900 via-purple-950/20 to-indigo-950/20',
  },
  orange: {
    light: 'bg-gradient-to-br from-orange-50 to-yellow-100',
    dark: 'bg-gradient-to-br from-gray-900 via-orange-950/20 to-yellow-950/20',
  },
  red: {
    light: 'bg-gradient-to-br from-pink-50 to-red-100',
    dark: 'bg-gradient-to-br from-gray-900 via-pink-950/20 to-red-950/20',
  },
  indigo: {
    light: 'bg-gradient-to-br from-indigo-50 to-purple-100',
    dark: 'bg-gradient-to-br from-gray-900 via-indigo-950/20 to-purple-950/20',
  },
};

const backButton: Record<Accent, string> = {
  pink: 'bg-pink-500 hover:bg-pink-600 dark:bg-purple-600 dark:hover:bg-purple-700',
  purple: 'bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700',
  orange: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700',
  red: 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
  indigo: 'bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700',
};

interface SubPageLayoutProps {
  title: string;
  /** Sub-heading under the page title. Also used as the meta description. */
  subtitle?: string;
  description?: string;
  /** Big emoji shown in the header medallion. Passion pages use this. */
  icon?: string;
  accent?: Accent;
  backHref: string;
  backLabel: string;
  seoType?: 'website' | 'article';
  publishedTime?: string;
  /** Renders the title left-aligned with no medallion, the way an article reads. */
  variant?: 'page' | 'article';
  children: ReactNode;
}

export default function SubPageLayout({
  title,
  subtitle,
  description,
  icon,
  accent = 'purple',
  backHref,
  backLabel,
  seoType = 'website',
  publishedTime,
  variant = 'page',
  children,
}: SubPageLayoutProps) {
  const { darkMode, toggleTheme } = useTheme();

  // Hide the desktop scrollbar for a cleaner reading surface. The matching
  // rules live in globals.css; the attribute is removed on unmount so the
  // homepage keeps its scrollbar.
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.documentElement.setAttribute('data-hide-scrollbar', 'true');
    return () => document.documentElement.removeAttribute('data-hide-scrollbar');
  }, []);

  const background = darkMode ? backgrounds[accent].dark : backgrounds[accent].light;

  return (
    <>
      <Seo
        title={title}
        description={description ?? subtitle ?? site.description}
        type={seoType}
        publishedTime={publishedTime}
      />

      <div className={`min-h-screen transition-colors duration-300 ${background}`}>
        <nav
          className={`fixed top-0 w-full px-6 py-4 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
            darkMode ? 'bg-gray-900/95 border-gray-700/50' : 'bg-white/95 border-gray-200/50'
          }`}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link
              href="/"
              className={`font-bold text-2xl transition-colors ${
                darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-pink-500'
              }`}
            >
              {site.initials}
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <Link
                href={backHref}
                className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${backButton[accent]}`}
              >
                ← {backLabel}
              </Link>
            </div>
          </div>
        </nav>

        <div className={`px-6 pb-20 ${variant === 'article' ? 'pt-32' : 'pt-24'}`}>
          <div className="max-w-4xl mx-auto">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={variant === 'article' ? 'mb-12' : 'text-center mb-12'}
            >
              {icon && (
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-4xl mb-6">
                  {icon}
                </div>
              )}
              <h1
                className={`font-bold mb-4 ${
                  variant === 'article' ? 'text-4xl md:text-5xl mb-6' : 'text-5xl'
                } ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className={`text-xl leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {subtitle}
                </p>
              )}
            </motion.header>

            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
