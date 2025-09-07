// components/Passions.tsx - SEAMLESS FLOW WITH LINKS
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

const passions = [
  { 
    title: "Gaming", 
    desc: "Gaming is my ultimate arena for min-maxing builds and dominating the meta with a programming-driven mindset. The thrill is flawlessly executing meticulously engineered strategies.", 
    icon: "🎮", 
    color: "#F7A8B8",
    href: "/passions/gaming"
  },
  { 
    title: "Music", 
    desc: "From classical piano to electronic music production. As an 8-year former musician, music holds an important place in my life, providing inspiration and outlet.", 
    icon: "🎵", 
    color: "#FFB347",
    href: "/passions/music"
  },
  { 
    title: "Asian Culture", 
    desc: "Japanese and Chinese traditions & media. I am particularly attracted by how they blend history with modernity.", 
    icon: "🏮", 
    color: "#CBB3EE",
    href: "/passions/asian-culture"
  },
  { 
    title: "Stats & Logic", 
    desc: "Mathematics, optimization, and AI models. I enjoy tackling complex problems and finding efficient solutions.", 
    icon: "📊", 
    color: "#F7A8B8",
    href: "/passions/stats-and-logic"
  },
];

export default function Passions() {
  const { darkMode } = useTheme();

  return (
    <section 
      id="passions" 
      className="section-container px-8 relative overflow-hidden"
    >
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2 
          className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Passions
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {passions.map((passion, i) => (
            <Link key={i} href={passion.href}>
              <motion.div
                className={`group p-6 backdrop-blur-sm rounded-xl shadow-lg 
                           hover:shadow-xl transition-all duration-300 cursor-pointer transform-gpu ${
                  darkMode 
                    ? 'bg-gray-800/70 border border-gray-700/60 hover:bg-gray-800/80' 
                    : 'bg-white/80 border border-gray-200/60 hover:bg-white/90'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white text-xl"
                  style={{ backgroundColor: passion.color }}
                  whileHover={{ 
                    rotate: 15,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {passion.icon}
                </motion.div>
                <h3 className={`font-semibold text-xl mb-2 transition-colors ${
                  darkMode 
                    ? 'text-white group-hover:text-pink-400' 
                    : 'text-gray-900 group-hover:text-pink-600'
                }`}>
                  {passion.title}
                </h3>
                <p className={`text-base mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                  {passion.desc}
                </p>
                <div className={`flex items-center text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'group-hover:text-pink-400' 
                    : 'group-hover:text-pink-600'
                }`}>
                  <span>Explore more</span>
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}