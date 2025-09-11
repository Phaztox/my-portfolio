// components/CVDownload.tsx - CV Language Selection
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "@/contexts/ThemeContext";
import Image from 'next/image';

interface CVDownloadProps {
  className?: string;
}

export default function CVDownload({ className }: CVDownloadProps) {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const cvLinks = {
    english: "https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/CV_Antonin_Lechen_GABET_EN.pdf",
    french: "https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/CV_Antonin_Lechen_GABET_FR.pdf"
  };

  const handleDownload = (language: 'english' | 'french') => {
    window.open(cvLinks[language], '_blank');
    setIsOpen(false);
  };

  return (
    <div className="relative w-auto">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`responsive-button-padding text-white responsive-card-radius shadow-xl hover:shadow-2xl text-responsive-body font-semibold transform transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
        style={{ backgroundColor: '#F7A8B8' }}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: '#EC4899',
          boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Download CV</span>
        <motion.span
          className="text-sm opacity-80"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 responsive-card-radius shadow-2xl border z-50 overflow-hidden backdrop-blur-xl ${
                darkMode 
                  ? 'bg-gray-800/90 border-gray-700/50' 
                  : 'bg-white/90 border-gray-200/50'
              }`}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.button
                onClick={() => handleDownload('english')}
                className={`w-full px-5 py-4 text-left flex items-center gap-4 transition-all duration-300 group ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:text-pink-300' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-pink-100/80 hover:to-purple-100/80 hover:text-pink-700'
                }`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/Flag-United-Emoji.svg"
                    alt="UK Flag"
                    width={32}
                    height={32}
                    className="rounded-sm"
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="font-bold text-responsive-body">English</div>
                  <div className={`text-sm transition-colors ${
                    darkMode ? 'text-gray-400 group-hover:text-pink-200' : 'text-gray-500 group-hover:text-pink-600'
                  }`}>
                    English version
                  </div>
                </div>
                <motion.span 
                  className={`text-sm transition-colors ${
                    darkMode ? 'text-gray-500 group-hover:text-pink-400' : 'text-gray-400 group-hover:text-pink-600'
                  }`}
                  whileHover={{ x: 3 }}
                >
                    →
                </motion.span>
              </motion.button>

              {/* Separator */}
              <div className={`h-px mx-4 ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'
              }`} />

              <motion.button
                onClick={() => handleDownload('french')}
                className={`w-full px-5 py-4 text-left flex items-center gap-4 transition-all duration-300 group ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:text-pink-300' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-pink-100/80 hover:to-purple-100/80 hover:text-pink-700'
                }`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/Flag-France-Emoji.svg"
                    alt="France Flag"
                    width={32}
                    height={32}
                    className="rounded-sm"
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="font-bold text-responsive-body">Français</div>
                  <div className={`text-sm transition-colors ${
                    darkMode ? 'text-gray-400 group-hover:text-pink-200' : 'text-gray-500 group-hover:text-pink-600'
                  }`}>
                    French Version
                  </div>
                </div>
                <motion.span 
                  className={`text-sm transition-colors ${
                    darkMode ? 'text-gray-500 group-hover:text-pink-400' : 'text-gray-400 group-hover:text-pink-600'
                  }`}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
