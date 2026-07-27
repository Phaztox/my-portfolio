// hooks/useActiveSection.ts
import { useCallback, useEffect, useRef, useState } from 'react';
import { sectionIds } from '@/data/sections';

/**
 * Tracks which homepage section is currently in view and exposes a helper to
 * jump to one.
 *
 * Scrolling itself is left entirely to the browser — `html.snap-sections` in
 * globals.css applies `scroll-snap-type: y proximity`, which keeps native
 * physics on trackpad, wheel, touch and keyboard alike. This hook only
 * *observes*; it never takes the scroll over.
 */
export function useActiveSection() {
  const [currentSection, setCurrentSection] = useState(0);
  // While a click-to-jump is animating, the observer would otherwise light up
  // every section the page flies past.
  const programmaticScrollRef = useRef(false);
  const releaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Opt this page into snap scrolling; sub-pages scroll normally.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('snap-sections');
    return () => root.classList.remove('snap-sections');
  }, []);

  useEffect(() => {
    // A section counts as active once it crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        if (programmaticScrollRef.current) return;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) setCurrentSection(index);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (releaseTimeoutRef.current) clearTimeout(releaseTimeoutRef.current);
    };
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const id = sectionIds[index];
    if (!id) return;

    const element = document.getElementById(id);
    if (!element) return;

    setCurrentSection(index);
    programmaticScrollRef.current = true;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (releaseTimeoutRef.current) clearTimeout(releaseTimeoutRef.current);
    releaseTimeoutRef.current = setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 900);
  }, []);

  return { currentSection, scrollToSection };
}
