// components/editorial/Masthead.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { site } from '@/data/site';
import { editorialNav } from './nav';

export default function Masthead() {
  const { darkMode, toggleTheme } = useTheme();
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile sheet on navigation.
  useEffect(() => setIsOpen(false), [pathname]);

  // Lock the page behind the open sheet so the background doesn't scroll.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [isOpen]);

  const navLinkClass = (href: string) =>
    `ed-label transition-colors ${
      pathname === href ? 'text-accent' : 'text-ink hover:text-accent'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-sm">
      <div className="ed-shell">
        <div className="flex items-center justify-between gap-6 py-4 md:py-5">
          <Link
            href="/"
            className="ed-label text-ink hover:text-accent transition-colors shrink-0"
            style={{ letterSpacing: '0.18em' }}
          >
            {site.name}
          </Link>

          <nav aria-label="Sections" className="hidden md:flex items-center gap-7">
            {editorialNav.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                <span className="text-ink-muted mr-1.5">{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 grid place-items-center border border-rule text-ink hover:text-accent hover:border-accent transition-colors"
            >
              <span aria-hidden="true" className="text-[0.8rem] leading-none">
                {darkMode ? '☀' : '☾'}
              </span>
            </button>

            <button
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="md:hidden w-8 h-8 grid place-items-center border border-rule text-ink hover:text-accent hover:border-accent transition-colors"
            >
              <span aria-hidden="true" className="text-[0.85rem] leading-none">
                {isOpen ? '✕' : '≡'}
              </span>
            </button>
          </div>
        </div>
      </div>

      <hr className="ed-rule-heavy" />

      {/* Mobile sheet */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b border-rule">
          <nav aria-label="Sections" className="ed-shell py-2">
            {editorialNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ed-row flex items-baseline gap-4 py-4 border-b border-rule last:border-b-0"
              >
                <span className="ed-label text-ink-muted">{item.index}</span>
                <span className="ed-heading text-ink">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
