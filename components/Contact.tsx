// components/Contact.tsx - FINAL GRAND REVEAL
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-container px-8 relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10 w-full"
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-5xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl p-12 border border-gray-200/30 dark:border-slate-600/30 shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 dark:border-slate-600 rounded-xl 
                         bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm
                         focus:ring-4 focus:ring-pink-400/50 outline-none transition-all duration-300 text-lg 
                         text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 dark:border-slate-600 rounded-xl 
                         bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm
                         focus:ring-4 focus:ring-pink-400/50 outline-none transition-all duration-300 text-lg 
                         text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 dark:border-slate-600 rounded-xl 
                         bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm
                         focus:ring-4 focus:ring-pink-400/50 outline-none transition-all duration-300 text-lg 
                         text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300"
              rows={6}
            />
            <motion.button
              type="submit"
              className="w-full px-8 py-4 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl font-bold"
              style={{ backgroundColor: '#F7A8B8' }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: '#EC4899',
                boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
          
          <motion.div 
            className="mt-12 flex justify-center gap-8 text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a href="https://linkedin.com/in/antonin-gabet-42265b183" className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 font-medium">LinkedIn</a>
            <a href="https://github.com/Phaztox" className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 font-medium">GitHub</a>
            <a className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 font-medium">Email : antonin.gabet@efrei.net</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}