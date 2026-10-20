
import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ''
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^\+?[0-9\s()-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({ username: '', email: '', phone: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="contact-card">
      <div className="contact-heading">
        <span className="contact-icon">✉</span>
        <p className="contact-eyebrow">LET'S CONNECT</p>
        <h1>Get in touch</h1>
        <p className="contact-description">
          Fill in your details below. We'll help you get started.
        </p>
      </div>

      {isSubmitted ? (
        <div className="success-notification" role="status">
          <div className="success-icon">✓</div>
          <h2>Form submitted successfully!</h2>
          <p>
            Thank you, {formData.username}. Your details passed
            validation on this page.
          </p>
          <p className="privacy-note">
            This demo does not send or store your information on a server.
          </p>
          <button type="button" className="submit-button" onClick={resetForm}>
            Submit another response
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="username">Full name</label>
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="name"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your full name"
              aria-invalid={Boolean(errors.username)}
              aria-describedby={errors.username ? 'username-error' : undefined}
            />
            {errors.username && (
              <span id="username-error" className="error-text">
                {errors.username}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-text">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <span id="phone-error" className="error-text">
                {errors.phone}
              </span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Submit details <span>→</span>
          </button>

          <p className="form-note">
            All fields are required.
          </p>
        </form>
      )}
    </section>
  );
}
