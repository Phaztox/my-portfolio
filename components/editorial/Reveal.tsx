// components/editorial/Reveal.tsx
// Restrained entrance: content rises a few pixels, rules draw from the left.
// Both are no-ops under prefers-reduced-motion (framer-motion reads it via
// MotionConfig in EditorialLayout's tree, and the transforms are small enough
// that removing them costs nothing).
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Component>
  );
}

/** A hairline that draws itself in from the left when it scrolls into view. */
export function DrawnRule({ heavy = false, className = '' }: { heavy?: boolean; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.hr
      className={`${heavy ? 'ed-rule-heavy' : 'ed-rule'} ${className}`}
      style={{ transformOrigin: 'left' }}
      initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
      whileInView={reduce ? { opacity: 1 } : { scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    />
  );
}
