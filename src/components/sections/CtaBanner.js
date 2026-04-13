import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AnimateIn from '../AnimateIn';
import { ModalContext } from '../../App';

function CtaBanner() {
  const { openModal } = useContext(ModalContext);

  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <AnimateIn>
          <div className="cta-box">
            <h2>Ready to create 10× faster?</h2>
            <p>
              Join 12,000+ creators who've made Lumina their creative HQ.
              Start for free — no card required.
            </p>
            <div className="cta-actions">
              <button className="btn-primary btn-large" onClick={openModal}>
                Get started free →
              </button>
              <Link to="/pricing" className="btn-outline">See pricing</Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default CtaBanner;
