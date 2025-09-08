// hooks/useSectionScroll.ts
import { useEffect, useRef, useState } from 'react';

export const useSectionScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false); // Add ref to track scrolling state
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Additional timeout for scroll completion
  const isProgrammaticScrollRef = useRef(false); // Track only programmatic scrolls (dot clicks)
  const scrollAccumulator = useRef<number>(0); // Accumulate scroll delta
  const scrollProcessingRef = useRef<boolean>(false); // Flag to prevent processing during accumulation

  const sections = [
    'hero',
    'about', 
    'resume',
    'projects',
    'passions',
    'blog'
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      // More precise mobile detection - check for actual mobile user agents
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth < 768;
      
      // Only consider it mobile if it's both a mobile device AND has a small screen
      // This prevents laptops with touchscreens from being classified as mobile
      setIsMobile(isMobileDevice && isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    const element = document.getElementById(sections[index]);
    if (element) {
      // Clear any existing timeouts
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
      
      setIsScrolling(true);
      isScrollingRef.current = true; // Block wheel scrolling on desktop
      isProgrammaticScrollRef.current = true; // Block intersection observer for cascade prevention
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Shorter timeout for wheel scrolling (800ms)
      setTimeout(() => {
        setIsScrolling(false);
        isScrollingRef.current = false;
      }, 800);
      
      // Longer timeout only for intersection observer blocking (1.5 seconds)
      scrollEndTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 1500);
    }
  };

  const handleScroll = (event: WheelEvent) => {
    // Disable section scroll on mobile devices or if already scrolling
    if (isMobile || isScrolling || isScrollingRef.current || scrollProcessingRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    
    const delta = event.deltaY;
    
    // Accumulate scroll delta to handle fast/momentum scrolling
    scrollAccumulator.current += delta;
    
    // Start processing this scroll gesture
    scrollProcessingRef.current = true;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Wait for scroll momentum to settle (150ms - longer to catch all momentum events)
    scrollTimeoutRef.current = setTimeout(() => {
      const totalDelta = scrollAccumulator.current;
      
      // Reset accumulator and processing flag
      scrollAccumulator.current = 0;
      scrollProcessingRef.current = false;
      
      // Only trigger scroll if we have significant accumulated delta
      if (Math.abs(totalDelta) > 10) {
        if (totalDelta > 0 && currentSection < sections.length - 1) {
          // Scroll down (trackpad swipe up)
          const nextSection = currentSection + 1;
          setCurrentSection(nextSection);
          scrollToSection(nextSection);
        } else if (totalDelta < 0 && currentSection > 0) {
          // Scroll up (trackpad swipe down)
          const prevSection = currentSection - 1;
          setCurrentSection(prevSection);
          scrollToSection(prevSection);
        }
      }
    }, 150);
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
    // Only add wheel listeners on desktop
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
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
    };
  }, [currentSection, isScrolling]);

  // Detect current section on manual scroll (for navigation clicks and mobile)
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Only block intersection updates during programmatic dot clicks, not during wheel scrolling
      if (isProgrammaticScrollRef.current) return;
      
      // Find the entry with the highest intersection ratio
      let mostVisibleEntry = null as IntersectionObserverEntry | null;
      let highestRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
          mostVisibleEntry = entry;
          highestRatio = entry.intersectionRatio;
        }
      });

      if (mostVisibleEntry && highestRatio > 0.3) {
        const element = mostVisibleEntry.target as Element;
        const sectionId = element.id;
        const sectionIndex = sections.indexOf(sectionId);
        if (sectionIndex !== -1) {
          setCurrentSection(sectionIndex);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.3, 0.5, 0.7], // Multiple thresholds for better detection
      rootMargin: '-100px 0px -100px 0px' // More aggressive margin for mobile
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
  }, []); // Empty dependency array to prevent recreation

  return {
    currentSection,
    sections,
    scrollToSection: (index: number) => {
      // Immediately set the target section to prevent any intermediate highlighting
      setCurrentSection(index);
      isProgrammaticScrollRef.current = true; // Block intersection observer immediately for dot clicks
      scrollToSection(index);
    },
    isScrolling,
    isMobile
  };
};
