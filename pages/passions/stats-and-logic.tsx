// pages/passions/stats-logic.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

export default function StatsLogic() {
  const { darkMode, toggleTheme } = useTheme();

  // Hide scrollbar on desktop only
  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    if (isDesktop) {
      document.body.setAttribute('data-hide-scrollbar', 'true');
      document.documentElement.setAttribute('data-hide-scrollbar', 'true');
    }
    
    // For mobile, ensure the scrollbar works by triggering a scroll event
    if (isMobile) {
      setTimeout(() => {
        // Trigger scroll event to initialize mobile scrollbar
        const scrollableContainer = document.querySelector('.min-h-screen.overflow-y-auto');
        if (scrollableContainer) {
          const event = new Event('scroll');
          scrollableContainer.dispatchEvent(event);
        }
      }, 200);
    }
    
    return () => {
      document.body.removeAttribute('data-hide-scrollbar');
      document.documentElement.removeAttribute('data-hide-scrollbar');
    };
  }, []);

  return (
    <div className={`min-h-screen overflow-y-auto transition-all duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-pink-950/20 to-red-950/20' : 'bg-gradient-to-br from-pink-50 to-red-100'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full px-6 py-4 z-50 backdrop-blur-md transition-all duration-300 ${
        darkMode ? 'bg-gray-900/95 border-b border-gray-700/50' : 'bg-white/95 border-b border-gray-200/50'
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className={`font-bold text-2xl transition-colors ${
            darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-pink-500'
          }`}>
            AG
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Back to Passions Link */}
            <Link href="/#passions" className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-pink-500 hover:bg-pink-600 text-white'
            }`}>
              ← Back to Passions
            </Link>
          </div>
        </div>
      </nav>

      {/* Scrollable Content */}
      <div className="pt-24 px-6 pb-20 max-h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-4xl mb-6">
              📊
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Stats & Logic
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Mathematics, optimization, and AI models
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-2xl p-8 ${
              darkMode ? 'bg-gray-800/60' : 'bg-white/70'
            } backdrop-blur-sm shadow-xl`}
          >
            <h2 className={`text-3xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Analytical Thinking
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I genuinely enjoy tackling complex problems and finding efficient solutions through mathematical 
              analysis and logical reasoning. My gaming background, for instance, has honed my probability skills, 
              allowing me to grasp and solve academic projects with a clear, strategic mindset. Beyond that, 
              my strong logical thinking helps me not only master mathematical subjects but also explain 
              them effectively to my classmates. This passion extends to modeling real-world phenomena, like 
              creating models of online opinions to understand digital vs. real-world perspectives, or comparing 
              behaviors across different regions. The beauty of mathematics and logic, for me, lies in its 
              ability to unravel complex systems and provide insights that lead to better decision-making.
            </p>
            
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Areas of Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-pink-100/50'}`}>
                <h4 className={`font-semibold mb-3 text-xl ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>Statistical Analysis</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Descriptive and inferential statistics</li>
                  <li>• Probability distributions</li>
                  <li>• Hypothesis testing</li>
                  <li>• Regression analysis</li>
                </ul>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-red-100/50'}`}>
                <h4 className={`font-semibold mb-3 text-xl ${darkMode ? 'text-red-300' : 'text-red-600'}`}>Optimization</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Algorithm complexity analysis</li>
                  <li>• Linear and non-linear optimization</li>
                  <li>• Performance metrics and KPIs</li>
                  <li>• Resource allocation strategies</li>
                </ul>
              </div>
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Machine Learning & AI
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              The intersection of statistics and artificial intelligence deeply fascinates me. What I find most 
              impressive and exploitable is ML's ability to uncover and understand patterns that would remain 
              invisible to human perception. While I acknowledge the ethical considerations, especially in 
              sensitive domains like biology, this capability remains utterly captivating. The sheer potential 
              for automation and accelerating complex work is a significant advantage. But what truly fuels 
              my fascination with AI is the constant discovery - every day, week, and month brings new possibilities 
              and usages to imagine. This seemingly infinite source of potential is precisely why I love this field.
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Practical Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-pink-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>
                  Gaming Optimization
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Min-maxing strategies and efficiency calculations
                </p>
              </div>
              <div className={`p-4 rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-red-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                  Code Performance
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Algorithm analysis and optimization techniques
                </p>
              </div>
              <div className={`p-4 rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-purple-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  Data Insights
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Pattern recognition and predictive modeling
                </p>
              </div>
              <div className={`p-4 rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-indigo-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  Decision Making
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Evidence-based analysis and risk assessment
                </p>
              </div>
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Personal Analytics & Optimization
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My affinity for stats and logic isn't confined to academic projects; it spills over into my daily life, 
              often powered by Excel. I frequently delve into gaming-related spreadsheets, meticulously calculating 
              the optimal output for character teams given specific inputs, or efficiently managing in-game resources. 
              This methodical approach also extends to practical applications like tracking personal expenses, 
              comparing project budgets, or even creating systems to monitor my grades and identify the most impactful 
              exams based on coefficients. It's about bringing structure and insight to various aspects of life, 
              turning data into actionable understanding.
            </p>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gradient-to-r from-pink-100 to-red-100'} border-l-4 ${darkMode ? 'border-pink-400' : 'border-pink-500'}`}>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-700'}`}>
                "Mathematics is the language with which God has written the universe." - Galileo Galilei
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I think this Galileo quote beautifully captures the profoundness of mathematics and 
                its role in understanding complex systems: promoting decisions based on evidence, 
                measurements, and logical analysis rather than intuition alone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
