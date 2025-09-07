// pages/blog/the-compressed-truth.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

export default function TheCompressedTruth() {
  const { darkMode, toggleTheme } = useTheme();

  // Ensure scrolling is enabled on this page and hide scrollbar on desktop only
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Hide scrollbar on desktop with more aggressive targeting
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    if (isDesktop) {
      document.body.setAttribute('data-hide-scrollbar', 'true');
      document.documentElement.setAttribute('data-hide-scrollbar', 'true');
      
      // Add additional inline styles for desktop scrollbar hiding
      document.documentElement.style.scrollbarWidth = 'none';
      (document.documentElement.style as any).msOverflowStyle = 'none';
      document.body.style.scrollbarWidth = 'none';
      (document.body.style as any).msOverflowStyle = 'none';
      
      // Add webkit scrollbar hiding
      const style = document.createElement('style');
      style.textContent = `
        html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Debug: Check device type
    console.log('Blog page - Is mobile device:', isMobile);
    console.log('Blog page - Is desktop device:', isDesktop);
    console.log('Blog page - Dark mode:', darkMode);
    console.log('Blog page - Should have colored scrollbar on mobile:', isMobile);
    
    return () => {
      // Cleanup when leaving the page
      document.body.removeAttribute('data-hide-scrollbar');
      document.documentElement.removeAttribute('data-hide-scrollbar');
      document.documentElement.style.scrollbarWidth = '';
      (document.documentElement.style as any).msOverflowStyle = '';
      document.body.style.scrollbarWidth = '';
      (document.body.style as any).msOverflowStyle = '';
      console.log('Blog page: Cleanup');
    };
  }, [darkMode]);

  return (
    <div className={`min-h-screen overflow-y-auto transition-all duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-950/20 to-indigo-950/20' : 'bg-gradient-to-br from-purple-50 to-indigo-100'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full px-6 py-4 z-50 backdrop-blur-md transition-all duration-300 ${
        darkMode ? 'bg-gray-900/95 border-b border-gray-700/50' : 'bg-white/95 border-b border-gray-200/50'
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className={`font-bold text-2xl transition-colors ${
            darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-purple-500'
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

            {/* Back to Blog Link */}
            <Link href="/#blog" className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-purple-500 hover:bg-purple-600 text-white'
            }`}>
              ← Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              The Compressed Truth: Unpacking My Fascination with Video Codecs & Quality
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              How my hobby for creating cool video edits unexpectedly led me down a rabbit hole into the hidden magic and clever science behind making visuals look amazing without hogging all your storage.
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
            <div className="space-y-8">
              
              {/* Hero Section */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`relative overflow-hidden mb-12 p-8 rounded-2xl border-l-8 transition-all duration-300 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border-purple-400 text-purple-100 hover:from-purple-900/40' 
                    : 'bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-500 text-purple-900 hover:from-purple-100'
                }`}>
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,20 Q50,5 80,20 Q85,50 80,80 Q50,85 20,80 Q5,50 20,20 Z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className={`relative text-3xl font-bold mb-4 tracking-tight ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                  The Compressed Truth: Unpacking My Fascination with Video Codecs & Quality
                </h2>
              </motion.div>
              
              {/* Opening Paragraphs Combined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-[1.01] ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-800/60' : 'bg-white/80 hover:bg-white/90'
                } shadow-lg hover:shadow-xl`}
              >
                <p className={`text-lg leading-relaxed tracking-wide first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none transition-colors mb-6 ${
                  darkMode 
                    ? 'text-gray-300 first-letter:text-purple-400' 
                    : 'text-gray-700 first-letter:text-purple-600'
                }`}>
                  There's a distinct satisfaction in taking raw video footage or a static image and, through focused effort, transforming it into a cohesive visual piece. My YouTube channel, primarily a personal archive for various project realizations, became an outlet for this. What began as a simple intent to "store" videos evolved. A natural progression led to crafting thumbnails, and subsequently, incorporating basic edits with music and transitions. Having experienced the enhanced presentation, it became a standard I felt compelled to maintain for subsequent videos. This process, while primarily for personal enjoyment and a small circle of friends, became a hobby where the pursuit of clean, well-presented results offered its own reward.
                </p>
                
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  This interest naturally extended to <strong className={`font-bold ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>"anime edits,"</strong> a genre that bridges another personal interest. The technical aspects of dynamically synchronizing cuts, effects, and music to enhance existing media intrigued me. While my recent focus has shifted, the <strong className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>technical underpinnings</strong> of such detailed visual work continued to hold my attention.
                </p>
              </motion.div>

              {/* Technical Curiosity Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl group ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/60 to-gray-700/40 border-gray-600/50 hover:border-purple-500/50' 
                    : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className={`absolute top-4 right-4 w-8 h-8 opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110 ${
                  darkMode ? 'text-purple-400' : 'text-purple-500'
                }`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                <h3 className={`text-2xl font-bold mb-6 flex items-center tracking-tight transition-colors group-hover:scale-105 ${
                  darkMode ? 'text-purple-300 group-hover:text-purple-200' : 'text-purple-700 group-hover:text-purple-600'
                }`}>
                  <span className={`mr-4 text-4xl transition-transform group-hover:rotate-12 ${
                    darkMode ? 'text-purple-400' : 'text-purple-500'
                  }`}></span>
                  The Inception of Technical Curiosity
                </h3>

                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    A specific moment brought the technical side of video production into sharp focus. I was in the process of exporting a video project. Previously, my approach to export settings was rudimentary; I simply accepted defaults. On this occasion, however, I observed an option to achieve a notably smaller file size for the same resolution. Intrigued by the prospect of efficiency, I selected it. To my surprise, the resulting file was unplayable on my phone's default viewer. This experience marked my initial encounter with <strong className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>video codecs</strong> and catalyzed a deeper learning process.
                  </p>

                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    I quickly found myself exploring a new domain, simultaneously fascinated by the effectiveness of <strong className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>compression</strong> and puzzled by its mechanics. As someone drawn to optimization, the idea of significantly lighter files with no perceptible quality loss seemed almost too good to be true. This apparent paradox fueled my drive to understand the underlying principles. My curiosity was no longer solely about aesthetic composition but extended to the fundamental processes by which videos, pictures, and sound files are stored and rendered efficiently.
                  </p>
                </div>
              </motion.div>

              {/* Compression Principles Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl group ${
                  darkMode 
                    ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-700/30' 
                    : 'bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200'
                }`}
              >
                <div className={`absolute -top-4 -right-4 w-16 h-16 opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:rotate-12 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-500'
                }`}>
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="20" cy="20" r="8"/>
                    <circle cx="50" cy="20" r="8"/>
                    <circle cx="80" cy="20" r="8"/>
                    <circle cx="20" cy="50" r="8"/>
                    <circle cx="50" cy="50" r="8"/>
                    <circle cx="80" cy="50" r="8"/>
                    <circle cx="20" cy="80" r="8"/>
                    <circle cx="50" cy="80" r="8"/>
                    <circle cx="80" cy="80" r="8"/>
                  </svg>
                </div>

                <h3 className={`text-2xl font-bold mb-6 flex items-center tracking-tight ${
                  darkMode ? 'text-indigo-300' : 'text-indigo-700'
                }`}>
                  <span className={`mr-4 text-4xl transition-transform group-hover:scale-110 ${
                    darkMode ? 'text-indigo-400' : 'text-indigo-500'
                  }`}></span>
                  Deconstructing the Digital Stream: Codecs and Compression Principles
                </h3>

                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    My learning journey began with readily available resources on YouTube, where I consumed numerous videos comparing <strong className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>codecs</strong> and detailing their operational principles. This led to understanding fundamental video terminology and common settings. From there, I ventured into online articles and forums, particularly Reddit, delving into the intricacies of video codecs and <strong className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>bitrates</strong>. This exploration broadened to encompass <strong className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>image compression</strong>, requiring an understanding of how pixels aggregate into a file and the unexpected complexities of image data reduction. The process of discovery for images mirrored that of video. Subsequently, I developed an interest in <strong className={`font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>audio compression</strong>, learning how sound can be significantly compressed from lossless to lossy formats with minimal audible degradation.
                  </p>

                  {/* Highlighted Concept Box */}
                  <div className={`relative p-6 rounded-xl border-l-4 transition-all duration-300 hover:scale-[1.02] ${
                    darkMode 
                      ? 'bg-blue-900/30 border-blue-400 text-blue-100 hover:bg-blue-900/40' 
                      : 'bg-blue-50 border-blue-500 text-blue-900 hover:bg-blue-100'
                  }`}>
                    <div className={`absolute top-3 right-3 w-6 h-6 opacity-30 ${
                      darkMode ? 'text-blue-300' : 'text-blue-600'
                    }`}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-lg leading-relaxed font-medium">
                      A core distinction in this domain is between <strong className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>lossless</strong> and <strong className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>lossy</strong> compression. Lossless compression aims for efficiency by reducing file size without sacrificing any original information. An analogy for this might be meticulously folding clothes to maximize drawer space – nothing is removed, only reorganized. Conversely, lossy compression prioritizes a greater reduction in size, accepting the sacrifice of less relevant information. This can be likened to summarizing an extensive document into a concise list of key points. The objective is to discard data that is unlikely to be perceived as missing by human senses.
                    </p>
                  </div>

                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    In the context of video, virtually all content encountered online or elsewhere utilizes lossy codecs. <strong className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>H.264/AVC</strong> remains a prevalent choice due to its balance of quality and file size, alongside broad compatibility. However, within the field of compression, H.264 is recognized as less efficient compared to newer codecs that offer substantially improved compression ratios. Examples include <strong className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>VP9</strong> (developed by Google), <strong className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>H.265/HEVC</strong>, and <strong className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>AV1</strong> (projected to become a widely adopted standard in the near future), and the very recent <strong className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>H.266/VVC</strong>. These advanced codecs provide progressively superior compression, typically at the cost of broader support. More sophisticated codecs often necessitate higher-end hardware for decoding and may have licensing complexities (open-source vs. proprietary).
                  </p>

                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    When discussing "better compression" for video, image, or sound, the reference is to achieving a perceptibly similar quality with a smaller file size. This relies on advanced <strong className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>mathematical algorithms</strong>, innovative computational thinking, and robust technical performance. The "perceptible quality" aspect underscores a fascinating human element in this research – how algorithms are designed to detect and prioritize which information to retain or discard, based on the nuances of human visual and auditory perception.
                  </p>
                </div>
              </motion.div>

              {/* Visual Spectrum Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl group ${
                  darkMode 
                    ? 'bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/30' 
                    : 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-6 flex items-center tracking-tight ${
                  darkMode ? 'text-emerald-300' : 'text-emerald-700'
                }`}>
                  <span className={`mr-4 text-4xl transition-transform group-hover:scale-110 ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-500'
                  }`}></span>
                  Expanding the Visual Spectrum: Beyond Compression
                </h3>

                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My exploration extended beyond pure compression into more specialized visual technologies. I delved into concepts like <strong className={`font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>color spaces</strong>, <strong className={`font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>HDR</strong>, and <strong className={`font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>luminance</strong>. It was notable how manipulating these settings during file creation could reproduce remarkably realistic contrasts, profound dark tones, and vivid colors, significantly impacting the visual experience. This demonstrated a deeper layer of control over the aesthetic output.
                </p>
              </motion.div>

              {/* Conclusion Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className={`relative p-10 rounded-3xl border-2 border-dashed transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group ${
                  darkMode 
                    ? 'border-purple-400/60 bg-gradient-to-br from-purple-900/20 to-indigo-900/10 hover:border-purple-300' 
                    : 'border-purple-500/60 bg-gradient-to-br from-purple-50 to-indigo-50 hover:border-purple-400'
                }`}
              >
                {/* Decorative Elements */}
                <div className={`absolute top-4 left-4 w-12 h-12 opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:rotate-45 ${
                  darkMode ? 'text-purple-400' : 'text-purple-500'
                }`}>
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="50,10 61,35 90,35 69,57 79,91 50,75 21,91 31,57 10,35 39,35"/>
                  </svg>
                </div>
                
                <div className={`absolute bottom-4 right-4 w-8 h-8 opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:-rotate-45 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-500'
                }`}>
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40"/>
                  </svg>
                </div>

                <h3 className={`text-3xl font-bold mb-8 flex items-center tracking-tight transition-all duration-300 group-hover:scale-105 ${
                  darkMode ? 'text-purple-200' : 'text-purple-800'
                }`}>
                  <span className={`mr-4 text-5xl transition-transform group-hover:rotate-12 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}></span>
                  Synthesis: The Interplay of Craft and Calculation
                </h3>

                <div className="space-y-6">
                  <p className={`text-xl leading-relaxed font-medium ${
                    darkMode ? 'text-purple-100' : 'text-purple-900'
                  }`}>
                    This comprehensive exploration has reinforced a core understanding: beyond the fundamental drive for optimization that initially captivated me, the choice of a <strong className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>compression codec</strong> carries practical implications for different use cases. For general file storage or distribution where size is paramount, higher compression with some quality trade-off is often acceptable. Conversely, for editing workflows, utilizing <strong className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-600'}`}>lossless</strong> (or near-lossless) codecs is preferable, as it offers greater flexibility and technical ease during post-production.
                  </p>

                  <p className={`text-xl leading-relaxed font-medium ${
                    darkMode ? 'text-purple-100' : 'text-purple-900'
                  }`}>
                    For me, this domain represents a seamless integration of my creative impulses and my technical, reflective faculties. It continuously feeds my pursuit of optimization, whether in the elegant flow of an <strong className={`font-bold ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>anime edit</strong> or the efficient encoding of a video stream.
                  </p>
                </div>

                {/* Accent Line */}
                <div className={`mt-8 h-1 rounded-full transition-all duration-500 group-hover:h-2 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600' 
                    : 'bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500'
                }`}></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
