// pages/passions/gaming.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Gaming() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen overflow-y-auto transition-all duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-pink-950/20 to-purple-950/20' : 'bg-gradient-to-br from-pink-50 to-purple-100'
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-4xl mb-6">
              🎮
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Gaming
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Exploring immersive worlds and strategy
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
              My Gaming Philosophy
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Gaming, for me, is far more than just entertainment; it's a dynamic playground for optimization, 
              strategic thinking, and continually pushing the boundaries of what's possible. I'm always driven 
              by the quest to fine-tune stats and uncover the most effective outputs, striving for peak performance. 
              I vividly recall the immense satisfaction of meticulously crafting a strategy, envisioning its every step, 
              and then seeing it flawlessly execute in practice – that perfect alignment between theory and outcome is 
              truly the best feeling. Whether it's min-maxing character builds, developing highly efficient game plans, 
              or diving deep to master complex mechanics, I approach gaming with the same rigorous, analytical mindset 
              I apply to programming or scientific research. Pushing those boundaries means I'm often experimenting with unconventional 
              strategies to outsmart and surprise opponents, relentlessly optimizing an aspect to its deepest potential 
              (even if it implies a calculated sacrifice elsewhere), or simply aiming for improbable outcomes and 
              celebrating the hard-won success against the odds. This dedication to dissecting systems and achieving 
              mastery in games directly reflects my approach to problem-solving in data and AI.
            </p>
            
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Favorite Genres
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>RPGs</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Character progression, stats and skills optimization 
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>Strategy Games</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Complex decision-making and long-term planning
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>Competitive Games</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Skill development, performance and strategy analysis
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>Simulation Games</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Efficiency maximization and operations automation
                </p>
              </div>
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Gaming Data & Analytics
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My passion for gaming isn't just about playing; it's a rich playground for data analysis and optimization. 
              I love diving into the numbers to uncover hidden efficiencies and predict outcomes. Whether it's dissecting 
              character stats to engineer the most effective builds, analyzing resource flows for optimal long-term 
              strategies in simulation games, or tracking competitive performance metrics, I find myself constantly 
              looking for the data-driven edge. This hands-on approach to understanding game mechanics through numbers 
              directly feeds into my interest in real-world data science, showing how raw data can unlock powerful 
              insights and drive continuous improvement.
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              AI in Gaming: Beyond the NPC
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              As someone fascinated by AI, I'm constantly observing how it's revolutionizing gaming far beyond 
              traditional, predictable non-player characters. I find it incredible how AI now creates adaptive 
              challenges that learn from player behavior, generates vast and detailed worlds through procedural 
              content, or even enhances narrative by responding dynamically to player choices. My curiosity extends 
              to how AI is also used behind the scenes to test games, identify exploits, and fine-tune game mechanics 
              for optimal balance. This intersection of artificial intelligence and interactive entertainment is a 
              field I find incredibly exciting, bridging my love for gaming with my studies in AI.
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Gaming & Programming Connection
            </h3>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              The analytical skills I've developed through gaming directly translate to my programming work. 
              Problem-solving, optimization thinking, and systematic approach to challenges are skills that 
              benefit both domains. Gaming has taught me to think in terms of systems, efficiency, and 
              continuous improvement—principles that are fundamental to good software development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
