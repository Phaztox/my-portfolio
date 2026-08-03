// pages/index.tsx — one page, six snap-scrolling sections.
import { useActiveSection } from '@/hooks/useActiveSection';
import Seo from '@/components/Seo';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Passions from '@/components/Passions';
import Footer from '@/components/Footer';
import SectionIndicator from '@/components/SectionIndicator';
import ScrollHint from '@/components/ScrollHint';
import { sectionIndex } from '@/data/sections';
import { defaultDesign } from '@/data/designs';

/** Ambient blurred orbs behind the content. The `.orb` rules in globals.css
 *  pick the light or dark colour from these custom properties. */
const orbs = [
  { className: 'top-1/4 left-1/4 w-96 h-96 blur-3xl', light: '#F7A8B8', dark: '#7c3aed', lightOpacity: 0.25, darkOpacity: 0.08, delay: '0s', duration: '20s' },
  { className: 'bottom-1/4 right-1/4 w-80 h-80 blur-3xl', light: '#CBB3EE', dark: '#ec4899', lightOpacity: 0.3, darkOpacity: 0.1, delay: '7s', duration: '25s' },
  { className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-2xl', light: '#FFB347', dark: '#f59e0b', lightOpacity: 0.2, darkOpacity: 0.06, delay: '14s', duration: '18s' },
  { className: 'top-3/4 left-1/6 w-72 h-72 blur-3xl', light: '#87CEEB', dark: '#06b6d4', lightOpacity: 0.18, darkOpacity: 0.05, delay: '21s', duration: '22s' },
  { className: 'top-1/6 right-1/6 w-56 h-56 blur-2xl', light: '#98FB98', dark: '#10b981', lightOpacity: 0.22, darkOpacity: 0.07, delay: '10s', duration: '26s' },
];

export default function Home() {
  const { currentSection, scrollToSection } = useActiveSection();

  return (
    <>
      {/* Only the default design is indexed; the other stays reachable but
          out of search so the two don't compete for the same keywords. */}
      <Seo noindex={defaultDesign !== 'classic'} />

      <div className="min-h-screen w-full relative bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 dark:from-gray-900 dark:via-purple-900/30 dark:to-indigo-900/30">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          {orbs.map((orb, i) => (
            <div
              key={i}
              className={`orb absolute rounded-full animate-float ${orb.className}`}
              style={
                {
                  '--orb-light': orb.light,
                  '--orb-dark': orb.dark,
                  '--orb-light-opacity': orb.lightOpacity,
                  '--orb-dark-opacity': orb.darkOpacity,
                  animationDelay: orb.delay,
                  animationDuration: orb.duration,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <Navbar scrollToSection={scrollToSection} />

        <SectionIndicator currentSection={currentSection} onSectionClick={scrollToSection} />

        <ScrollHint show={currentSection === 0} />

        {/* pb-20 keeps the last section clear of the fixed footer. */}
        <main className="relative z-10 pb-20">
          <Hero onExplore={() => scrollToSection(sectionIndex('about'))} />
          <About />
          <Resume />
          <Projects />
          <Passions />
          <Blog />
        </main>

        <Footer />
      </div>
    </>
  );
}
