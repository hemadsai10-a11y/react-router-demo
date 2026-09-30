import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.topMenuBar}>
      <div style={styles.brandTitle}>ReactEngine v5</div>
      <div style={styles.navigationLinks}>
        <Link to="/" style={styles.navLinkItem}>Home Base</Link>
        <Link to="/about" style={styles.navLinkItem}>Overview Info</Link>
        <Link to="/register" style={styles.navLinkItem}>Secure Registry</Link>
      </div>
    </nav>
  );
}

const styles = {
  topMenuBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1d3557',
    padding: '1rem 2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  brandTitle: {
    color: '#f1faee',
    fontSize: '1.3rem',
    fontWeight: '700'
  },
  navigationLinks: {
    display: 'flex',
    gap: '1.5rem'
  },
  navLinkItem: {
    color: '#a8dadc',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500'
  }
};
