// components/About.tsx - SLIDE FROM BOTTOM
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-container px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200/30 dark:border-slate-600/30 shadow-2xl">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-100">
            I'm Antonin Gabet, an informatics student passionate about Data &
            Artificial Intelligence. I love exploring optimization, statistics,
            logic, and new technologies. Outside of studies, I enjoy music,
            gaming, and Asian culture. My goal is to leverage AI and data science
            to solve real-world problems and create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}