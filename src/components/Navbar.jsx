
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">R</span>
          <span>ReactEngine</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div
          id="main-navigation"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
        >
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink to="/register" className="nav-cta" onClick={closeMenu}>
            Get Started <span>→</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
