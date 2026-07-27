// contexts/ThemeContext.tsx
import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Runs before first paint (see `themeInitScript` below), so the `.dark` class
 * is already on <html> when the CSS is applied and there is no light-mode
 * flash. React state then syncs to whatever that script decided.
 */
export const THEME_INIT_SCRIPT = `
(function(){try{
  var stored = localStorage.getItem('theme');
  var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  var root = document.documentElement;
  root.classList.toggle('dark', dark);
  root.style.colorScheme = dark ? 'dark' : 'light';
}catch(e){}})();
`.trim();

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Starts false so the server render and the first client render agree; the
  // effect below immediately adopts whatever the pre-paint script chose.
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode((previous) => {
      const next = !previous;
      const root = document.documentElement;

      root.classList.toggle('dark', next);
      root.style.colorScheme = next ? 'dark' : 'light';

      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        // Private browsing or blocked storage — the toggle still works for
        // this session, it just won't be remembered.
      }

      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
