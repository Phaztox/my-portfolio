// components/ScrollHint.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollHintProps {
  show: boolean;
}

export default function ScrollHint({ show }: ScrollHintProps) {
  const [expired, setExpired] = useState(false);

  // The timer only runs while the hint is actually on screen, and it restarts
  // if the visitor comes back to the top — previously it fired once on mount
  // and the hint could never return.
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => setExpired(true), 5000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && !expired && (
        <motion.div
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-700/50"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Scroll to explore</p>
            <div className="flex justify-center">
              <motion.div
                className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
