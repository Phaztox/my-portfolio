// components/editorial/RotatingWord.tsx
//
// Cycles through a list of phrases. Three things matter here beyond the
// animation:
//
//  - The first item is rendered on the server, so crawlers and a no-JS visitor
//    still get a complete, sensible sentence.
//  - Under `prefers-reduced-motion` it never cycles at all.
//  - The live region is muted (`aria-hidden`) and the full list is exposed once
//    to assistive tech instead, so a screen reader is not interrupted every
//    few seconds by a word changing.
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RotatingWordProps {
  items: string[];
  /** Milliseconds each item stays on screen. */
  interval?: number;
  className?: string;
}

export default function RotatingWord({
  items,
  interval = 2600,
  className = '',
}: RotatingWordProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || items.length < 2) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [reduce, items.length, interval]);

  if (!items.length) return null;

  // The spacer has to reserve the *longest* phrase, not the first one, or
  // longer entries overflow their box on narrow screens.
  const longest = items.reduce((a, b) => (b.length > a.length ? b : a), items[0]);

  return (
    <>
      {/* Read once by assistive tech, then kept out of the way. */}
      <span className="sr-only">{items.join(', ')}</span>

      <span
        aria-hidden="true"
        className={`relative inline-block align-top ${className}`}
      >
        {/* Reserves space for the widest phrase so nothing reflows as they
            swap, and so no phrase can spill outside the layout. */}
        <span className="invisible block whitespace-nowrap">{longest}</span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            className="absolute inset-0 block whitespace-nowrap"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: '0.35em' }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: '-0.35em' }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {items[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
