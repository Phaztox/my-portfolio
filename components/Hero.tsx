// components/Hero.tsx - SMOOTH SCROLL REVEAL
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import CVDownload from "./CVDownload";

interface HeroProps {
  scrollToSection?: (index: number) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { darkMode } = useTheme();

  return (
    <section id="hero" className="section-container justify-center text-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1 
          className={`text-responsive-hero font-extrabold mb-6 md:mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Antonin Gabet
        </motion.h1>
        
        <motion.p 
          className={`text-responsive-subtitle mb-8 md:mb-12 responsive-section-padding ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Informatics Student | Data & AI Enthusiast | Problem Solver
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row responsive-button-gap justify-center responsive-section-padding"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <CVDownload />
          
          <motion.button
            onClick={() => scrollToSection && scrollToSection(1)} // About section is index 1
            className={`responsive-button-padding bg-transparent border-2 border-orange-400 responsive-card-radius hover:bg-orange-400 hover:text-white text-responsive-body font-semibold transform transition-all duration-300 cursor-pointer ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#FFB347',
              borderColor: '#FFB347'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}