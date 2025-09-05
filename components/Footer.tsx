// components/Footer.tsx - ALWAYS VISIBLE FOOTER WITH CONTACTS
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-40 py-4 px-6 backdrop-blur-md border-t shadow-lg transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900/95 border-gray-700/50' 
        : 'bg-white/95 border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Contact Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <motion.a 
              href="https://linkedin.com/in/antonin-gabet-42265b183" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 hover:text-blue-600 transition-all duration-300 text-sm md:text-base group ${
                darkMode 
                  ? 'text-gray-200 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 relative">
                <Image
                  src="/LinkedIn_icon.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/Phaztox" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 hover:text-purple-600 transition-all duration-300 text-sm md:text-base group ${
                darkMode 
                  ? 'text-gray-200 hover:text-purple-400' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 relative">
                <Image
                  src={darkMode ? "/github-mark-white.svg" : "/github-mark.svg"}
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain group-hover:opacity-80 transition-all duration-300"
                />
              </div>
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>
            
            <motion.a 
              href="mailto:antonin.gabet@efrei.net"
              className={`flex items-center gap-2 hover:text-pink-600 transition-all duration-300 text-sm md:text-base group ${
                darkMode 
                  ? 'text-gray-200 hover:text-pink-400' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-5 h-5 md:w-6 md:h-6 relative transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-200 group-hover:text-pink-400' 
                  : 'text-gray-700 group-hover:text-pink-600'
              }`}>
                <Image
                  src="/email-fill.svg"
                  alt="Email"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: darkMode 
                      ? 'brightness(0) saturate(100%) invert(85%) sepia(8%) saturate(423%) hue-rotate(173deg) brightness(96%) contrast(93%)' 
                      : 'brightness(0) saturate(100%) invert(32%) sepia(6%) saturate(606%) hue-rotate(173deg) brightness(91%) contrast(87%)'
                  }}
                />
              </div>
              <span className="hidden sm:inline">Email</span>
            </motion.a>
          </div>
          
          {/* Copyright */}
          <div className={`text-center text-xs md:text-sm transition-all duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p>© 2025 Antonin Gabet | Built with <span className={darkMode ? 'text-pink-400' : 'text-pink-500'}>❤️</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}