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
    cta: 'Start Pro free — 14 days',
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
          <AnimateIn>
            <div className="section-head" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 3rem' }}>
              <div className="section-label" style={{ justifyContent: 'center', margin: '0 auto 1rem' }}>
                Pricing
              </div>
              <h2>Simple pricing. No surprises.</h2>
              <p>Start free, scale when you're ready. Every plan includes our core AI engine.</p>
            </div>
          </AnimateIn>
        )}

        <div className="pricing-toggle">
          <span className="toggle-label" style={!annual ? { color: 'var(--text)' } : {}}>Monthly</span>
          <div
            className={`toggle-switch ${annual ? 'annual' : 'monthly'}`}
            onClick={() => setAnnual(!annual)}
            role="switch"
            aria-checked={annual}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setAnnual(!annual)}
          />
          <span className="toggle-label" style={annual ? { color: 'var(--text)' } : {}}>
            Annually <span className="save-badge">Save 35%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="featured-badge">Most Popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  {plan.monthlyPrice === 0 ? (
                    <><sup>$</sup>0</>
                  ) : (
                    <><sup>$</sup>{annual ? plan.annualPrice : plan.monthlyPrice}</>
                  )}
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
                      <span className="check">✓</span>
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
