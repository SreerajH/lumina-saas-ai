import { useContext } from 'react';
import { ModalContext } from '../../App';

function HeroSection() {
  const { openModal } = useContext(ModalContext);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow2" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Now in public beta — join 12,000+ creators
          </div>

          <h1>
            Write. Design. Ship.<br />
            <span className="gradient-text">With AI that thinks.</span>
          </h1>

          <p className="hero-sub">
            Lumina combines AI writing, visual design, and workflow automation in one seamless studio.
            From first draft to finished product — 10× faster.
          </p>

          <div className="hero-actions">
            <button className="btn-primary btn-large" onClick={openModal}>
              Start for free — no card needed
            </button>
            <a href="#how" className="btn-outline">See how it works ↓</a>
          </div>

          <p className="hero-note">
            Free plan includes 3 projects · No credit card required · Cancel anytime
          </p>
        </div>

        {/* PRODUCT MOCKUP */}
        <div className="hero-mockup-wrap">
          <div className="mockup-frame">
            <div className="mockup-bar">
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-url">app.lumina.ai/studio</div>
            </div>

            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="sidebar-logo">Lumina</div>
                <div className="sidebar-item active">
                  <div className="sidebar-item-dot" /> Writing Studio
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-item-dot" /> Design Canvas
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-item-dot" /> Brand Kit
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-item-dot" /> Automation
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-item-dot" /> Analytics
                </div>
              </div>

              <div className="mockup-main">
                <div className="mockup-header-row">
                  <div className="mockup-title">Product Launch Post</div>
                  <div className="mockup-chip">AI Writing</div>
                </div>

                <div className="mockup-editor">
                  <span className="ac3">Prompt:</span>{' '}
                  <span className="highlight">Write a compelling LinkedIn post for our SaaS launch</span>
                  <br /><br />
                  <span className="ac">Lumina AI:</span>{' '}
                  <span className="highlight">Excited to introduce something we've been quietly building for the last 8 months...</span>{' '}
                  The way teams create content is broken. We copy-paste between 6 tools, lose brand consistency,
                  and spend 3 hours writing what should take 20 minutes.{' '}
                  <span className="highlight">That ends today. 🚀</span>
                  <span className="mockup-cursor" />
                </div>

                <div className="mockup-actions-row">
                  <button className="mockup-btn">✦ Regenerate</button>
                  <button className="mockup-btn ghost">Adjust tone</button>
                  <button className="mockup-btn ghost">Make shorter</button>
                </div>

                <div className="mockup-stats-row">
                  <div className="mockup-stat">
                    <div className="mockup-stat-val">94</div>
                    <div className="mockup-stat-label">Engagement score</div>
                  </div>
                  <div className="mockup-stat">
                    <div className="mockup-stat-val">B2B</div>
                    <div className="mockup-stat-label">Audience fit</div>
                  </div>
                  <div className="mockup-stat">
                    <div className="mockup-stat-val">2m</div>
                    <div className="mockup-stat-label">Read time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
