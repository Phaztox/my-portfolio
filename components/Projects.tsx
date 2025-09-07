// components/Projects.tsx - STAGGERED GRID REVEAL
import { motion, easeOut } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const projects = [
  { 
    title: "AI Trash Bin Detector", 
    desc: "Machine learning model detecting trash bin filling from pictures to reduce appearance of wild dumps.",
    tech: ["Python", "OpenCV", "Pillow"],
    link: "https://github.com/Demonta0109/Projet-MasterCamp/tree/main",
    color: '#F7A8B8'
  },
  { 
    title: "ANSSI Alerts Analysis", 
    desc: "Automated ANSSI vulnerability analysis: CVE extraction, enrichment (MITRE/FIRST), ML insights, critical email alerts.",
    tech: ["Python", "KMeans", "Classification"],
    link: "https://github.com/Alexandre-gng/ANSSI_alerts",
    color: '#FFB347'
  },
  { 
    title: "Connect 4 Algorithm", 
    desc: "Advanced algorithm research for optimizing gameplay in Connect 4 using Minimax and Alpha-Beta pruning.",
    tech: ["Python", "Minimax", "Game Theory"],
    color: '#CBB3EE'
  },
];

export default function Projects() {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section id="projects" className="section-container px-4 sm:px-8 relative">
      <motion.div 
        className="max-w-7xl mx-auto relative z-10 w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <motion.h2 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                darkMode 
                  ? 'bg-gray-800/70 border border-gray-700/60' 
                  : 'bg-white/80 border border-gray-200/60'
              }`}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="h-24 sm:h-28 md:h-32 relative"
                style={{ backgroundColor: project.color }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-3xl sm:text-4xl md:text-5xl text-white/80"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.5 }
                    }}
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className={`font-bold text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 transition-colors ${
                  darkMode 
                    ? 'text-white group-hover:text-pink-400' 
                    : 'text-gray-900 group-hover:text-pink-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech, techI) => (
                    <span 
                      key={techI}
                      className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
