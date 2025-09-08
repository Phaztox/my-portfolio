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
    title: "CPGE : MPSI, Lycée J - B Corot",
    description: "Intensive preparatory classes focusing on Mathematics, Physics, and Engineering Sciences. Developed strong analytical thinking, problem-solving skills, and mathematical rigor essential for engineering studies."
  },
  { 
    year: "2022", 
    title: "A - Levels - Lycée Léonard de Vinci",
    description: "Completed French Baccalauréat with specialization in Mathematics and Physics. Achieved strong academic foundation in sciences and developed passion for data analysis and logical reasoning."
  },
];

export default function Resume() {
  const { darkMode } = useTheme();

  return (
    <section id="resume" className="section-container px-6 sm:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <h2 className={`text-responsive-heading font-bold mb-6 md:mb-8 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          My Studies
        </h2>
        
        <div className={`relative border-l-4 responsive-timeline-padding ${
          darkMode ? 'border-purple-400' : 'border-pink-400'
        }`}>
          {timeline.map((item, i) => (
            <div
              key={i}
              className="relative group resume-item-spacing"
            >
              <div
                className={`absolute rounded-full border-4 ${
                  darkMode ? 'border-gray-800' : 'border-white'
                }`}
                style={{ 
                  backgroundColor: '#F7A8B8',
                  left: `clamp(-1.25rem, min(-1.5vw, -2vh), -1.5rem)`,
                  top: `clamp(0.25rem, min(0.5vw, 0.75vh), 0.5rem)`,
                  width: `clamp(1.5rem, min(2vw, 3vh), 2rem)`,
                  height: `clamp(1.5rem, min(2vw, 3vh), 2rem)`
                }}
              />
              
              <div className={`backdrop-blur-lg responsive-card-radius resume-card-padding shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative ${
                darkMode 
                  ? 'bg-gray-800/70 border border-gray-700/60' 
                  : 'bg-white/80 border border-gray-200/60'
              }`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className={`text-responsive-card-title font-bold leading-tight flex-1 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <span 
                    className="responsive-badge-text font-bold responsive-badge-padding responsive-card-radius text-white shrink-0 w-fit"
                    style={{ backgroundColor: '#CBB3EE' }}
                  >
                    {item.year}
                  </span>
                </div>
                <p className={`text-responsive-card leading-relaxed mt-3 ${
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
