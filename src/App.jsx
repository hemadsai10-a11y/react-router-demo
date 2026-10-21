
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import './App.css';

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <span className="version-badge">
            <span className="live-dot"></span>
            V2.0 IS NOW LIVE
          </span>

          <h1>
            Automate your
            <span> data workflow </span>
            with precision.
          </h1>

          <p className="hero-description">
            Scale your SaaS infrastructure with our next-generation
            intelligence platform. Designed for high-performance
            engineering teams who demand speed and reliability.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Start Free Trial <span>→</span>
            </Link>
            <a href="#features" className="secondary-button">
              <span className="play-icon">▷</span> Watch Demo
            </a>
          </div>

          <div className="trusted">
            <p>TRUSTED BY INDUSTRY LEADERS</p>
            <div className="trusted-logos">
              <span>♧ VELOCITY</span>
              <span>✣ SYNC</span>
              <span>▤ STACK</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>
          <div className="dashboard">
            <div className="dashboard-top">
              <div className="window-dots">
                <i></i><i></i><i></i>
              </div>
              <span className="dashboard-pill"></span>
            </div>

            <div className="dashboard-grid">
              <div className="metric-panel">
                <p>Real-time Throughput</p>
                <h3>1.2 TB/s</h3>
                <div className="bar-chart">
                  <i></i><i></i><i></i><i></i><i></i>
                </div>
              </div>

              <div className="metric-panel">
                <p>System Health</p>
                <h3 className="health-value">99.9%</h3>
                <div className="health-line">
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                  <span></span><span></span>
                </div>
              </div>
            </div>

            <div className="insight-card">
              <span className="insight-icon">ϟ</span>
              <div>
                <small>INSIGHTS</small>
                <strong>Growth up 24%</strong>
              </div>
              <span className="insight-check">✓</span>
            </div>

            <div className="analytics-panel">
              <div className="analytics-heading">
                <span>Usage Analytics</span>
                <span className="chart-dots">● ●</span>
              </div>
              <svg
                className="analytics-chart"
                viewBox="0 0 440 140"
                role="img"
                aria-label="Usage analytics trend line"
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1264ff" stopOpacity=".28" />
                    <stop offset="100%" stopColor="#1264ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 105 C35 65 70 45 108 70 S170 95 210 45 S275 12 310 65 S365 130 395 85 S425 35 440 20 L440 140 L0 140 Z"
                  fill="url(#chartFill)"
                />
                <path
                  d="M0 105 C35 65 70 45 108 70 S170 95 210 45 S275 12 310 65 S365 130 395 85 S425 35 440 20"
                  fill="none"
                  stroke="#1264ff"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid" id="features">
        <article className="stat-card">
          <p>Uptime Guarantee</p>
          <h2>99.99<span>%</span></h2>
        </article>
        <article className="stat-card">
          <p>Data Processed</p>
          <h2>2.5<span>PB</span></h2>
        </article>
        <article className="stat-card">
          <p>Active Users</p>
          <h2>120<span>K+</span></h2>
        </article>
        <article className="stat-card">
          <p>Global Regions</p>
          <h2>32<span>+</span></h2>
        </article>
      </section>

      <section className="features-section">
        <span className="section-eyebrow">BUILT FOR PERFORMANCE</span>
        <h2>Everything you need to move faster.</h2>
        <p>One intelligent platform to monitor, analyze, and optimize your workflow.</p>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon">ϟ</span>
            <h3>Real-time insights</h3>
            <p>Monitor important metrics and understand your data as it happens.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">⌘</span>
            <h3>Smart automation</h3>
            <p>Reduce repetitive work and keep your team's workflows moving.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">◇</span>
            <h3>Reliable by design</h3>
            <p>Keep your systems organized with clear analytics and health indicators.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="inner-page">
      <span className="section-eyebrow">ABOUT NEXUSFLOW</span>
      <h1>Make complex workflows feel simple.</h1>
      <p>NexusFlow is a modern concept platform designed to help teams understand data, monitor performance, and work more efficiently.</p>
      <Link to="/" className="primary-button">Explore Platform →</Link>
    </main>
  );
}

function NotFound() {
  return (
    <main className="inner-page">
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="primary-button">Back to Home →</Link>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<main className="form-page"><ContactForm /></main>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <span>✦ NexusFlow</span>
        <p>Built for better workflows. © 2026 NexusFlow.</p>
      </footer>
    </div>
  );
}
