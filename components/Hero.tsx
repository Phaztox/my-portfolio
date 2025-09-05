// components/Hero.tsx - SMOOTH SCROLL REVEAL
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="section-container justify-center text-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 md:mb-8 leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Antonin Gabet
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-3xl mb-8 md:mb-12 text-gray-700 dark:text-gray-200 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Informatics Student | Data & AI Enthusiast | Problem Solver
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/CV_Antonin_Lechen_GABET_EN.pdf"
            className="px-6 sm:px-10 py-3 sm:py-4 text-white rounded-xl shadow-xl hover:shadow-2xl text-base sm:text-lg font-semibold transform transition-all duration-300"
            style={{ backgroundColor: '#F7A8B8' }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#EC4899',
              boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
          
          <motion.a
            href="#about"
            className="px-6 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-orange-400 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-orange-400 hover:text-white text-base sm:text-lg font-semibold transform transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#FFB347',
              borderColor: '#FFB347'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Journey
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}