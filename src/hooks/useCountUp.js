import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp — animates a numeric value from 0 to `target` when `trigger` is true.
 * Handles numbers with suffix characters like '+', '%', '.1' etc.
 */
export function useCountUp(rawValue = '0', trigger = false, duration = 1600) {
  // Parse numeric part and suffix separately
  const numericMatch = String(rawValue).match(/^([\d.]+)(.*)/);
  const target = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';
  const isFloat = String(target).includes('.');
  const decimals = isFloat ? (String(target).split('.')[1] || '').length : 0;

  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(parseFloat(current.toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, target, duration, decimals]);

  return `${count.toFixed(decimals)}${suffix}`;
}

