import { useEffect, useRef } from 'react';

// A truck fixed to the bottom of the screen. It drives from left to right as you scroll down,
// faces the other way when you scroll up, and shows "Delivered!" at the end of the page.
export default function ScrollTruck() {
  const truck = useRef(null);
  const road = useRef(null);

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    let timer;

    const update = () => {
      ticking = false;
      const el = truck.current;
      const rd = road.current;
      if (!el || !rd) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      el.style.setProperty('--p', p);
      rd.style.setProperty('--p', p);

      const y = window.scrollY;
      if (y < lastY) el.classList.add('back');
      else if (y > lastY) el.classList.remove('back');
      lastY = y;

      el.classList.add('moving');
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove('moving'), 160);
      el.classList.toggle('arrived', p > 0.97);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="drive" aria-hidden="true">
      <div className="drive-road" ref={road} />
      <div className="drive-truck" ref={truck}>
        <span className="bubble">Delivered!</span>
        <div className="flip">
          <svg viewBox="0 0 96 52">
            <rect className="t-box" x="2" y="4" width="58" height="34" rx="4" />
            <rect className="t-stripe" x="2" y="30" width="58" height="6" />
            <text className="t-text" x="31" y="23" textAnchor="middle">AD</text>
            <path className="t-cab" d="M62 14h13a4 4 0 0 1 3.3 1.8l8.7 12.2a4 4 0 0 1 .7 2.2V38H62z" />
            <path className="t-win" d="M66 18h8.5l6 8.5H66z" />
            <circle className="t-tire" cx="20" cy="40" r="8" />
            <g className="wheel-spin" style={{ transformOrigin: '20px 40px' }}>
              <rect className="t-spoke" x="19" y="34" width="2" height="12" />
              <rect className="t-spoke" x="14" y="39" width="12" height="2" />
              <circle className="t-hub" cx="20" cy="40" r="2.6" />
            </g>
            <circle className="t-tire" cx="76" cy="40" r="8" />
            <g className="wheel-spin" style={{ transformOrigin: '76px 40px' }}>
              <rect className="t-spoke" x="75" y="34" width="2" height="12" />
              <rect className="t-spoke" x="70" y="39" width="12" height="2" />
              <circle className="t-hub" cx="76" cy="40" r="2.6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
