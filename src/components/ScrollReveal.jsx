import React, { useRef, useState, useEffect } from 'react';

/**
 * ScrollReveal wrapper component.
 * Wraps any children and applies blur → sharp, scale, translateY/X, opacity entrance animation
 * when the element scrolls into view.
 *
 * Props:
 *   direction: 'up' | 'left' | 'right' (default: 'up')
 *   delay: number in ms (default: 0)
 *   distance: number in px (default: 40)
 *   blur: number in px (default: 6)
 *   duration: number in ms (default: 900)
 *   scale: number (default: 0.97)
 *   threshold: number 0-1 (default: 0.08)
 *   className: additional className
 *   style: additional inline style
 *   as: HTML tag to render (default: 'div')
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 40,
  blur = 6,
  duration = 900,
  scale = 0.97,
  threshold = 0.08,
  className = '',
  style = {},
  as: Tag = 'div',
  ...rest
}) {
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
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const transforms = {
    up: `translateY(${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };

  const revealStyle = {
    opacity: isRevealed ? 1 : 0,
    filter: isRevealed ? 'blur(0px)' : `blur(${blur}px)`,
    transform: isRevealed
      ? 'translate(0, 0) scale(1)'
      : `${transforms[direction]} scale(${scale})`,
    transition: [
      `opacity ${duration}ms cubic-bezier(.23,1,.32,1) ${delay}ms`,
      `filter ${duration}ms cubic-bezier(.23,1,.32,1) ${delay}ms`,
      `transform ${duration}ms cubic-bezier(.23,1,.32,1) ${delay}ms`,
    ].join(', '),
    willChange: 'opacity, filter, transform',
    ...style,
  };

  return (
    <Tag ref={ref} className={className} style={revealStyle} {...rest}>
      {children}
    </Tag>
  );
}
