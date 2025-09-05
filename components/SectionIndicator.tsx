// components/SectionIndicator.tsx
import { motion } from "framer-motion";

interface SectionIndicatorProps {
  currentSection: number;
  sections: string[];
  onSectionClick: (index: number) => void;
}

export default function SectionIndicator({ 
  currentSection, 
  sections, 
  onSectionClick 
}: SectionIndicatorProps) {
  const sectionNames = [
    'Hero',
    'About',
    'Resume', 
    'Projects',
    'Blog',
    'Passions',
    'Contact'
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
      {sections.map((section, index) => (
        <motion.button
          key={section}
          onClick={() => onSectionClick(index)}
          className={`
            group relative flex items-center justify-center w-4 h-4 rounded-full border-2 transition-all duration-300
            ${currentSection === index 
              ? 'bg-pink-500 border-pink-500 scale-125' 
              : 'bg-transparent border-gray-400 dark:border-gray-500 hover:border-pink-400 hover:scale-110'
            }
          `}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          <motion.div
            className={`
              absolute right-6 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
              text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 
              transition-opacity duration-200 pointer-events-none
            `}
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            {sectionNames[index]}
            
            {/* Arrow */}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 
                          border-l-4 border-l-gray-900 dark:border-l-gray-100 
                          border-t-2 border-t-transparent border-b-2 border-b-transparent">
            </div>
          </motion.div>
          
          {/* Active indicator inner dot */}
          {currentSection === index && (
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
