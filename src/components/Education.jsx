import Section from './Section.jsx';
import { EDU } from '../data.js';

export default function Education() {
  return (
    <Section id="education" title="Education" color="lime">
      <ul className="edu pop hover-none">
        {EDU.map(([degree, school, score, year]) => (
          <li key={degree}>
            <div>
              <strong>{degree}</strong>
              <div className="meta">{school}</div>
            </div>
            <div>
              <div className="score">{score}</div>
              <div className="yr">{year}</div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
