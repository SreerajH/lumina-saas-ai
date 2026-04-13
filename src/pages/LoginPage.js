import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setError('');
    setLoading(true);
    // Simulate auth delay — replace with real auth
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    // Demo: just navigate home
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-glow" aria-hidden="true" />

      <div className="auth-card">
        <Link to="/" className="nav-logo" style={{ display: 'block', marginBottom: '2rem', fontSize: '1.3rem' }}>
          Lumina
        </Link>

        <h1>Welcome back</h1>
        <p className="sub">Sign in to your Lumina account to continue.</p>

        {error && <p className="form-error" style={{ marginBottom: '1rem' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              className="form-input"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label className="form-label" htmlFor="login-password" style={{ marginBottom: 0 }}>Password</label>
              <a href="/" style={{ fontSize: '0.78rem', color: 'var(--accent)', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <input
              id="login-password"
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="btn-plan primary"
            disabled={loading}
            style={{ marginTop: '0.75rem' }}
          >
            {loading ? 'Signing in...' : 'Sign in →'}
          </button>
        </form>

        <div className="auth-divider">or</div>

        <button
          className="btn-plan secondary"
          onClick={() => alert('OAuth coming soon!')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
        >
          <span>G</span> Continue with Google
        </button>

        <p className="auth-link">
          Don't have an account? <Link to="/signup">Start free →</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
