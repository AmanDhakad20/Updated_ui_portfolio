import { useEffect, useState } from 'react';
import Section from './Section.jsx';
import { PROJECTS, INTERNSHIP } from '../data.js';
import { prefersReducedMotion, useInView } from '../hooks.js';

// Counts from Angular v10 up to v19 when it scrolls into view.
function VersionTicker() {
  const [ref, seen] = useInView(0.6);
  const [n, setN] = useState(19);

  useEffect(() => {
    if (!seen || prefersReducedMotion()) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setN(10 + Math.round(p * 9));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    setN(10);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen]);

  return (
    <div className="ticker" ref={ref}>
      <span className="k">Angular migration</span>
      <span className="from">v10 →</span>
      <span className="to" aria-label="version 19">v{n}</span>
    </div>
  );
}

function Project({ title, when, current, tags, bullets, ticker, color }) {
  return (
    <article className={`proj pop c-${color}`}>
      <div className="proj-head">
        <h4>
          {title}
          {current && <span className="badge">Current</span>}
        </h4>
        <span className="when">{when}</span>
      </div>
      <div className="tags">
        {tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <ul className="bul">
        {bullets.map((b, k) => (
          <li key={k}>{b}</li>
        ))}
      </ul>
      {ticker && <VersionTicker />}
    </article>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience" color="pink">
      <div className="company">
        <h3>LTIMindtree, Mumbai</h3>
        <p>Software Engineer · Dec 2024 – Present</p>
      </div>
      <div className="proj-list">
        {PROJECTS.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </div>

      <div className="company">
        <h3>Rajasthan Police HQ</h3>
        <p>Software Development Intern · Jan 2024 – May 2024</p>
      </div>
      <div className="proj-list">
        <Project {...INTERNSHIP} />
      </div>
    </Section>
  );
}
