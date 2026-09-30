import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let runtimeErrors = { username: '', email: '' };
    let validationPassed = true;

    if (!formData.username.trim()) {
      runtimeErrors.username = 'Account username cannot be blank.';
      validationPassed = false;
    }

    const structuralEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      runtimeErrors.email = 'An active email account is required.';
      validationPassed = false;
    } else if (!structuralEmailRegex.test(formData.email)) {
      runtimeErrors.email = 'Please provide a standard structured email format.';
      validationPassed = false;
    }

    setErrors(runtimeErrors);
    if (validationPassed) setIsSubmitted(true);
  };

  return (
    <div style={styles.pageCard}>
      <h2>📝 Secure Gateway Registry</h2>
      {isSubmitted ? (
        <div style={styles.successNotification}>
          <strong>Verification Cleared!</strong> User credentials safely registered inside system hooks.
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} style={styles.formLayout}>
          <div style={styles.inputContainer}>
            <label style={styles.formLabel}>User Profile Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{...styles.textInput, borderColor: errors.username ? '#e63946' : '#ccc'}}
              placeholder="Username here..."
            />
            {errors.username && <span style={styles.errorText}>{errors.username}</span>}
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.formLabel}>Electronic Mail Address</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{...styles.textInput, borderColor: errors.email ? '#e63946' : '#ccc'}}
              placeholder="user@domain.com"
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          <button type="submit" style={styles.actionBtn}>Authorize Workspace</button>
        </form>
      )}
    </div>
  );
}

const styles = {
  pageCard: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(29, 53, 87, 0.1)'
  },
  formLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  formLabel: {
    fontWeight: '600',
    color: '#1d3557',
    fontSize: '0.9rem'
  },
  textInput: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  errorText: {
    color: '#e63946',
    fontSize: '0.85rem',
    fontWeight: '500'
  },
  actionBtn: {
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    padding: '0.9rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '0.5rem'
  },
  successNotification: {
    backgroundColor: '#d1e7dd',
    color: '#0f5132',
    border: '1px solid #badbcc',
    padding: '1.25rem',
    borderRadius: '6px',
    marginTop: '1rem'
  }
};
