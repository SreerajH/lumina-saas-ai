import AnimateIn from '../AnimateIn';

export const FEATURES = [
  {
    icon: '✦',
    title: 'AI Writing Studio',
    desc: 'Generate blogs, social posts, ad copy, and product descriptions with a single prompt. Trained on high-converting formats across 40+ industries.',
  },
  {
    icon: '◈',
    title: 'Visual Design Engine',
    desc: 'Create on-brand graphics, social banners, and presentations without design experience. Your brand kit is always respected — automatically.',
  },
  {
    icon: '⟡',
    title: 'Brand Voice Lock',
    desc: 'Train Lumina on your tone and style guidelines once. Every piece of content will match your brand — whether it\'s playful, formal, or technical.',
  },
  {
    icon: '⟳',
    title: 'Workflow Automation',
    desc: 'Build content pipelines that run on autopilot. Schedule, repurpose, and distribute across platforms without lifting a finger.',
  },
  {
    icon: '◎',
    title: 'Performance Analytics',
    desc: 'See which content drives results. Lumina learns from your best-performing work and continuously improves its output for your audience.',
  },
  {
    icon: '⬡',
    title: 'Team Collaboration',
    desc: 'Comment, review, and approve content in real-time. Role-based permissions and shared brand assets keep large teams perfectly aligned.',
  },
];

function FeaturesSection() {
  return (
    <section id="features">
      <div className="container">
        <AnimateIn className="section-head">
          <div className="section-label">What you get</div>
          <h2>Everything creative teams need, in one place</h2>
          <p>
            Stop juggling tools. Lumina brings writing, design, and automation together —
            powered by AI that understands your brand.
          </p>
        </AnimateIn>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.title} delay={i % 3} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
