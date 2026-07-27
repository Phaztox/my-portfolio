// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

/**
 * Publishes scroll position as `--scroll-progress` and a `.scrolling` flag on
 * <body>, which drives the slim progress bar styled by `body.scrolling::before`
 * in globals.css.
 *
 * Deliberately unconditional: whether the bar is *shown* is a CSS media-query
 * decision. Gating the listener on a `matchMedia` check here would evaluate it
 * once at mount, so rotating a phone or toggling device emulation after load
 * left the bar permanently dead.
 *
 * Every page scrolls the window now — sub-pages no longer nest their own
 * scroll container — so there is a single element to listen to.
 */
function useScrollProgress() {
  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      document.body.classList.add('scrolling');

      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

      document.documentElement.style.setProperty('--scroll-progress', progress.toString());

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => document.body.classList.remove('scrolling'), 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimeout);
      document.body.classList.remove('scrolling');
    };
  }, []);
}

export default function App({ Component, pageProps }: AppProps) {
  useScrollProgress();

  return (
    <ThemeProvider>
      {/* Carries the Inter font variable to every page. Inherited properties
          reach fixed/absolute descendants too, so the navbar and footer pick
          it up as well. */}
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
