// pages/passions/gaming.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Gaming() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen overflow-y-auto transition-all duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-50 to-purple-100'
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
          <Link href="/#passions" className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            darkMode 
              ? 'bg-purple-600 hover:bg-purple-700 text-white' 
              : 'bg-pink-500 hover:bg-pink-600 text-white'
          }`}>
            ← Back to Passions
          </Link>
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
              Gaming is more than entertainment for me—it's about optimization, strategy, and pushing boundaries. 
              I strive to optimize stats and search for the best outputs that we can possibly achieve. Whether it's 
              min-maxing character builds, developing efficient strategies, or mastering complex mechanics, I approach 
              gaming with the same analytical mindset I bring to programming.
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
