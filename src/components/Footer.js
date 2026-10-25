import { Link } from 'react-router-dom';
import { useInView } from './AnimateIn';

const WORDMARK = 'Lumina.'.split('');

function Footer() {
  const [markRef, markInView] = useInView(0.2);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ fontSize: '2rem' }}>Lumina<span className="dot-mark">.</span></Link>
            <p>A writing and design studio that learns how you sound — then helps you sound like that more often.</p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Writing Studio</Link></li>
              <li><Link to="/features">Design Engine</Link></li>
              <li><Link to="/features">Automation</Link></li>
              <li><Link to="/features">Analytics</Link></li>
              <li><Link to="/features">Integrations</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Press</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/">Documentation</Link></li>
              <li><Link to="/">API</Link></li>
              <li><Link to="/">Community</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Lumina AI, Inc. · Set in Instrument Serif, Instrument Sans &amp; Fira Code</span>
          <div className="footer-social">
            <a href="/" className="social-link">X</a>
            <a href="/" className="social-link">LinkedIn</a>
            <a href="/" className="social-link">YouTube</a>
            <a href="/" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div ref={markRef} className={`footer-wordmark${markInView ? ' visible' : ''}`} aria-hidden="true">
        {WORDMARK.map((ch, i) => (
          <span key={i} className={ch === '.' ? 'dot' : ''} style={{ '--i': i }}>{ch}</span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
