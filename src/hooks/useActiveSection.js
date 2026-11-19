import { useState, useEffect } from 'react';

/**
 * Optimized useActiveSection hook using IntersectionObserver
 * Completely eliminates layout thrashing (no window.scrollY or element.offsetTop on scroll).
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'hero');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const visibleMap = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap.set(entry.target.id, entry.isIntersecting);
        });

        // Find the first visible section in document order
        for (const id of sectionIds) {
          if (visibleMap.get(id)) {
            setActiveSection(id);
            break;
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}


