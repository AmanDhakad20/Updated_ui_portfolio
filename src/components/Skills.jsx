import Section from './Section.jsx';
import { SKILLS } from '../data.js';
import { useInView } from '../hooks.js';

const PALETTE = ['pink', 'cyan', 'yellow', 'lime', 'orange', 'violet'];

function ChipGroup({ name, items, offset }) {
  const [ref, seen] = useInView(0.3);
  return (
    <div>
      <h3>{name}</h3>
      <div className={`chips${seen ? ' in' : ''}`} ref={ref}>
        {items.map((s, k) => (
          <span className={`chip c-${PALETTE[(k + offset) % PALETTE.length]}`} key={s} style={{ '--i': k }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" color="cyan">
      <div className="skill-groups">
        {SKILLS.map(([name, items], g) => (
          <ChipGroup key={name} name={name} items={items} offset={g * 2} />
        ))}
      </div>
    </Section>
  );
}
