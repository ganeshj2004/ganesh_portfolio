import { useState, useEffect, useRef } from 'react';

/**
 * useTypewriter — cycles through an array of strings with a typing effect.
 * Uses only state + refs — no extra dependencies.
 */
export function useTypewriter(words = [], typingSpeed = 90, deletingSpeed = 55, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!words.length) return;

    const word = words[wordIndex % words.length];

    const tick = () => {
      if (phase === 'typing') {
        if (displayed.length < word.length) {
          setDisplayed(word.slice(0, displayed.length + 1));
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          setPhase('pausing');
          timeoutRef.current = setTimeout(() => setPhase('deleting'), pauseMs);
        }
      } else if (phase === 'deleting') {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase('typing');
        }
      }
    };

    timeoutRef.current = setTimeout(tick, phase === 'typing' && displayed.length === 0 ? 300 : 16);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return { displayed, isTyping: phase === 'typing' };
}

