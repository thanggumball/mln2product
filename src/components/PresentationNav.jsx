import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const INTERACTIVE_TAGS = new Set(['INPUT', 'TEXTAREA', 'BUTTON', 'A', 'SELECT']);
const SCROLL_LOCK_MS = 900;

export default function PresentationNav() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const observerRef = useRef(null);
  const scrollLockRef = useRef(false);
  const scrollLockTimerRef = useRef(null);

  // Discover every slide in document order. Re-scans on resize and whenever
  // slides are added/removed (e.g. the Meta/Zalo case toggle mounts a
  // different number of slides for each case).
  useEffect(() => {
    const collect = () => {
      const found = Array.from(document.querySelectorAll('[data-slide="true"]'));
      setSlides(found);
    };
    collect();
    window.addEventListener('resize', collect);

    let debounceId = null;
    const scheduleCollect = () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(collect, 30);
    };
    const mutationObserver = new MutationObserver(scheduleCollect);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', collect);
      clearTimeout(debounceId);
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(slides.length - 1, 0)));
  }, [slides]);

  useEffect(() => {
    if (slides.length === 0) return;

    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLockRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slides.indexOf(entry.target);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    slides.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [slides]);

  const goTo = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      const target = slides[clamped];
      if (!target) return;

      // Optimistically update index and lock observer during scroll so
      // intermediate slides don't hijack the counter.
      setCurrentIndex(clamped);
      scrollLockRef.current = true;
      clearTimeout(scrollLockTimerRef.current);
      scrollLockTimerRef.current = setTimeout(() => {
        scrollLockRef.current = false;
      }, SCROLL_LOCK_MS);

      const block = (target.dataset.scrollBlock) || 'start';
      target.scrollIntoView({ behavior: 'smooth', block });
    },
    [slides]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (INTERACTIVE_TAGS.has(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  if (slides.length === 0) return null;

  const progress = ((currentIndex + 1) / slides.length) * 100;

  return (
    <>
      <div className="pnav-progress-track" aria-hidden="true">
        <div className="pnav-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="pnav-controls">
        <button
          className="pnav-btn"
          onClick={goPrev}
          disabled={currentIndex === 0}
          aria-label="Slide trước"
        >
          <ChevronUp size={18} />
        </button>
        <span className="pnav-counter">{currentIndex + 1} / {slides.length}</span>
        <button
          className="pnav-btn"
          onClick={goNext}
          disabled={currentIndex === slides.length - 1}
          aria-label="Slide tiếp theo"
        >
          <ChevronDown size={18} />
        </button>
      </div>

      <style>{`
        .pnav-progress-track {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.04);
          z-index: 200;
        }

        .pnav-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-gold-dark), var(--color-gold));
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pnav-controls {
          position: fixed;
          right: 24px;
          bottom: 28px;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 10px 8px;
          box-shadow: var(--shadow-md);
        }

        .pnav-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 2px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pnav-btn:hover:not(:disabled) {
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        .pnav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pnav-counter {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 2px 0;
        }

        @media (max-width: 768px) {
          .pnav-controls {
            right: 12px;
            bottom: 16px;
          }
        }
      `}</style>
    </>
  );
}
