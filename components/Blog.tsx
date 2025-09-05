// components/Blog.tsx - SMOOTH TRANSITIONS
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section 
      id="blog" 
      className="section-container px-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          #F3E8FF 0%, 
          #FDF2F8 35%, 
          #FEF3C7 70%,
          #F3E8FF 100%)`
      }}
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-0 dark:opacity-96 transition-opacity duration-700"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Blog
        </motion.h2>
        <div className="space-y-6">
          <motion.article 
            className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">Exploring AI Bias in Datasets</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
              A reflection on fairness and ethics in AI.
            </p>
          </motion.article>
          <motion.article 
            className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">Optimizing Algorithms with Python</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
              Techniques for performance and scalability.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}