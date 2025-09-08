// pages/index.tsx - SINGLE SCROLLING EXPERIENCE
import { useEffect } from 'react';
import { useSectionScroll } from '@/hooks/useSectionScroll';
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Passions from "@/components/Passions";
import Footer from "@/components/Footer";
import SectionIndicator from "@/components/SectionIndicator";
import ScrollHint from "@/components/ScrollHint";

export default function Home() {
  const { currentSection, sections, scrollToSection, isMobile } = useSectionScroll();
  const { darkMode } = useTheme();

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
    
    // Add main-scrollbar class to body for colored scrollbar
    document.body.classList.add('main-scrollbar');
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.classList.remove('main-scrollbar');
    };
  }, [isMobile]);

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-indigo-900/30' : 'bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200'
    }`}>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 animate-float ${
            darkMode ? 'opacity-8' : 'opacity-25'
          }`}
          style={{ 
            backgroundColor: darkMode ? '#7c3aed' : '#F7A8B8',
            animationDelay: '0s',
            animationDuration: '20s'
          }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl transition-opacity duration-1000 animate-float ${
            darkMode ? 'opacity-10' : 'opacity-30'
          }`}
          style={{ 
            backgroundColor: darkMode ? '#ec4899' : '#CBB3EE',
            animationDelay: '7s',
            animationDuration: '25s'
          }}
        />
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl transition-opacity duration-1000 animate-float ${
            darkMode ? 'opacity-6' : 'opacity-20'
          }`}
          style={{ 
            backgroundColor: darkMode ? '#f59e0b' : '#FFB347',
            animationDelay: '14s',
            animationDuration: '18s'
          }}
        />
        {/* Additional floating elements for better coverage */}
        <div 
          className={`absolute top-3/4 left-1/6 w-72 h-72 rounded-full blur-3xl transition-opacity duration-1000 animate-float ${
            darkMode ? 'opacity-5' : 'opacity-18'
          }`}
          style={{ 
            backgroundColor: darkMode ? '#06b6d4' : '#87CEEB',
            animationDelay: '21s',
            animationDuration: '22s'
          }}
        />
        <div 
          className={`absolute top-1/6 right-1/6 w-56 h-56 rounded-full blur-2xl transition-opacity duration-1000 animate-float ${
            darkMode ? 'opacity-7' : 'opacity-22'
          }`}
          style={{ 
            backgroundColor: darkMode ? '#10b981' : '#98FB98',
            animationDelay: '10s',
            animationDuration: '26s'
          }}
        />
      </div>
      
      <Navbar scrollToSection={scrollToSection} sections={sections} />
      
      {/* Section Navigation Indicator */}
      <SectionIndicator 
        currentSection={currentSection}
        sections={sections}
        onSectionClick={scrollToSection}
      />
      
      {/* Scroll Hint - only show on first section and on desktop */}
      <ScrollHint show={currentSection === 0 && !isMobile} />
      
      {/* Scrolling sections */}
      <div className="relative z-10 pb-20"> {/* Add padding for footer */}
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Resume />
        <Projects />
        <Passions />
        <Blog />
      </div>
      
      {/* Always visible footer */}
      <Footer />
    </div>
  );
}