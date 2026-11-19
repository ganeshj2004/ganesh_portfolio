import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable Reveal component powered by Framer Motion
 * Handles scroll-triggered entry animations minimally & smoothly with zero lag or layout shift
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.4,
  className = '',
  cascade = false
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Refined minimal displacements for instant, butter-smooth feel
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 18 };
      case 'down':
        return { opacity: 0, y: -18 };
      case 'left':
        return { opacity: 0, x: 20 };
      case 'right':
        return { opacity: 0, x: -20 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'fade':
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
