import { useContext } from 'react';
import AnimateIn from '../components/AnimateIn';
import { ModalContext } from '../App';
import { FEATURES } from '../components/sections/FeaturesSection';
import CtaBanner from '../components/sections/CtaBanner';

const EXTENDED_FEATURES = [
  {
    category: 'Writing',
    items: [
      { icon: '✦', title: 'Long-form Blog Generator', desc: 'Go from headline to 2,000-word article in under 60 seconds. SEO-optimized structure included.' },
      { icon: '◉', title: 'Ad Copy Engine', desc: 'Generate Facebook, Google, and LinkedIn ads with A/B variants built in. Conversion-focused by default.' },
      { icon: '❋', title: 'Email Sequences', desc: 'Write entire email campaigns — welcome series, nurture flows, re-engagement — with one prompt.' },
    ],
  },
  {
    category: 'Design',
    items: [
      { icon: '◈', title: 'Social Asset Creator', desc: 'Create Instagram, LinkedIn, and Twitter assets sized correctly and styled to your brand automatically.' },
      { icon: '⬡', title: 'Presentation Builder', desc: 'Turn a rough outline into a polished slide deck. Export to PowerPoint or Google Slides.' },
      { icon: '◐', title: 'Brand Kit Manager', desc: 'Store your logos, color palettes, and fonts in one place. Applied automatically across every output.' },
    ],
  },
  {
    category: 'Automation',
    items: [
      { icon: '⟳', title: 'Content Scheduler', desc: 'Plan and publish to multiple platforms on a schedule. No more manual posting.' },
      { icon: '⟡', title: 'Repurpose Engine', desc: 'Turn a blog post into 10 social posts, 3 email snippets, and a carousel — automatically.' },
      { icon: '◎', title: 'Performance Insights', desc: 'Connect your analytics and let Lumina tell you what\'s working and what to create next.' },
    ],
  },
];

function FeaturesPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimateIn>
            <div className="hero-badge" style={{ margin: '0 auto 2rem' }}>
              <span className="dot" />
              6 core modules · 30+ tools
            </div>
            <h1 style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              Every tool your creative<br />
              <span className="gradient-text">team will ever need</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '1.5rem auto 2.5rem', textAlign: 'center', fontWeight: 300 }}>
              Lumina replaces your writing tool, design tool, scheduling tool, and analytics tool.
              One subscription. One workflow.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary btn-large" onClick={openModal}>Start for free</button>
              <a href="#features-detail" className="btn-outline">Explore features ↓</a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section id="features-detail">
        <div className="container">
          <AnimateIn className="section-head">
            <div className="section-label">Core modules</div>
            <h2>Six features. One unified studio.</h2>
            <p>Each module is designed to work independently or together as a seamless creative pipeline.</p>
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

      {/* EXTENDED FEATURES BY CATEGORY */}
      {EXTENDED_FEATURES.map((category) => (
        <section key={category.category} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="container">
            <AnimateIn className="section-head">
              <div className="section-label">{category.category}</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                {category.category === 'Writing' && 'Generate any content, in any format'}
                {category.category === 'Design' && 'Designs that look professionally made'}
                {category.category === 'Automation' && 'Build workflows that scale without you'}
              </h2>
            </AnimateIn>
            <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {category.items.map((item, i) => (
                <AnimateIn key={item.title} delay={i} className="feature-card">
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </main>
  );
}

export default FeaturesPage;
