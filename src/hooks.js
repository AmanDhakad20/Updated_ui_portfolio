import { useEffect, useRef, useState } from 'react';

export function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

// Returns [ref, seen]. `seen` becomes true once the element scrolls into view.
export function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}

// Light and dark theme. With no saved choice, the site follows the system setting.
export function useTheme() {
  const [dark, setDark] = useState(false);

  const effectiveDark = () => {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr === 'dark';
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ad-theme');
      if (saved === 'dark' || saved === 'light') {
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch {
      /* storage unavailable */
    }
    setDark(effectiveDark());

    let mq;
    try {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
    } catch {
      /* no matchMedia */
    }
    const onChange = () => setDark(effectiveDark());
    mq?.addEventListener?.('change', onChange);
    return () => mq?.removeEventListener?.('change', onChange);
  }, []);

  const toggle = () => {
    const next = effectiveDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('ad-theme', next);
    } catch {
      /* storage unavailable */
    }
    setDark(next === 'dark');
  };

  return [dark, toggle];
}

const CONFETTI = ['#FF3D8B', '#FFC83D', '#12D4E8', '#7CE836', '#7A3CFF', '#FF7A2F'];

// Small confetti burst at a screen position. Skipped for reduced motion.
export function burst(x, y, count = 20) {
  if (prefersReducedMotion()) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 100;
    p.className = 'confetti';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.background = CONFETTI[i % CONFETTI.length];
    p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    p.style.setProperty('--dy', `${Math.sin(angle) * dist - 40}px`);
    p.style.setProperty('--rot', `${Math.random() * 720 - 360}deg`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }
}
