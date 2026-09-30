import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

const Home = () => (
  <div style={styles.pageCard}>
    <h2>🏠 Welcome Home</h2>
    <p>This is the landing view managed seamlessly via client-side React Router mechanisms.</p>
  </div>
);

const About = () => (
  <div style={styles.pageCard}>
    <h2>ℹ️ About Our System</h2>
    <p>This single-page app structure prevents browser reloading when flicking between layouts.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div style={styles.appCanvas}>
        {/* Render Modular Clean Top Nav */}
        <Navbar />

        {/* Dynamic Context Viewport Wrapper */}
        <main style={styles.viewportBody}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  appCanvas: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f1faee',
    minHeight: '100vh',
    margin: 0
  },
  viewportBody: {
    maxWidth: '700px',
    margin: '4rem auto',
    padding: '0 1rem'
  },
  pageCard: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(29, 53, 87, 0.1)'
  }
};
