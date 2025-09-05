// components/Navbar.tsx - WITH PASSIONS DROPDOWN AND MOBILE RESPONSIVE
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPassionsOpen, setIsPassionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const passionsRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Close passions dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (passionsRef.current && !passionsRef.current.contains(event.target as Node)) {
        setIsPassionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="h-20"></div>; // Placeholder to prevent layout shift
  }

  const links = [
    { href: "#about", label: "About Me" },
    { href: "#resume", label: "Studies" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
  ];

  const passionPages = [
    { href: "/passions/gaming", label: "Gaming", icon: "🎮" },
    { href: "/passions/music", label: "Music", icon: "🎵" },
    { href: "/passions/asian-culture", label: "Asian Culture", icon: "🏮" },
    { href: "/passions/stats-and-logic", label: "Stats & Logic", icon: "📊" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
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
        className={`font-bold text-xl sm:text-2xl transition-colors ${
          darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-pink-500'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        AG
      </motion.a>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
        {links.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={`relative group font-medium transition-colors text-sm xl:text-base ${
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
        
        {/* Passions Dropdown */}
        <div className="relative" ref={passionsRef}>
          <motion.button
            onClick={() => setIsPassionsOpen(!isPassionsOpen)}
            onMouseEnter={() => setIsPassionsOpen(true)}
            className={`relative group font-medium transition-colors text-sm xl:text-base flex items-center gap-1 ${
              darkMode ? 'text-gray-200 hover:text-purple-300' : 'text-gray-700 hover:text-pink-500'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Passions
            <motion.span
              animate={{ rotate: isPassionsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs"
            >
              ▼
            </motion.span>
            <span 
              className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full ${
                darkMode ? 'bg-purple-300' : 'bg-pink-500'
              }`}
            ></span>
          </motion.button>

          <AnimatePresence>
            {isPassionsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 mt-2 w-48 rounded-xl shadow-xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/95 border-gray-700/50 backdrop-blur-md' 
                    : 'bg-white/95 border-gray-200/50 backdrop-blur-md'
                }`}
                onMouseLeave={() => setIsPassionsOpen(false)}
              >
                {passionPages.map((passion, index) => (
                  <Link
                    key={passion.href}
                    href={passion.href}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                      darkMode 
                        ? 'hover:bg-gray-700/50 text-gray-200 hover:text-purple-300' 
                        : 'hover:bg-gray-100/50 text-gray-700 hover:text-pink-500'
                    }`}
                    onClick={() => setIsPassionsOpen(false)}
                  >
                    <span className="text-lg">{passion.icon}</span>
                    <span className="font-medium text-sm">{passion.label}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.button
          onClick={toggleTheme}
          className={`ml-2 xl:ml-4 p-2 border rounded-full text-lg transition-colors ${
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

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center gap-2">
        <motion.button
          onClick={toggleTheme}
          className={`p-2 border rounded-full text-lg transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-600 hover:bg-gray-700 text-yellow-300'
              : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-blue-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>
        
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 border rounded-full transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-600 hover:bg-gray-700 text-gray-200'
              : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-700'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-lg">☰</span>
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 right-0 mt-2 mx-4 rounded-xl shadow-xl border lg:hidden ${
              darkMode 
                ? 'bg-gray-800/95 border-gray-700/50 backdrop-blur-md' 
                : 'bg-white/95 border-gray-200/50 backdrop-blur-md'
            }`}
          >
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 transition-colors ${
                  darkMode 
                    ? 'hover:bg-gray-700/50 text-gray-200 hover:text-purple-300' 
                    : 'hover:bg-gray-100/50 text-gray-700 hover:text-pink-500'
                } ${index === 0 ? 'rounded-t-xl' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Passions Dropdown */}
            <div className={`border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <button
                onClick={() => setIsPassionsOpen(!isPassionsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                  darkMode 
                    ? 'hover:bg-gray-700/50 text-gray-200 hover:text-purple-300' 
                    : 'hover:bg-gray-100/50 text-gray-700 hover:text-pink-500'
                }`}
              >
                <span className="font-medium">Passions</span>
                <motion.span
                  animate={{ rotate: isPassionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                >
                  ▼
                </motion.span>
              </button>
              
              <AnimatePresence>
                {isPassionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {passionPages.map((passion, index) => (
                      <Link
                        key={passion.href}
                        href={passion.href}
                        className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                          darkMode 
                            ? 'hover:bg-gray-700/50 text-gray-200 hover:text-purple-300' 
                            : 'hover:bg-gray-100/50 text-gray-700 hover:text-pink-500'
                        } ${index === passionPages.length - 1 ? 'rounded-b-xl' : ''}`}
                        onClick={() => {
                          setIsPassionsOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="text-lg">{passion.icon}</span>
                        <span className="font-medium text-sm">{passion.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}