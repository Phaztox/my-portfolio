// components/Passions.tsx - SEAMLESS FLOW WITH LINKS
import { motion } from "framer-motion";
import Link from "next/link";

const passions = [
  { 
    title: "Gaming", 
    desc: "Exploring immersive worlds and strategy. I strive to optimize stats and search for the best outputs that we can possibly achieve.", 
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
  return (
    <section 
      id="passions" 
      className="section-container px-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          #FEF3C7 0%, 
          #F3E8FF 35%, 
          #FDF2F8 70%,
          #FEF3C7 100%)`
      }}
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-0 dark:opacity-96 transition-opacity duration-700"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-32 h-32 rounded-full blur-xl"
          style={{ backgroundColor: '#FFB347' }}
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-xl"
          style={{ backgroundColor: '#CBB3EE' }}
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
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
                className="group p-6 bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg 
                           hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-slate-600/30 
                           cursor-pointer transform-gpu"
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
                <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {passion.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-200 mb-4">
                  {passion.desc}
                </p>
                <div className="flex items-center text-sm font-medium group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
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