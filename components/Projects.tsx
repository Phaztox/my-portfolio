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
    tech: ["Python", "KMeans", "PCA"],
    link: "https://github.com/Alexandre-gng/ANSSI_alerts",
    color: '#FFB347'
  },
  { 
    title: "Connect 4 Algorithm", 
    desc: "Advanced algorithm research for optimizing gameplay in Connect 4 using Minimax and Alpha-Beta pruning.",
    tech: ["Python", "Minimax", "Game Theory"],
    link: "https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/Connect-4_FinalVersion.py",
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
          className={`text-responsive-heading font-bold mb-6 md:mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 responsive-grid-gap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative backdrop-blur-lg responsive-card-radius shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
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
                className="responsive-project-height relative"
                style={{ backgroundColor: project.color }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="responsive-icon-size text-white/80"
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
              
              <div className="responsive-card-padding">
                <h3 className={`font-bold text-responsive-card-title mb-3 md:mb-4 transition-colors ${
                  darkMode 
                    ? 'text-white group-hover:text-pink-400' 
                    : 'text-gray-900 group-hover:text-pink-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-responsive-card mb-4 md:mb-6 leading-relaxed opacity-90 ${
                  darkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech, techI) => (
                    <span 
                      key={techI}
                      className={`responsive-badge-padding responsive-badge-text rounded-full ${
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
                  className="inline-flex items-center responsive-button-padding responsive-card-radius text-white font-semibold text-responsive-body shadow-lg hover:shadow-xl transition-all duration-300"
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
