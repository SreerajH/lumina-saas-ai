import { useState } from 'react';
import AnimateIn from '../components/AnimateIn';
import { api } from '../api';

const CONTACT_REASONS = [
  { icon: '✦', title: 'Sales & pricing', desc: 'Talk to our team about Pro or Team plans, volume discounts, or custom enterprise pricing.' },
  { icon: '◈', title: 'Technical support', desc: 'Having trouble with a feature or integration? Our support team responds within 4 hours.' },
  { icon: '⟡', title: 'Press & partnerships', desc: 'Media inquiries, partnership opportunities, or co-marketing requests.' },
];

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    try {
      const data = await api.contact({ name, email, message });
      setSuccess(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ paddingBottom: '3rem' }}>
        <div className="hero-glow" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimateIn>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Get in touch
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '440px', margin: '0 auto', textAlign: 'center', fontWeight: 300 }}>
              We'd love to hear from you. Our team typically responds within a few hours.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            {/* FORM */}
            <AnimateIn>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border2)',
                borderRadius: '20px',
                padding: '2.5rem',
              }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send a message</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2rem', fontWeight: 300 }}>
                  We'll get back to you within 24 hours.
                </p>

                {success ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                    <p style={{ color: '#34d399', fontSize: '1rem', marginBottom: '0.5rem' }}>{success}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Your name</label>
                      <input id="contact-name" className="form-input" type="text" placeholder="Alex Johnson" value={form.name} onChange={update('name')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email address</label>
                      <input id="contact-email" className="form-input" type="email" placeholder="you@company.com" value={form.email} onChange={update('email')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        className="form-input form-textarea"
                        placeholder="Tell us what's on your mind..."
                        value={form.message}
                        onChange={update('message')}
                      />
                    </div>
                    {error && <p className="form-error">{error}</p>}
                    <button type="submit" className="btn-plan primary" disabled={loading} style={{ marginTop: '0.5rem' }}>
                      {loading ? 'Sending...' : 'Send message →'}
                    </button>
                  </form>
                )}
              </div>
            </AnimateIn>

            {/* CONTACT REASONS */}
            <div>
              <AnimateIn>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>How can we help?</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.7 }}>
                  Whether you're evaluating Lumina for your team, need technical help, or want to explore a partnership — we're here.
                </p>
              </AnimateIn>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {CONTACT_REASONS.map((r, i) => (
                  <AnimateIn key={r.title} delay={i + 1}>
                    <div style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '14px',
                      padding: '1.5rem',
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'flex-start',
                    }}>
                      <div className="feature-icon" style={{ flexShrink: 0, marginBottom: 0 }}>{r.icon}</div>
                      <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{r.title}</h3>
                        <p style={{ color: 'var(--muted)', fontSize: '0.87rem', fontWeight: 300, lineHeight: 1.6 }}>{r.desc}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              <AnimateIn delay={4}>
                <div style={{
                  marginTop: '2rem',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(124,111,255,0.08)',
                  border: '1px solid rgba(124,111,255,0.2)',
                  borderRadius: '12px',
                }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 300 }}>
                    Average response time: <span style={{ color: 'var(--text)', fontWeight: 500 }}>under 4 hours</span> on business days.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
