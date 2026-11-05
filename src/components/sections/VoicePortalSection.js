import { useContext, useEffect, useState } from 'react';
import GlyphPortal from '@/components/ui/glyph-portal';
import { ModalContext } from '../../App';

const FACE = '"Instrument Sans", "Arial Black", Arial, sans-serif';
const FALLBACK = '"Arial Black", Arial, sans-serif';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Learned, not prompted',
    desc: 'Lumina studies your best work, not a generic dataset. Two minutes of examples, every draft after that.',
  },
  {
    num: '02',
    title: 'Edited in the open',
    desc: 'Every change is a tracked edit with a reason in the margin. Nothing slips into your copy unseen.',
  },
  {
    num: '03',
    title: 'Yours to keep',
    desc: 'Your writing never trains anyone else\'s model. Export everything, any time, in any format.',
  },
];

// GlyphPortal freezes whichever face is available when it mounts, so wait for
// Instrument Sans (already requested by public/index.html) before rendering it.
function useDisplayFace() {
  const [face, setFace] = useState(null);

  useEffect(() => {
    let settled = false;
    const finish = (value) => { if (!settled) { settled = true; setFace(value); } };
    const timeout = window.setTimeout(() => finish(FALLBACK), 1800);
    document.fonts
      .load('700 100px "Instrument Sans"', 'VOICE')
      .then((faces) => finish(faces.length ? FACE : FALLBACK), () => finish(FALLBACK));
    return () => { settled = true; clearTimeout(timeout); };
  }, []);

  return face;
}

function PortalField() {
  return <div className="vp-field" />;
}

function VoicePortalSection() {
  const { openModal } = useContext(ModalContext);
  const face = useDisplayFace();

  if (!face) {
    // Holds the opening frame's height so the page doesn't jump when the portal mounts.
    return <div className="vp-placeholder" role="status" aria-label="Loading" />;
  }

  return (
    <GlyphPortal
      word="VOICE"
      focusChar="O"
      fontFamily={face}
      fontWeight={700}
      scrollLength={2.6}
      enterLabel="Scroll to step inside"
      className="voice-portal"
      style={{
        '--gp-paper': 'var(--paper)',
        '--gp-ink': 'var(--ink)',
        '--gp-field': 'var(--red)',
        '--gp-foreground': 'var(--sheet)',
      }}
      background={<PortalField />}
      front={(
        <>
          <p className="vp-eyebrow mono">
            <span className="live-dot" /> Public beta <span className="sep">/</span> 12,000+ creators
          </p>
          <div className="vp-lockup">
            <h1 className="vp-headline">
              The writing studio that sounds like <em>you.</em>
            </h1>
            <div className="vp-actions">
              <button type="button" className="btn-primary btn-large" onClick={openModal}>
                Start free <span className="arrow">→</span>
              </button>
              <a href="#editor" className="btn-outline">See it edit</a>
            </div>
          </div>
        </>
      )}
    >
      <div className="vp-inside">
        <div className="vp-label mono">The idea</div>
        <h2>
          Your voice is the product. <em>We just give it more room.</em>
        </h2>
        <div className="vp-principles">
          {PRINCIPLES.map((p) => (
            <div key={p.num} className="vp-principle">
              <span className="vp-num mono">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <button type="button" className="btn-primary btn-large vp-cta" onClick={openModal}>
          Hear it in your voice <span className="arrow">→</span>
        </button>
      </div>
    </GlyphPortal>
  );
}

export default VoicePortalSection;
