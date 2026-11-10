import { useEffect, useState } from 'react';
import Typewriter from './Typewriter.jsx';
import { prefersReducedMotion } from '../hooks.js';

const STAGES = [
  ['Booked', 'yellow'],
  ['Approved', 'cyan'],
  ['At dock', 'pink'],
  ['Received', 'lime'],
];

const WORDS = ['Java backends', 'React frontends', 'Spring Boot APIs', 'Angular apps'];

function Truck() {
  return (
    <svg viewBox="0 0 46 26" aria-hidden="true">
      <rect className="box" x="0" y="1" width="28" height="18" rx="2" />
      <path className="cab" d="M30 7h8.5a2 2 0 0 1 1.6.8l4.3 5.6a2 2 0 0 1 .4 1.2V19H30z" />
      <circle className="wheel" cx="10" cy="20.5" r="4" />
      <circle className="wheel" cx="37" cy="20.5" r="4" />
    </svg>
  );
}

// A booking moving through the same stages as the Loading Bay application.
function DockTracker() {
  const [i, setI] = useState(() => (prefersReducedMotion() ? STAGES.length - 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setI((x) => (x + 1) % STAGES.length), 2000);
    return () => clearInterval(t);
  }, []);

  const pct = (i / (STAGES.length - 1)) * 100;

  return (
    <div className="dock-wrap rise d3">
      <div className="dock">
        <div className="dock-head">
          <span className="dock-title">Vehicle booking</span>
          <span className="dock-ref">Citi UK · Loading Bay</span>
        </div>
        <div
          className="track"
          role="img"
          aria-label="A vehicle booking moving through booked, approved, at dock and received"
        >
          <div className="rail" />
          <div className="fill" style={{ width: `${pct}%` }} />
          {STAGES.map(([name, color], k) => (
            <div
              key={name}
              className={`stop c-${color}${k <= i ? ' on' : ''}`}
              style={{ left: `${(k / (STAGES.length - 1)) * 100}%` }}
            >
              <span className="dot" />
              <span className="lbl">{name}</span>
            </div>
          ))}
          <div className="truck" style={{ left: `${pct}%` }}>
            <Truck />
          </div>
        </div>
        <div className="dock-foot">
          <span>Status <b>{STAGES[i][0]}</b></span>
          <span>I build this workflow in Java and React.</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />
      <div className="blob b3" aria-hidden="true" />
      <div className="shape s-ring" aria-hidden="true" />
      <div className="shape s-sq" aria-hidden="true" />
      <div className="shape s-dia" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hello rise">Hi, I’m</p>
            <h1 className="name rise d1">
              <span>Aman</span>
              <span>Dhakad</span>
            </h1>
            <p className="typing rise d2">
              I build <Typewriter words={WORDS} />
            </p>
            <p className="role rise d2">Software engineer at LTM, Mumbai.</p>
            <p className="sub rise d2">
              Applications for Citi in Java, Spring Boot, React and Angular, kept running in production.
            </p>
            <div className="cta rise d4">
              <a className="btn primary" href="#experience">See my experience</a>
              <a className="btn" href="#contact">Get in touch</a>
            </div>
          </div>
          <DockTracker />
        </div>
      </div>
    </section>
  );
}
