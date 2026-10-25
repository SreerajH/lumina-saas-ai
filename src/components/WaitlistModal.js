import { useState } from 'react';
import { api } from '../api';

function WaitlistModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) { setError('Please enter your email address.'); return; }
    setError('');
    setLoading(true);
    try {
      const data = await api.waitlist(email);
      setSuccess(data.message);
      setEmail('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-badge">
          <div className="hero-badge" style={{ marginBottom: 0 }}>
            <span className="dot"></span>
            Now in public beta
          </div>
        </div>

        <h2>Start <em>writing.</em></h2>
        <p>
          Join 12,000+ creators already using Lumina. No credit card required —
          get instant access to the free plan.
        </p>

        {success ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--red)', lineHeight: 1, marginBottom: '1rem' }}>✓</div>
            <p className="form-success" style={{ fontSize: '1rem', marginTop: 0 }}>{success}</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
              Check your inbox for next steps.
            </p>
            <button className="btn-primary btn-large" onClick={onClose} style={{ marginTop: '1.5rem' }}>
              Got it!
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="modal-email">Email address</label>
              <input
                id="modal-email"
                className="form-input"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                autoFocus
              />
              {error && <p className="form-error">{error}</p>}
            </div>
            <button
              type="submit"
              className="btn-plan primary"
              disabled={loading}
              style={{ marginTop: '0.5rem' }}
            >
              {loading ? 'Joining...' : 'Get started free →'}
            </button>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', marginTop: '1rem' }}>
              Free plan · No credit card · Cancel anytime
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;
