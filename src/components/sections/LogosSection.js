const LOGOS = ['Notion', 'Figma', 'Linear', 'Vercel', 'Stripe', 'Loom', 'Webflow'];

function LogosSection() {
  return (
    <section className="logos-section" id="logos">
      <div className="container">
        <p className="logos-label">Trusted by teams at</p>
        <div className="logos-row">
          {LOGOS.map((name) => (
            <span key={name} className="logo-item">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogosSection;
