const ITEMS = [
  'Java', 'Spring Boot', 'React', 'Angular', 'TypeScript', 'PostgreSQL', 'Hadoop', 'Apache Spark',
  'Microservices', 'REST APIs', 'OpenShift', 'CI/CD', 'OpenCV',
];

// Endless scrolling strip of technologies. The row is rendered twice so the loop is seamless.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">
        {[0, 1].map((k) => (
          <ul className="mq-row" key={k}>
            {ITEMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
