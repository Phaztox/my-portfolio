// pages/passions/asian-culture.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function AsianCulture() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen overflow-y-auto transition-all duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-indigo-100'
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
              : 'bg-purple-500 hover:bg-purple-600 text-white'
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-4xl mb-6">
              🏮
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Asian Culture
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Japanese and Chinese traditions & media
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-2xl p-8 mb-8 ${
              darkMode ? 'bg-gray-800/60' : 'bg-white/70'
            } backdrop-blur-sm shadow-xl`}
          >
            <h2 className={`text-3xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Cultural Fascination
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I’ve always been fascinated by the way Asian cultures, especially in Japan and China, 
              manage to blend history and modernity so seamlessly. I love how centuries-old traditions coexist 
              with some of the most advanced technologies in the world, creating a balance that shapes 
              art, philosophy, and everyday life in a really unique way. On a personal level, 
              I’m drawn to many aspects of this culture — from anime, manga, and music to the more recent internet culture 
              that has grown so quickly in Asia. Being half Chinese myself, with a mother from China and a father from France, 
              I feel connected to both worlds, and I really enjoy noticing the different perspectives on technology 
              and society that Asian cultures bring compared to the European vision. 
              It’s something that inspires me a lot, both personally and in the way I think about innovation.
            </p>
            
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Areas of Interest
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-purple-100/50'}`}>
                <h4 className={`font-semibold mb-3 text-xl ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Traditional Arts</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• History and philosophy, they never forget their roots</li>
                  <li>• Architecture and nature (Temples, Gardens, ...)</li>
                  <li>• Mentality and mindset of the population</li>
                  <li>• Tradition in general (Clothes, Food, Festivals, ...)</li>
                </ul>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-indigo-100/50'}`}>
                <h4 className={`font-semibold mb-3 text-xl ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>Modern Media</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Anime/manga consumption and production </li>
                  <li>• Asian game designs, linked to Traditional aspects</li>
                  <li>• Digital art and music style, internet culture</li>
                  <li>• Recent technology progress (AI, VR, ...)</li>
                </ul>
              </div>
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Philosophy & Technology
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              What strikes me most in Asian cultures is how philosophy and technology are often seen as connected 
              rather than separate. Ideas like harmony, balance, and the Japanese principle of kaizen — continuous 
              improvement through small, steady steps — really resonate with the way I think about both software 
              development and personal growth. This mindset of blending values with innovation feels unique 
              compared to other approaches, and I find that truly inspiring.
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Cultural Principles I Admire
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 text-center rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-purple-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  仁 (Rén)
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Humaneness, compassion, empathy
                </p>
              </div>
              <div className={`p-4 text-center rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-indigo-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  改善 (Kaizen)
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Continuous improvement, steady progress
                </p>
              </div>
              <div className={`p-4 text-center rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                  : 'bg-white/90 border-pink-200/60 shadow-md'
              }`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>
                  無為 (Wú wéi)
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Effortless action, natural flow
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
