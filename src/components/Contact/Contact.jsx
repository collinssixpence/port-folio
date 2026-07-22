import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    alert(`Transmission acknowledged from: ${formData.email}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Initiate Contact</h2>
          <div className="header-line"></div>
        </div>

        <div className="contact-split-matrix">
          <div className="contact-meta-channels">
            <h3 className="channels-headline">Let’s engineer something exceptional together.</h3>
            <p className="channels-subtext"> Have a technical challenge, system bottleneck, or clean enterprise launch requirement? Shoot me an email or trace my coordinates through standard vectors.</p>
            
            <div className="channels-directory">
              <div className="dir-item">
                <span className="dir-label">Email Node</span>
                <a href="mailto:collinssixpence2@example.com" className="dir-link">collinssixpence</a>
              </div>
              <div className="dir-item">
                <span className="dir-label">Secure Telecom</span>
                <a href="tel:0781367005" className="dir-link">0781367005</a>
              </div>
            </div>

            <div className="social-links-cluster">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="soc-circle">In</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="soc-circle">Gh</a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="soc-circle">Wa</a>
            </div>
          </div>

          <form className="premium-contact-form" onSubmit={handleFormSubmission}>
            <div className="form-row">
              <label>Identification / Name</label>
              <input 
                type="text" 
                required 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                placeholder="e.g., Jane Doe"
              />
            </div>
            <div className="form-row">
              <label>Return Transmission Node / Email</label>
              <input 
                type="email" 
                required 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                placeholder="e.g., engineer@company.com"
              />
            </div>
            <div className="form-row">
              <label>Message Content payload</label>
              <textarea 
                rows="5" 
                required 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                placeholder="Describe project constraints, technology parameters..."
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              <span>Dispatch Message Payload</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;