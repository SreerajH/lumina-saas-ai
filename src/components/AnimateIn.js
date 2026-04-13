import { useEffect, useRef } from 'react';

/**
 * Wraps children in a div that fades up into view when it enters the viewport.
 * delay: integer multiplier (each unit = 100ms stagger delay)
 */
function AnimateIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, delay * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`animate-in ${className}`}>
      {children}
    </div>
  );
}

export default AnimateIn;
