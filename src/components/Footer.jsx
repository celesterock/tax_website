import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Foley Tax, OC home">
              <img src={logo} alt="Foley Tax, OC logo" className="footer-logo" />
            </Link>

            <div>
              <div className="footer-title">Foley Tax, OC</div>
              <div className="footer-rule" />
              <div className="footer-subtitle">
                Individual &amp; Business Tax Services
              </div>

              <p className="footer-description">
                Thoughtful tax preparation and planning for individuals, families,
                business owners, estates, and trusts.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-heading">Navigation</div>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-heading">Legal</div>

            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {year} Foley Tax, OC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}