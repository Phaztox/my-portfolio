// components/Resume.tsx - CASCADING TIMELINE
import { useTheme } from "@/contexts/ThemeContext";

const timeline = [
  { 
    year: "2023 - Present", 
    title: "Engineering Student in Data & AI - EFREI PARIS",
    description: "Specialized in Data Science and Artificial Intelligence with focus on machine learning algorithms, statistical analysis, and programming. Currently developing skills in Python, Probability, and advanced mathematics for AI applications."
  },
  { 
    year: "2022 - 2023", 
    title: "CPGE : MPSI, Lycée J-B Corot",
    description: "Intensive preparatory classes focusing on Mathematics, Physics, and Engineering Sciences. Developed strong analytical thinking, problem-solving skills, and mathematical rigor essential for engineering studies."
  },
  { 
    year: "2022", 
    title: "A-Levels – Lycée Léonard de Vinci",
    description: "Completed French Baccalauréat with specialization in Mathematics and Physics. Achieved strong academic foundation in sciences and developed passion for data analysis and logical reasoning."
  },
];

export default function Resume() {
  const { darkMode } = useTheme();

  return (
    <section id="resume" className="section-container px-6 sm:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          My Studies
        </h2>
        
        <div className={`relative border-l-4 pl-8 sm:pl-12 space-y-12 sm:space-y-16 ${
          darkMode ? 'border-purple-400' : 'border-pink-400'
        }`}>
          {timeline.map((item, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div
                className={`absolute -left-5 sm:-left-6 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 ${
                  darkMode ? 'border-gray-800' : 'border-white'
                }`}
                style={{ backgroundColor: '#F7A8B8' }}
              />
              
              <div className={`backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative ${
                darkMode 
                  ? 'bg-gray-800/70 border border-gray-700/60' 
                  : 'bg-white/80 border border-gray-200/60'
              }`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                  <h3 className={`text-lg sm:text-xl font-bold leading-tight flex-1 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <span 
                    className="text-sm sm:text-base font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-white shrink-0 w-fit"
                    style={{ backgroundColor: '#CBB3EE' }}
                  >
                    {item.year}
                  </span>
                </div>
                <p className={`leading-relaxed mt-4 sm:mt-8 ${
                  darkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
