import Section from './Section.jsx';
import Stats from './Stats.jsx';
import { FACTS } from '../data.js';

export default function About() {
  return (
    <Section id="about" title="About" color="violet">
      <div className="about-text">
        <p>
          I’m a software engineer at LTIMindtree, working on banking applications for Citi. My work covers Java and
          Spring Boot services, React and Angular frontends, and the production side that keeps them reliable, from
          CI/CD on OpenShift to Hadoop–Spark file transfers.
        </p>
        <p>Before that, I built a face recognition system for Rajasthan Police during an internship, using OpenCV.</p>
      </div>
      <Stats />
      <dl className="facts">
        {FACTS.map(([k, v]) => (
          <div className="fact pop hover-none" key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
