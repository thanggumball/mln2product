import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that observes an element and returns whether it's been revealed.
 * Used for scroll-triggered animations matching the reference site style:
 * blur → sharp, scale 0.95 → 1.0, translateY 30px → 0, opacity 0 → 1
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.08,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isRevealed];
}

/**
 * Returns inline style objects for scroll-reveal animation.
 * direction: 'up' | 'left' | 'right'
 * delay: in ms
 */
export function getRevealStyle(isRevealed, direction = 'up', delay = 0) {
  const transforms = {
    up: 'translateY(40px)',
    left: 'translateX(-50px)',
    right: 'translateX(50px)',
  };

  return {
    opacity: isRevealed ? 1 : 0,
    filter: isRevealed ? 'blur(0px)' : 'blur(6px)',
    transform: isRevealed
      ? 'translateY(0) scale(1)'
      : `${transforms[direction] || transforms.up} scale(0.97)`,
    transition: `opacity 0.9s cubic-bezier(.23,1,.32,1) ${delay}ms, filter 0.9s cubic-bezier(.23,1,.32,1) ${delay}ms, transform 0.9s cubic-bezier(.23,1,.32,1) ${delay}ms`,
    willChange: 'opacity, filter, transform',
  };
}
