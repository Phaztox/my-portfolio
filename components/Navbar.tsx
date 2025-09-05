// components/Navbar.tsx - WORKING TOGGLE
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize theme
  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
      
      setDarkMode(shouldBeDark);
      updateTheme(shouldBeDark);
    }
  }, [mounted]);

  const updateTheme = (isDark: boolean) => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    updateTheme(newDarkMode);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    if (mounted) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mounted]);

  if (!mounted) {
    return <div className="h-20"></div>; // Placeholder to prevent layout shift
  }

  const links = [
    { href: "#about", label: "About Me" },
    { href: "#resume", label: "Studies" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#passions", label: "Passions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/20'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : darkMode
            ? 'bg-gray-900/10 backdrop-blur-sm'
            : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <motion.a 
        href="#hero" 
        className={`font-bold text-2xl transition-colors ${
          darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-pink-500'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        AG
      </motion.a>
      
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={`relative group font-medium transition-colors ${
              darkMode ? 'text-gray-200 hover:text-purple-300' : 'text-gray-700 hover:text-pink-500'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {link.label}
            <span 
              className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full ${
                darkMode ? 'bg-purple-300' : 'bg-pink-500'
              }`}
            ></span>
          </motion.a>
        ))}
        
        <motion.button
          onClick={toggleTheme}
          className={`ml-4 p-2 border rounded-full text-lg transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-600 hover:bg-gray-700 text-yellow-300'
              : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-blue-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          onClick={toggleTheme}
          className={`p-2 border rounded-full text-lg transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-600 hover:bg-gray-700 text-yellow-300'
              : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-blue-600'
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
}