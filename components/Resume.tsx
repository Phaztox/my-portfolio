// components/Resume.tsx - CASCADING TIMELINE
import { motion } from "framer-motion";

const timeline = [
  { year: "2023 - Present", text: "Engineering Student in Data & AI - EFREI PARIS" },
  { year: "2022 - 2023", text: "Student – CPGE : MPSI, Lycée J-B Corot" },
  { year: "2022", text: "A-Levels – Lycée Léonard de Vinci" },
];

export default function Resume() {
  return (
    <section id="resume" className="section-container px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <h2 className="text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          My Journey
        </h2>
        
        <div className="relative border-l-4 border-pink-400 dark:border-purple-400 pl-12 space-y-16">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div
                className="absolute -left-6 top-2 w-8 h-8 rounded-full border-4 border-white dark:border-slate-800"
                style={{ backgroundColor: '#F7A8B8' }}
              />
              
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-4">
                  <span 
                    className="text-3xl font-bold px-4 py-2 rounded-xl text-white"
                    style={{ backgroundColor: '#CBB3EE' }}
                  >
                    {item.year}
                  </span>
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
