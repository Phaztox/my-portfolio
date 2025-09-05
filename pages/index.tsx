// pages/index.tsx - SINGLE SCROLLING EXPERIENCE
import { useEffect } from 'react';
import { useSectionScroll } from '@/hooks/useSectionScroll';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Passions from "@/components/Passions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionIndicator from "@/components/SectionIndicator";
import ScrollHint from "@/components/ScrollHint";

export default function Home() {
  const { currentSection, sections, scrollToSection, isScrolling, isMobile } = useSectionScroll();

  useEffect(() => {
    // Disable default scroll behavior for the smooth section scrolling on desktop
    document.documentElement.style.scrollBehavior = isMobile ? 'auto' : 'smooth';
    
    // On desktop, completely disable scrolling since we handle it manually
    if (!isMobile) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(247, 168, 184, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(203, 179, 238, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 60% 10%, rgba(255, 179, 71, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, 
            #FDF2F8 0%, 
            #FEF3C7 25%, 
            #F3E8FF 50%, 
            #FDF2F8 75%, 
            #FEF3C7 100%
          )
        `
      }}
    >
      {/* Dark mode overlay for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-0 dark:opacity-96 transition-opacity duration-1000 pointer-events-none z-0"></div>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-float"
          style={{ 
            backgroundColor: '#F7A8B8',
            animationDelay: '0s',
            animationDuration: '20s'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25 dark:opacity-12 animate-float"
          style={{ 
            backgroundColor: '#CBB3EE',
            animationDelay: '7s',
            animationDuration: '25s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl opacity-15 dark:opacity-8 animate-float"
          style={{ 
            backgroundColor: '#FFB347',
            animationDelay: '14s',
            animationDuration: '18s'
          }}
        />
      </div>
      
      <Navbar />
      
      {/* Section Navigation Indicator */}
      <SectionIndicator 
        currentSection={currentSection}
        sections={sections}
        onSectionClick={scrollToSection}
      />
      
      {/* Scroll Hint - only show on first section and on desktop */}
      <ScrollHint show={currentSection === 0 && !isMobile} />
      
      {/* Scrolling sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Blog />
        <Passions />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}