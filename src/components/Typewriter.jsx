import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks.js';

// Types a word, pauses, deletes it, then moves to the next one.
export default function Typewriter({ words }) {
  const reduced = prefersReducedMotion();
  const [w, setW] = useState(0);
  const [n, setN] = useState(reduced ? words[0].length : 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[w];
    let t;
    if (!deleting && n < word.length) {
      t = setTimeout(() => setN(n + 1), 70);
    } else if (!deleting) {
      t = setTimeout(() => setDeleting(true), 1500);
    } else if (n > 0) {
      t = setTimeout(() => setN(n - 1), 35);
    } else {
      setDeleting(false);
      setW((w + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [n, deleting, w, words, reduced]);

  return (
    <>
      <span className="typed">{words[w].slice(0, n)}</span>
      <span className="caret" aria-hidden="true" />
    </>
  );
}
