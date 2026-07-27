// components/Navbar.tsx
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { sections, sectionIndex } from '@/data/sections';
import { passions } from '@/data/passions';
import { site } from '@/data/site';

interface NavbarProps {
  scrollToSection: (index: number) => void;
}

const navLinks = sections
  .map((section, index) => ({ ...section, index }))
  .filter((section) => section.navLabel);

export default function Navbar({ scrollToSection }: NavbarProps) {
  const { darkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPassionsOpen, setIsPassionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const passionsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close either menu on an outside tap. The old version tracked every
  // mousemove in React state, re-rendering the whole navbar on each pixel.
  //
  // `mousedown`/`touchstart` fire before `click`, so anything this handler
  // closes would be immediately re-opened by the button's own toggle. The
  // checks below therefore have to treat a tap on the trigger itself as
  // "inside": the mobile Passions button lives in the mobile menu (not in
  // `passionsRef`, which is the desktop dropdown), and the hamburger lives in
  // the navbar (not in `mobileMenuRef`).
  useEffect(() => {
    if (!isPassionsOpen && !isMobileMenuOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      const inPassions = passionsRef.current?.contains(target) ?? false;
      const inMobileMenu = mobileMenuRef.current?.contains(target) ?? false;
      const inNavbar = navbarRef.current?.contains(target) ?? false;

      if (!inPassions && !inMobileMenu) {
        setIsPassionsOpen(false);
      }
      if (!inMobileMenu && !inNavbar) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsPassionsOpen(false);
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isPassionsOpen, isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const openPassions = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsPassionsOpen(true);
  };

  const schedulePassionsClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setIsPassionsOpen(false), 200);
  };

  const goToSection = (index: number) => {
    scrollToSection(index);
    setIsPassionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const linkClass =
    'relative group font-medium transition-colors text-sm xl:text-base cursor-pointer text-gray-700 hover:text-pink-500 dark:text-gray-200 dark:hover:text-purple-300';
  const underlineClass =
    'absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full bg-pink-500 dark:bg-purple-300';
  const menuItemClass =
    'flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer w-full text-left text-gray-700 hover:bg-gray-100/50 hover:text-pink-500 dark:text-gray-200 dark:hover:bg-gray-700/50 dark:hover:text-purple-300';
  const panelClass =
    'rounded-xl shadow-xl border backdrop-blur-md bg-white/95 border-gray-200/50 dark:bg-gray-800/95 dark:border-gray-700/50';
  const iconButtonClass =
    'p-2 border rounded-full text-lg transition-colors bg-gray-100 border-gray-300 hover:bg-gray-200 text-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-yellow-300';

  return (
    <motion.nav
      ref={navbarRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 z-[60] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:bg-gray-900/95 dark:border-gray-700/20'
          : 'bg-white/10 backdrop-blur-sm dark:bg-gray-900/10'
      }`}
    >
      <motion.button
        onClick={() => goToSection(0)}
        aria-label={`${site.name} — back to top`}
        className="font-bold text-xl sm:text-2xl transition-colors cursor-pointer text-gray-900 hover:text-pink-500 dark:text-white dark:hover:text-purple-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {site.initials}
      </motion.button>

      {/* Desktop menu */}
      <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
        {navLinks.map((link, i) => (
          <motion.button
            key={link.id}
            onClick={() => goToSection(link.index)}
            className={linkClass}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {link.navLabel}
            <span className={underlineClass} />
          </motion.button>
        ))}

        {/* Passions dropdown */}
        <div
          className="relative"
          ref={passionsRef}
          onMouseEnter={openPassions}
          onMouseLeave={schedulePassionsClose}
        >
          <motion.button
            onClick={() => setIsPassionsOpen((open) => !open)}
            aria-expanded={isPassionsOpen}
            aria-haspopup="true"
            className={`${linkClass} flex items-center gap-1`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            Passions
            <motion.span
              animate={{ rotate: isPassionsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs"
              aria-hidden="true"
            >
              ▼
            </motion.span>
            <span className={underlineClass} />
          </motion.button>

          <AnimatePresence>
            {isPassionsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 mt-2 w-48 overflow-hidden ${panelClass}`}
              >
                <button
                  onClick={() => goToSection(sectionIndex('passions'))}
                  className={`${menuItemClass} border-b border-gray-200/50 dark:border-gray-700/50`}
                >
                  <span className="font-medium text-sm">Passions Section</span>
                </button>
                {passions.map((passion) => (
                  <Link
                    key={passion.href}
                    href={passion.href}
                    className={menuItemClass}
                    onClick={() => setIsPassionsOpen(false)}
                  >
                    <span className="text-lg" aria-hidden="true">
                      {passion.icon}
                    </span>
                    <span className="font-medium text-sm">{passion.title}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => goToSection(sectionIndex('blog'))}
          className={linkClass}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Blog
          <span className={underlineClass} />
        </motion.button>

        <motion.button
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className={`ml-2 xl:ml-4 ${iconButtonClass}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
        </motion.button>
      </div>

      {/* Mobile controls */}
      <div className="lg:hidden flex items-center gap-2">
        <motion.button
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className={iconButtonClass}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
        </motion.button>

        <motion.button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          className="p-2 border rounded-full transition-colors bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-lg" aria-hidden="true">
            ☰
          </span>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 right-0 mt-2 mx-4 overflow-hidden lg:hidden z-[60] ${panelClass}`}
          >
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => goToSection(link.index)} className={menuItemClass}>
                {link.navLabel}
              </button>
            ))}

            <div className="border-t border-gray-200/50 dark:border-gray-700/50">
              <button
                onClick={() => setIsPassionsOpen((open) => !open)}
                aria-expanded={isPassionsOpen}
                className={`${menuItemClass} justify-between`}
              >
                <span className="font-medium">Passions</span>
                <motion.span
                  animate={{ rotate: isPassionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                  aria-hidden="true"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {isPassionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => goToSection(sectionIndex('passions'))}
                      className={`${menuItemClass} pl-6 border-b border-gray-200/50 dark:border-gray-700/50`}
                    >
                      <span className="font-medium text-sm">Passions Section</span>
                    </button>
                    {passions.map((passion) => (
                      <Link
                        key={passion.href}
                        href={passion.href}
                        className={`${menuItemClass} pl-6`}
                        onClick={() => {
                          setIsPassionsOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="text-lg" aria-hidden="true">
                          {passion.icon}
                        </span>
                        <span className="font-medium text-sm">{passion.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-gray-200/50 dark:border-gray-700/50">
              <button onClick={() => goToSection(sectionIndex('blog'))} className={menuItemClass}>
                Blog
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
