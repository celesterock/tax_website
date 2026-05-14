import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import "../styles/homepage.css";

function BrandLockup() {
  return (
    <Link
      to="/"
      onClick={() => {
        if (window.location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="navbar-brand"
      aria-label="Foley Tax, OC home"
    >
      <div className="navbar-logo-box">
        <img src={logo} alt="Foley Tax, OC logo" className="navbar-logo" />
      </div>

      <div className="navbar-brand-text">
        <div className="navbar-title">Foley Tax, OC</div>
        <div className="navbar-rule" />
        <div className="navbar-subtitle">Individual &amp; Business Tax Services</div>
      </div>
    </Link>
  );
}

function NavLink({ to, children, active = false }) {
  return (
    <Link to={to} className={`navbar-link ${active ? "navbar-link-active" : ""}`}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <BrandLockup />

        <div className="navbar-right">
          <nav className="navbar-nav">
            <NavLink to="/" active>
              Home
            </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/client-portal">Client Portal</NavLink>
          </nav>

          <Link to="/contact" className="navbar-cta">
            Schedule Consultation
          </Link>
        </div>

        <button className="navbar-menu-button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}