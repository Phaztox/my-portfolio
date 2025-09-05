// pages/passions/music.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Music() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen overflow-y-auto transition-all duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-yellow-100'
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
              : 'bg-orange-500 hover:bg-orange-600 text-white'
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-4xl mb-6">
              🎵
            </div>
            <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Music
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              From classical piano to electronic music production
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
              My Musical Journey
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              As an 8-year former musician, music holds an important place in my life, providing inspiration and outlet. 
              My journey began with classical piano training, where I learned the fundamentals of music theory, 
              composition, and the discipline required for mastery. This foundation has evolved into a broader 
              appreciation for the digital side of music, from understanding production techniques to enjoying 
              diverse electronic genres.
            </p>
            
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Musical Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-orange-100/50'}`}>
                <h4 className={`font-semibold mb-3 text-xl ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>Classical Piano</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• 8 years of formal training</li>
                  <li>• Music theory and composition</li>
                  <li>• Classical repertoire performance</li>
                  <li>• Sight-reading proficiency</li>
                </ul>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-yellow-100/50'}`}>
                <h4 className={`font-semibold mb-3 text-xl ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Digital Music Insight</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Familiarity with Digital Audio Workstations (DAWs)</li>
                  <li>• Understanding of sound design and MIDI principles</li>
                  <li>• Appreciation for modern production techniques</li>
                </ul>
              </div>
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Music & Technology
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              The intersection of music and technology profoundly fascinates me. My programming and data background 
              allows me to deeply understand how modern music is crafted. From algorithmic composition to AI-generated 
              melodies, this technical lens lets me appreciate the intricacies of digital sound design and the 
              production process, which ultimately enriches my listening experience and enjoyment of music today.
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Music: A Lifelong Companion
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Beyond expertise and technical appreciation, music has always been a fundamental part of my existence. 
              It's been a constant presence, right from my earliest memories—even before—to listening to my parents' 
              CDs, through my years at the piano, and to discovering countless new genres online, which 
              I still do today. Music is my go-to for focusing during intense study sessions, finding rhythm 
              while programming, unwinding after a long day, or enhancing the immersion of gaming. It's a 
              powerful emotional anchor and a wellspring of inspiration, continually shaping my perspective.
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Musical Influences
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Electronic', 'Classical', 'Hip-Hop', 'Cinematic'].map((genre, i) => (
                <div key={i} className={`p-3 text-center rounded-lg border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-600/50 shadow-lg' 
                    : 'bg-white/90 border-orange-200/60 shadow-md'
                }`}>
                  <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {genre}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
