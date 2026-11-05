import { useEffect, useState } from 'react';
import { useInView, prefersReducedMotion } from './AnimateIn';

/**
 * Counts from 0 to `value` (a numeric string like "2.4" or "12") once in view.
 * Keeps the source string's decimal places so "2.4" never renders as "2.4000".
 */
function CountUp({ value, duration = 1400 }) {
  const [ref, inView] = useInView(0.4);
  const target = parseFloat(value);
  const decimals = (String(value).split('.')[1] || '').length;
  const [shown, setShown] = useState(prefersReducedMotion() ? target : 0);

  useEffect(() => {
    if (prefersReducedMotion() || Number.isNaN(target)) {
      setShown(target);
      return undefined;
    }
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // easeOutQuart
      setShown(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return <span ref={ref}>{Number.isNaN(target) ? value : shown.toFixed(decimals)}</span>;
}

export default CountUp;
