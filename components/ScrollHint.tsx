// components/ScrollHint.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollHintProps {
  show: boolean;
}

export default function ScrollHint({ show }: ScrollHintProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show || !isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          Scroll to navigate between sections
        </p>
        <div className="flex justify-center">
          <motion.div
            className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
