import { useEffect, useState } from 'react';
import { prefersReducedMotion, useInView } from '../hooks.js';

// [value, label, decimals, prefix, colour]
const STATS = [
  [3, 'Citi projects delivered or supported', 0, '', 'pink'],
  [2, 'Professional certifications', 0, '', 'cyan'],
  [8.54, 'B.Tech CGPA out of 10', 2, '', 'yellow'],
  [9, 'Angular versions upgraded, v10 to v19', 0, '+', 'violet'],
];

function Stat({ value, label, decimals, prefix, color }) {
  const [ref, seen] = useInView(0.5);
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!seen || prefersReducedMotion()) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / 1300, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    setN(0);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);

  return (
    <div className={`stat c-${color}`} ref={ref}>
      <b>{prefix}{n.toFixed(decimals)}</b>
      <span>{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map(([value, label, decimals, prefix, color]) => (
        <Stat key={label} value={value} label={label} decimals={decimals} prefix={prefix} color={color} />
      ))}
    </div>
  );
}
