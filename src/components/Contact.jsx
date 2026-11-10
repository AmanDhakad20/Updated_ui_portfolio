import { useRef, useState } from 'react';
import Section from './Section.jsx';
import { EMAIL, PHONE, LINKEDIN } from '../data.js';
import { burst } from '../hooks.js';

function ContactRow({ label, value, href, copy, color }) {
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  const onCopy = (e) => {
    burst(e.clientX, e.clientY);
    const ok = () => {
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    };
    // If the clipboard is blocked, select the text so it can be copied by hand.
    const fallback = () => {
      try {
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(ref.current);
        sel.removeAllRanges();
        sel.addRange(range);
      } catch {
        /* selection unavailable */
      }
    };
    try {
      navigator.clipboard.writeText(copy).then(ok, fallback);
    } catch {
      fallback();
    }
  };

  return (
    <div className={`crow pop hover-none c-${color}`}>
      <span className="k">{label}</span>
      {href ? (
        <a className="v" href={href} target="_blank" rel="noopener noreferrer" ref={ref}>{value}</a>
      ) : (
        <span className="v" ref={ref}>{value}</span>
      )}
      <button className="copy" type="button" onClick={onCopy}>{done ? 'Copied' : 'Copy'}</button>
    </div>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contact" color="orange">
      <p className="lead">Open to talking about software engineering roles and projects.</p>
      <div className="contact-list">
        <ContactRow label="Email" value={EMAIL} copy={EMAIL} color="pink" />
        <ContactRow label="Phone" value={PHONE} copy={PHONE} color="cyan" />
        <ContactRow label="LinkedIn" value="linkedin.com/in/aman-dhakad-5770701bb" href={LINKEDIN} copy={LINKEDIN} color="violet" />
      </div>
    </Section>
  );
}
