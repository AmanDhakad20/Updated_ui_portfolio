import Section from './Section.jsx';
import { CERTS } from '../data.js';

const COLORS = ['orange', 'cyan'];
const ISSUERS = ['Oracle', 'Databricks'];

export default function Certs() {
  return (
    <Section id="certifications" title="Certifications" color="yellow">
      <div className="cards">
        {CERTS.map(([title, text], k) => (
          <div className={`card pop c-${COLORS[k % COLORS.length]}`} key={title}>
            <span className="seal">{ISSUERS[k % ISSUERS.length]}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
