import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ onStartFree }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;
    // Tucks away while scrolling down past the hero, returns on any scroll up.
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y < 400) setHidden(false);
      else if (y - lastY > 4) setHidden(true);
      else if (lastY - y > 4) setHidden(false);
      if (Math.abs(y - lastY) > 4) lastY = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <nav className={`nav-bar${scrolled ? ' scrolled' : ''}${hidden ? ' tucked' : ''}`}>
      <Link to="/" className="nav-logo">Lumina<span className="dot-mark">.</span></Link>

      {!isAuthPage ? (
        <ul className="nav-links">
          <li><Link to="/features">Features</Link></li>
          <li><a href="/#how">How it works</a></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Journal</Link></li>
        </ul>
      ) : <span />}

      <div className="nav-cta">
        <Link to="/login" className="btn-ghost">Sign in</Link>
        <button onClick={onStartFree} className="btn-primary">
          Start writing <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
