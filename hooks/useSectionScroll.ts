// hooks/useSectionScroll.ts
import { useEffect, useRef, useState } from 'react';

export const useSectionScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sections = [
    'hero',
    'about', 
    'resume',
    'projects',
    'blog',
    'passions'
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    const element = document.getElementById(sections[index]);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const handleScroll = (event: WheelEvent) => {
    // Disable section scroll on mobile devices
    if (isMobile || isScrolling) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a small delay to prevent multiple rapid scrolls
    scrollTimeoutRef.current = setTimeout(() => {
      const delta = event.deltaY;
      
      if (Math.abs(delta) > 10) { // Only trigger on significant scroll
        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down
          const nextSection = currentSection + 1;
          setCurrentSection(nextSection);
          scrollToSection(nextSection);
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up
          const prevSection = currentSection - 1;
          setCurrentSection(prevSection);
          scrollToSection(prevSection);
        }
      }
    }, 50);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isScrolling) return;

    switch (event.key) {
      case 'ArrowDown':
      case 'PageDown':
        event.preventDefault();
        if (currentSection < sections.length - 1) {
          const nextSection = currentSection + 1;
          setCurrentSection(nextSection);
          scrollToSection(nextSection);
        }
        break;
      case 'ArrowUp':
      case 'PageUp':
        event.preventDefault();
        if (currentSection > 0) {
          const prevSection = currentSection - 1;
          setCurrentSection(prevSection);
          scrollToSection(prevSection);
        }
        break;
      case 'Home':
        event.preventDefault();
        setCurrentSection(0);
        scrollToSection(0);
        break;
      case 'End':
        event.preventDefault();
        setCurrentSection(sections.length - 1);
        scrollToSection(sections.length - 1);
        break;
    }
  };

  useEffect(() => {
    // Only add wheel listener on desktop
    if (!isMobile) {
      const handleWheel = (e: WheelEvent) => handleScroll(e);
      
      // Prevent all scroll events on desktop
      const preventScroll = (e: Event) => e.preventDefault();
      
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      document.addEventListener('scroll', preventScroll, { passive: false });
      
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', preventScroll);
        document.removeEventListener('scroll', preventScroll);
      };
    }
  }, [currentSection, isScrolling, isMobile]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => handleKeyDown(e);
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSection, isScrolling]);

  // Detect current section on manual scroll (for navigation clicks and mobile)
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionId = entry.target.id;
          const sectionIndex = sections.indexOf(sectionId);
          if (sectionIndex !== -1 && sectionIndex !== currentSection) {
            setCurrentSection(sectionIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px'
    });

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [currentSection]);

  return {
    currentSection,
    sections,
    scrollToSection: (index: number) => {
      setCurrentSection(index);
      scrollToSection(index);
    },
    isScrolling,
    isMobile
  };
};
