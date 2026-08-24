import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-branding">
            <span className="footer-logo">&lt;6ixcolly.dev /&gt;</span>
            <p className="footer-tagline">Architecting premium operational scalability frameworks.</p>
          </div>
          <button className="back-to-top-trigger" onClick={handleScrollTop} aria-label="Scroll to top">
            <span className="arrow-vector">↑</span> Back To Top
          </button>
        </div>
        <div className="footer-bottom-row">
          <span className="copyright-notice">&copy; 2026 Collins Sixpence. All technical engineering configurations preserved.</span>
          <div className="footer-legal-links">
            <span className="legal-stub">System Active</span>
            <div className="active-pulse-node"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;