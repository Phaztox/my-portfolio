// pages/_app.tsx - WITH THEME CONTEXT AND FIREFOX HASH NAVIGATION FIX
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Fix for Firefox hash navigation
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Delay to ensure page is fully loaded
          setTimeout(() => {
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Handle hash navigation on route changes
    const handleRouteChangeComplete = () => {
      setTimeout(handleHashNavigation, 200);
    };

    // Handle hash changes (for Firefox)
    const handleHashChange = () => {
      handleHashNavigation();
    };

    // Initial hash navigation
    handleHashNavigation();
    
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router.events]);

  // Global mobile scrollbar functionality
  useEffect(() => {
    // Check if it's a mobile device
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    if (isMobile) {
      let scrollTimeout: NodeJS.Timeout;
      let currentScrollElement: Element | Window | null = null;
      
      const handleScroll = () => {
        // Add scrolling class to show custom scrollbar
        document.body.classList.add('scrolling');
        
        let scrollTop = 0;
        let scrollHeight = 0;
        let clientHeight = 0;
        
        // Check if we're scrolling in a container or the window
        const scrollableContainer = document.querySelector('.min-h-screen.overflow-y-auto');
        if (scrollableContainer && scrollableContainer.scrollHeight > scrollableContainer.clientHeight) {
          scrollTop = scrollableContainer.scrollTop;
          scrollHeight = scrollableContainer.scrollHeight;
          clientHeight = scrollableContainer.clientHeight;
        } else {
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        }
        
        const maxScroll = scrollHeight - clientHeight;
        const scrollProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
        
        // Set CSS custom property for scroll progress
        document.documentElement.style.setProperty('--scroll-progress', Math.min(scrollProgress, 1).toString());
        
        // Hide scrollbar after 1 second of no scrolling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          document.body.classList.remove('scrolling');
        }, 1000);
      };
      
      const attachScrollListeners = () => {
        // Remove existing listeners
        if (currentScrollElement) {
          if (currentScrollElement === window) {
            window.removeEventListener('scroll', handleScroll);
          } else {
            (currentScrollElement as Element).removeEventListener('scroll', handleScroll);
          }
        }
        
        // Check for scrollable container (passion pages)
        const scrollableContainer = document.querySelector('.min-h-screen.overflow-y-auto');
        if (scrollableContainer) {
          scrollableContainer.addEventListener('scroll', handleScroll, { passive: true });
          currentScrollElement = scrollableContainer;
        } else {
          // Default to window scroll (main page)
          window.addEventListener('scroll', handleScroll, { passive: true });
          currentScrollElement = window;
        }
      };
      
      // Store scroll positions for different routes
      const scrollPositions = new Map<string, number>();
      
      const handleRouteChangeStart = () => {
        // Save current scroll position
        let scrollTop = 0;
        const scrollableContainer = document.querySelector('.min-h-screen.overflow-y-auto');
        if (scrollableContainer) {
          scrollTop = scrollableContainer.scrollTop;
        } else {
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        }
        
        scrollPositions.set(router.asPath, scrollTop);
      };
      
      const handleRouteChangeComplete = (url: string) => {
        // Reset scroll progress initially
        document.documentElement.style.setProperty('--scroll-progress', '0');
        document.body.classList.remove('scrolling');
        
        setTimeout(() => {
          // Re-attach scroll listeners to new page structure
          attachScrollListeners();
          
          // Handle different navigation scenarios
          const isBackNavigation = scrollPositions.has(url);
          const savedPosition = scrollPositions.get(url) || 0;
          const isMainPageWithHash = url.startsWith('/#');
          
          if (url === '/' && isBackNavigation) {
            // Back to main page - restore position
            window.scrollTo(0, savedPosition);
          } else if (isMainPageWithHash) {
            // Hash navigation is now handled by the dedicated hash handler above
            // Don't interfere with it here
          } else {
            // For other pages or new navigation, start from top
            const scrollableContainer = document.querySelector('.min-h-screen.overflow-y-auto');
            if (scrollableContainer) {
              scrollableContainer.scrollTop = 0;
            } else {
              window.scrollTo(0, 0);
            }
          }
          
          // Trigger initial scroll calculation
          setTimeout(handleScroll, 100);
        }, 100);
      };
      
      // Initial setup
      attachScrollListeners();
      
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      
      return () => {
        if (currentScrollElement) {
          if (currentScrollElement === window) {
            window.removeEventListener('scroll', handleScroll);
          } else {
            (currentScrollElement as Element).removeEventListener('scroll', handleScroll);
          }
        }
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        clearTimeout(scrollTimeout);
      };
    }
  }, [router.events, router.asPath]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}