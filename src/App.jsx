
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import './App.css';

function Home() {
  return (
    <section className="page-card">
      <h1>Welcome Home</h1>
      <p>
        Welcome to our website! Explore our services and discover
        how our platform makes things simple.
      </p>
      <a className="primary-button" href="/about">
        Learn More
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="page-card">
      <h1>About Our System</h1>
      <p>
        This responsive React website uses React Router to navigate
        between pages without a full browser reload.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-canvas">
        <Navbar />
        <main className="viewport-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<ContactForm />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
