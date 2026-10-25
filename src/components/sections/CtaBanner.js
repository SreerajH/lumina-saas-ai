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
          <div className="cta-red">
            <h2>Your next draft is <em>already</em> better.</h2>
            <div>
              <p>
                Join 12,000+ creators who made Lumina the place their work starts.
                Free to begin — no card, no sales call.
              </p>
              <div className="cta-actions">
                <button className="btn-primary btn-large" onClick={openModal}>
                  Start free <span className="arrow">→</span>
                </button>
                <Link to="/pricing" className="btn-outline">See pricing</Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default CtaBanner;
