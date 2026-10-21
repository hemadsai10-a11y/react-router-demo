
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToFeatures = () => {
    setMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById('features')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon">◇</span>
          <span>NexusFlow</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <button className="nav-link" onClick={goToFeatures}>Platform</button>
          <button className="nav-link" onClick={goToFeatures}>Solutions</button>
          <button className="nav-link" onClick={goToFeatures}>Pricing</button>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            Company
          </NavLink>
          <NavLink to="/register" className="nav-link login-link" onClick={() => setMenuOpen(false)}>
            Log In
          </NavLink>
          <NavLink to="/register" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get Started
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
