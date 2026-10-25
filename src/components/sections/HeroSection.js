import { useContext } from 'react';
import { ModalContext } from '../../App';

const VOICE_TICKS = 24;
const VOICE_ON = 22; // ≈ 94%

function HeroSection() {
  const { openModal } = useContext(ModalContext);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-meta mono">
          <span className="live-dot" />
          Public beta <span className="sep">/</span> 12,000+ creators <span className="sep">/</span> v0.9
        </div>

        <h1 className="hero-title">
          Make things that sound like{' '}
          <span className="strike">a robot</span>
          <span className="insert">you.</span>
        </h1>

        <div className="hero-row">
          <p className="hero-sub">
            Lumina is a writing and design studio that learns your voice first — then drafts,
            designs and ships work that reads like you wrote it on a good day.
          </p>
          <div>
            <div className="hero-actions">
              <button className="btn-primary btn-large" onClick={openModal}>
                Start free <span className="arrow">→</span>
              </button>
              <a href="#how" className="btn-outline">See it edit</a>
            </div>
            <p className="hero-note mono">Free plan · No card · 3 projects</p>
          </div>
        </div>

        {/* PRODUCT STAGE */}
        <div className="stage-wrap">
          <div className="stage" aria-label="Lumina editor preview">
            <div className="stage-bar">
              <div className="crumbs">Northwind <span>/</span> Launch week <span>/</span> <b>LinkedIn post</b></div>
              <div className="seg">
                <span className="on">Write</span>
                <span>Design</span>
                <span>Ship</span>
              </div>
              <div className="bar-right">
                <div className="faces">
                  <i style={{ background: 'var(--red)' }}>MP</i>
                  <i style={{ background: 'var(--moss)' }}>JC</i>
                  <i style={{ background: 'var(--ink)' }}>SR</i>
                </div>
                <span className="share-btn">Share</span>
              </div>
            </div>

            <div className="stage-body">
              <aside className="rail">
                <div className="rail-label">Drafts</div>
                <div className="rail-item on"><span className="kind">LI</span> Launch post</div>
                <div className="rail-item"><span className="kind">EM</span> Waitlist email</div>
                <div className="rail-item"><span className="kind">AD</span> Meta ad · v3</div>
                <div className="rail-item"><span className="kind">BL</span> Founder's note</div>
                <div className="rail-sep" />
                <div className="rail-label">Brand</div>
                <div className="rail-item"><span className="kind">Aa</span> Voice profile</div>
                <div className="rail-item"><span className="kind">◐</span> Kit &amp; colours</div>
              </aside>

              <div className="sheet">
                <div className="sheet-meta">Draft 3 · Lumina edited 2 min ago</div>
                <h4>We built the tool we kept wishing existed.</h4>
                <p>
                  For eight months we <del>have been diligently working on</del>{' '}
                  <ins>quietly built</ins> something for people who write for a living.
                  <span className="mark-n">1</span>
                </p>
                <p>
                  Content is broken. We copy-paste between six tools, lose the voice that made
                  people follow us, and <del>leverage synergies to</del> <ins>spend three hours on</ins>{' '}
                  what should take twenty minutes.<span className="mark-n">2</span>
                </p>
                <p>
                  Today that ends. Lumina is open to everyone<span className="type-cursor" />
                </p>
              </div>

              <aside className="panel">
                <div>
                  <div className="panel-head">
                    <span className="mono">Voice match</span>
                    <span className="mono">Northwind</span>
                  </div>
                  <div className="voice-score">94<small>%</small></div>
                  <div className="ticks">
                    {Array.from({ length: VOICE_TICKS }, (_, i) => (
                      <i key={i} className={i < VOICE_ON ? '' : 'off'} />
                    ))}
                  </div>
                </div>
                <div className="chips">
                  <span className="chip">Warm</span>
                  <span className="chip">Direct</span>
                  <span className="chip">No jargon</span>
                  <span className="chip">Short lines</span>
                </div>
                <div className="suggestion done">
                  <div className="s-top"><span className="mark-n">1</span> Too formal for you</div>
                  <p>You rarely say "diligently". Accepted.</p>
                </div>
                <div className="suggestion">
                  <div className="s-top"><span className="mark-n">2</span> Cut the jargon</div>
                  <p>"Leverage synergies" scores 12% on your voice. Try something concrete.</p>
                  <div className="s-actions"><span className="ok">Accept</span><span>Skip</span></div>
                </div>
              </aside>
            </div>
          </div>

          <div className="float-card" aria-hidden="true">
            <div className="poster">
              <div className="poster-sun" />
              <div className="poster-big">Write<br />like <em>you.</em></div>
              <div className="poster-foot"><span>Northwind</span><span>1080×1350</span></div>
            </div>
            <div className="cap"><span>Design · auto</span><span>On brand</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
