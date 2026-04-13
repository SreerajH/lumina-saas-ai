import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ onStartFree }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Lumina</Link>

      {!isAuthPage && (
        <ul className="nav-links">
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/#how">How it works</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      )}

      <div className="nav-cta">
        <Link to="/login" className="btn-ghost">Sign in</Link>
        <button onClick={onStartFree} className="btn-primary">
          Start free →
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
