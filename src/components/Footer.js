import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ fontSize: '1.5rem' }}>Lumina</Link>
            <p>The AI creative studio for modern teams. Write, design, and automate — all in one place.</p>
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
          <span className="footer-copy">© 2026 Lumina AI, Inc. All rights reserved.</span>
          <div className="footer-social">
            <a href="/" className="social-link" aria-label="Twitter/X">𝕏</a>
            <a href="/" className="social-link" aria-label="LinkedIn">in</a>
            <a href="/" className="social-link" aria-label="YouTube">▶</a>
            <a href="/" className="social-link" aria-label="Instagram">◎</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
