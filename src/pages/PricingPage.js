import AnimateIn from '../components/AnimateIn';
import PricingSection from '../components/sections/PricingSection';
import FaqSection from '../components/sections/FaqSection';
import CtaBanner from '../components/sections/CtaBanner';

const COMPARISON = [
  { feature: 'Active projects', starter: '3', pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'AI generations/month', starter: '50', pro: '1,000', team: 'Unlimited' },
  { feature: 'Writing Studio', starter: '✓', pro: '✓', team: '✓' },
  { feature: 'Design Engine', starter: '5 templates', pro: '200+ templates', team: '200+ templates' },
  { feature: 'Brand Voice Lock', starter: '—', pro: '✓', team: '✓' },
  { feature: 'Automation workflows', starter: '—', pro: '5', team: 'Unlimited' },
  { feature: 'Analytics', starter: '—', pro: 'Basic', team: 'Advanced' },
  { feature: 'Team seats', starter: '1', pro: '1', team: '5' },
  { feature: 'Priority support', starter: '—', pro: '—', team: '✓' },
  { feature: 'Custom onboarding', starter: '—', pro: '—', team: '✓' },
];

function PricingPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimateIn>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Simple pricing.<br />
              <span className="gradient-text">No surprises.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto', textAlign: 'center', fontWeight: 300 }}>
              Start free forever. Upgrade only when you need more power.
              Every plan includes our full AI engine.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* PRICING CARDS */}
      <PricingSection showHeading={false} />

      {/* COMPARISON TABLE */}
      <section style={{ paddingTop: '3rem', paddingBottom: '7rem' }}>
        <div className="container">
          <AnimateIn className="section-head" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', margin: '0 auto 1rem' }}>Compare</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>What's included in each plan</h2>
          </AnimateIn>

          <AnimateIn>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
                background: 'var(--surface)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}>
                <thead>
                  <tr style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontFamily: 'var(--font-display)', color: 'var(--muted)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                      Feature
                    </th>
                    {['Starter', 'Pro', 'Team'].map((plan) => (
                      <th key={plan} style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontFamily: 'var(--font-display)', color: plan === 'Pro' ? 'var(--accent2)' : 'var(--text)', fontWeight: 700 }}>
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: i < COMPARISON.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text)', fontWeight: 300 }}>{row.feature}</td>
                      {[row.starter, row.pro, row.team].map((val, j) => (
                        <td key={j} style={{
                          padding: '1rem 1.5rem',
                          textAlign: 'center',
                          color: val === '—' ? 'var(--muted)' : val === '✓' ? '#34d399' : 'var(--text)',
                          fontWeight: val === '✓' ? 600 : 300,
                        }}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
    </main>
  );
}

export default PricingPage;
