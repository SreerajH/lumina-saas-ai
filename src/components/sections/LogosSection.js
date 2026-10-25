// Wordmarks set in mixed treatments so the strip reads like real brands, not one font repeated.
const LOGOS = [
  { name: 'Northwind', style: 'f1' },
  { name: 'Halcyon', style: 'f2' },
  { name: 'fieldnotes', style: 'f3' },
  { name: 'Orbit', style: 'f4' },
  { name: 'Marlow & Co', style: 'f5' },
  { name: 'Paperplane', style: 'f6' },
];

function LogosSection() {
  return (
    <section className="logos-section" id="logos">
      <div className="container">
        <div className="logos-wrap">
          <p className="logos-label mono">In daily use at</p>
          <div className="logos-row">
            {LOGOS.map((l) => (
              <span key={l.name} className={`logo-item ${l.style}`}>{l.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogosSection;
