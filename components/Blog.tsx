// components/Blog.tsx - SMOOTH TRANSITIONS
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Blog() {
  const { darkMode } = useTheme();

  return (
    <section 
      id="blog" 
      className="section-container px-6 sm:px-8 relative overflow-hidden"
    >
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Blog
        </motion.h2>
        <div className="space-y-6">
          <motion.article 
            className={`backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode 
                ? 'bg-gray-800/70 border border-gray-700/60' 
                : 'bg-white/80 border border-gray-200/60'
            }`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/blog/the-compressed-truth" className="block group">
              <h3 className={`font-semibold text-xl mb-2 transition-colors duration-200 ${
                darkMode 
                  ? 'text-white group-hover:text-purple-400' 
                  : 'text-gray-900 group-hover:text-purple-600'
              }`}>
                The Compressed Truth: Unpacking My Fascination with Video Codecs & Quality
              </h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                How my hobby for creating cool video edits unexpectedly led me down a rabbit hole into the hidden magic and clever science behind making visuals look amazing without hogging all your storage.
              </p>
            </Link>
          </motion.article>
          <motion.article 
            className={`backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode 
                ? 'bg-gray-800/70 border border-gray-700/60' 
                : 'bg-white/80 border border-gray-200/60'
            }`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Exploring AI Bias in Datasets</h3>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
              A reflection on fairness and ethics in AI.
            </p>
          </motion.article>
          <motion.article 
            className={`backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode 
                ? 'bg-gray-800/70 border border-gray-700/60' 
                : 'bg-white/80 border border-gray-200/60'
            }`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Optimizing Algorithms with Python</h3>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
              Techniques for performance and scalability.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}