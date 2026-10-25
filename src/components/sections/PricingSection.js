import { useState, useContext } from 'react';
import AnimateIn from '../AnimateIn';
import { ModalContext } from '../../App';

const PLANS = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    period: 'Free forever',
    desc: 'Perfect for freelancers and solo creators getting started with AI content.',
    features: [
      { text: '3 active projects', active: true },
      { text: '50 AI generations/month', active: true },
      { text: 'Writing Studio access', active: true },
      { text: '5 design templates', active: true },
      { text: 'Brand Voice Lock', active: false },
      { text: 'Automation workflows', active: false },
      { text: 'Analytics dashboard', active: false },
    ],
    cta: 'Get started free',
    ctaStyle: 'secondary',
    featured: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 39,
    annualPrice: 29,
    period: 'per month',
    desc: 'For serious creators and small teams who need consistent, high-quality output.',
    features: [
      { text: 'Unlimited projects', active: true },
      { text: '1,000 AI generations/month', active: true },
      { text: 'Writing + Design Studio', active: true },
      { text: 'All 200+ templates', active: true },
      { text: 'Brand Voice Lock', active: true },
      { text: '5 automation workflows', active: true },
      { text: 'Basic analytics', active: true },
    ],
    cta: 'Try Pro free for 14 days',
    ctaStyle: 'primary',
    featured: true,
  },
  {
    name: 'Team',
    monthlyPrice: 99,
    annualPrice: 79,
    period: 'per month, up to 5 seats',
    desc: 'For agencies and growing teams with multiple clients and high content volume.',
    features: [
      { text: 'Everything in Pro', active: true },
      { text: 'Unlimited AI generations', active: true },
      { text: 'Up to 5 team members', active: true },
      { text: 'Shared brand libraries', active: true },
      { text: 'Unlimited automations', active: true },
      { text: 'Advanced analytics', active: true },
      { text: 'Priority support + onboarding', active: true },
    ],
    cta: 'Start Team free',
    ctaStyle: 'secondary',
    featured: false,
  },
];

function PricingSection({ showHeading = true }) {
  const [annual, setAnnual] = useState(true);
  const { openModal } = useContext(ModalContext);

  return (
    <section id="pricing">
      <div className="container">
        {showHeading && (
          <AnimateIn className="head-split">
            <div>
              <div className="section-label">Pricing</div>
              <h2>Start free. <em>Pay when it pays.</em></h2>
            </div>
            <p>Every plan runs on the same engine and the same Voice Lock model. You only pay for volume and seats.</p>
          </AnimateIn>
        )}

        <div style={{ textAlign: 'center' }}>
          <div className="pricing-toggle" role="group" aria-label="Billing period">
            <button type="button" className={!annual ? 'on' : ''} onClick={() => setAnnual(false)} aria-pressed={!annual}>
              Monthly
            </button>
            <button type="button" className={annual ? 'on' : ''} onClick={() => setAnnual(true)} aria-pressed={annual}>
              Annually <span className="save-badge">Up to 25% off</span>
            </button>
          </div>
        </div>

        <AnimateIn className="pricing-grid">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              <div className="plan-top">
                <div className="plan-name">{plan.name}</div>
                {plan.featured && <div className="featured-badge">Most picked</div>}
              </div>
              <div className="plan-price">
                <sup>$</sup>
                {/* keyed so the figure re-mounts and rolls in on toggle */}
                <span key={annual ? 'a' : 'm'} className="price-roll">
                  {annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
              </div>
              <div className="plan-period">
                {plan.monthlyPrice === 0
                  ? 'Free forever'
                  : `${plan.period}${annual ? ', billed annually' : ''}`
                }
              </div>
              <div className="plan-desc">{plan.desc}</div>
              <div className="plan-divider" />
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f.text} className={f.active ? '' : 'inactive'}>
                    <span className="check">{f.active ? '✓' : '—'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <button
                className={`btn-plan ${plan.ctaStyle}`}
                onClick={openModal}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}

export default PricingSection;
