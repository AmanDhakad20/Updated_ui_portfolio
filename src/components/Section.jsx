// Shared layout: coloured heading marker on the left, content on the right.
// `color` is one of: pink, violet, blue, cyan, lime, yellow, orange.
export default function Section({ id, title, color = 'violet', children }) {
  return (
    <section className={`section scroll-pad c-${color}`} id={id}>
      <div className="wrap">
        <div className="row">
          <h2 className="reveal"><span>{title}</span></h2>
          <div className="reveal">{children}</div>
        </div>
      </div>
    </section>
  );
}
