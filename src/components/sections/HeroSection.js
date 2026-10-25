import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../App';
import { useInView, prefersReducedMotion } from '../AnimateIn';

const VOICE_TICKS = 24;
const CLOSING_LINE = 'Today that ends. Lumina is open to everyone.';

// The editor plays a short story once it scrolls into view:
// 1 = first suggestion accepted, 2 = closing line typing, 3 = second suggestion accepted.
function useEditorStory(start) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!start) return undefined;
    if (prefersReducedMotion()) {
      setStep(3);
      setTyped(CLOSING_LINE);
      return undefined;
    }
    const timers = [];
    timers.push(setTimeout(() => setStep(1), 700));
    timers.push(setTimeout(() => setStep(2), 1500));
    CLOSING_LINE.split('').forEach((_, i) => {
      timers.push(setTimeout(() => setTyped(CLOSING_LINE.slice(0, i + 1)), 1700 + i * 42));
    });
    timers.push(setTimeout(() => setStep(3), 1700 + CLOSING_LINE.length * 42 + 700));
    return () => timers.forEach(clearTimeout);
  }, [start]);

  return { step, typed };
}

function HeroSection() {
  const { openModal } = useContext(ModalContext);
  const [stageRef, stageInView] = useInView(0.3);
  const { step, typed } = useEditorStory(stageInView);
  const voice = step >= 3 ? 94 : step >= 1 ? 88 : 81;
  const voiceOn = Math.round((voice / 100) * VOICE_TICKS);

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
        <div className="stage-wrap" ref={stageRef}>
          <div className={`stage story-${step}`} aria-label="Lumina editor preview">
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
                <div className="sheet-meta">
                  Draft 3 · {step >= 3 ? 'Lumina edited just now' : 'Lumina is editing…'}
                </div>
                <h4>We built the tool we kept wishing existed.</h4>
                <p className={step >= 1 ? 'applied' : ''}>
                  For eight months we <span className="edit-del">have been diligently working on</span>
                  <span className="edit-ins"> quietly built</span> something for people who write for a living.
                  <span className="mark-n">1</span>
                </p>
                <p className={step >= 3 ? 'applied' : ''}>
                  Content is broken. We copy-paste between six tools, lose the voice that made
                  people follow us, and <span className="edit-del">leverage synergies to</span>
                  <span className="edit-ins"> spend three hours on</span>{' '}
                  what should take twenty minutes.<span className={`mark-n${step === 2 ? ' pulse' : ''}`}>2</span>
                </p>
                <p className="typed-line">
                  {typed}<span className="type-cursor" />
                </p>
              </div>

              <aside className="panel">
                <div>
                  <div className="panel-head">
                    <span className="mono">Voice match</span>
                    <span className="mono">Northwind</span>
                  </div>
                  <div className="voice-score">
                    <span key={voice} className="voice-num">{voice}</span><small>%</small>
                  </div>
                  <div className="ticks">
                    {Array.from({ length: VOICE_TICKS }, (_, i) => (
                      <i key={i} className={i < voiceOn ? '' : 'off'} style={{ '--i': i }} />
                    ))}
                  </div>
                </div>
                <div className="chips">
                  <span className="chip">Warm</span>
                  <span className="chip">Direct</span>
                  <span className="chip">No jargon</span>
                  <span className="chip">Short lines</span>
                </div>
                <div className={`suggestion${step >= 1 ? ' done' : ''}`}>
                  <div className="s-top"><span className="mark-n">1</span> Too formal for you</div>
                  <p>You rarely say "diligently".{step >= 1 && ' Accepted.'}</p>
                </div>
                <div className={`suggestion${step >= 3 ? ' done' : ''}`}>
                  <div className="s-top"><span className="mark-n">2</span> Cut the jargon</div>
                  <p>"Leverage synergies" scores 12% on your voice.{step >= 3 ? ' Accepted.' : ' Try something concrete.'}</p>
                  {step < 3 && (
                    <div className="s-actions">
                      <span className={`ok${step === 2 ? ' armed' : ''}`}>Accept</span><span>Skip</span>
                    </div>
                  )}
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
