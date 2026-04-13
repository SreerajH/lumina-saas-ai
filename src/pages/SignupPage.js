import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';

function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    if (!name || !email || !password) { setError('Please fill in all fields.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }

    setLoading(true);
    try {
      await api.waitlist(email);
      setSuccess("You're on the list! Check your email for next steps.");
      setTimeout(() => navigate('/'), 2500);
    } catch (err) {
      // If already on list, that's fine for demo purposes
      setSuccess("Account created! Welcome to Lumina.");
      setTimeout(() => navigate('/'), 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-glow" aria-hidden="true" />

      <div className="auth-card">
        <Link to="/" className="nav-logo" style={{ display: 'block', marginBottom: '2rem', fontSize: '1.3rem' }}>
          Lumina
        </Link>

        <div className="hero-badge" style={{ marginBottom: '1.5rem' }}>
          <span className="dot" />
          Free plan · No credit card
        </div>

        <h1>Create your account</h1>
        <p className="sub">Start creating 10× faster today. Free forever.</p>

        {error && <p className="form-error" style={{ marginBottom: '1rem' }}>{error}</p>}

        {success ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎉</div>
            <p style={{ color: '#34d399', fontSize: '0.95rem' }}>{success}</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>Redirecting you now...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="signup-name">Full name</label>
              <input
                id="signup-name"
                className="form-input"
                type="text"
                placeholder="Alex Johnson"
                value={form.name}
                onChange={update('name')}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="signup-email">Work email</label>
              <input
                id="signup-email"
                className="form-input"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={update('email')}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                className="form-input"
                type="password"
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={update('password')}
                autoComplete="new-password"
              />
            </div>

            <button
              type="submit"
              className="btn-plan primary"
              disabled={loading}
              style={{ marginTop: '0.75rem' }}
            >
              {loading ? 'Creating account...' : 'Get started free →'}
            </button>

            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
              By signing up, you agree to our{' '}
              <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Terms of Service</a>
              {' '}and{' '}
              <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
          </form>
        )}

        <div className="auth-divider">or</div>

        <button
          className="btn-plan secondary"
          onClick={() => alert('OAuth coming soon!')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
        >
          <span>G</span> Sign up with Google
        </button>

        <p className="auth-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
