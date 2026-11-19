import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const isRunning = useRef(false);

  useEffect(() => {
    // Skip on touch devices or if reduced motion is requested
    if (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let rafId = null;

    const lerp = (a, b, t) => a + (b - a) * t;

    const render = () => {
      if (document.hidden) {
        isRunning.current = false;
        return;
      }

      // Dot snaps instantly with hardware-accelerated translate3d
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`;
      }

      // Ring lags behind with smooth interpolation
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.16);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.16);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0)`;
      }

      const dx = Math.abs(pos.current.x - ring.current.x);
      const dy = Math.abs(pos.current.y - ring.current.y);

      // If caught up within half a pixel, sleep the RAF loop to save 100% idle GPU/CPU
      if (dx < 0.25 && dy < 0.25) {
        isRunning.current = false;
        return;
      }

      rafId = requestAnimationFrame(render);
    };

    const wakeLoop = () => {
      if (!isRunning.current) {
        isRunning.current = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      wakeLoop();
    };

    const onEnter = (e) => {
      if (e.target && e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true);
      }
    };

    const onLeave = () => setIsHovering(false);

    const onVisibilityChange = () => {
      if (!document.hidden) wakeLoop();
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onEnter, { passive: true });
    window.addEventListener('mouseout', onLeave, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${isHovering ? 'cursor-hovering' : ''}`} aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'cursor-ring-hovering' : ''}`} aria-hidden="true" />
    </>
  );
}


