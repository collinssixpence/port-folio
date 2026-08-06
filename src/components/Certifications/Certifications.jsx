import React from 'react';
import './Certifications.css';

// Import certificate images
import Software from '../../assets/Softwarecert.png'; 
import Python from '../../assets/Pythoncert.png'; 

const Certifications = () => {
  const credentials = [
    {
      title: 'Introduction to Software Engineering',
      issuer: 'Coursera',
      date: '2026',
      id: 'ID: FE-992381-X',
      image: Software,
      link: '#' // Add external verification URL here if you have one
    },
    {
      title: 'Crash Course on Python',
      issuer: 'Coursera',
      date: '2026',
      id: 'ID: CA-110294-M',
      image: Python,
      link: '#'
    }
  ];

  return (
    <section className="certs-section">
      <div className="certs-container">
        <div className="section-header">
          <h2 className="section-title">Verified Credentials</h2>
          <div className="header-line"></div>
        </div>

        <div className="certs-grid-layout">
          {credentials.map((certItem, idx) => (
            <div key={idx} className="cert-corporate-badge">
              {/* Image Preview Box */}
              <div className="cert-image-wrapper">
                <img 
                  src={certItem.image} 
                  alt={`${certItem.title} Certificate`} 
                  className="cert-image" 
                />
              </div>

              {/* Card Details */}
              <div className="badge-guts">
                <div className="badge-branding">
                  <div className="branding-icon-shell">⬡</div>
                  <div>
                    <h3 className="cert-title">{certItem.title}</h3>
                    <p className="cert-issuer">{certItem.issuer}</p>
                  </div>
                </div>

                <div className="badge-footer-meta">
                  <span className="cert-date">{certItem.date}</span>
                  <span className="cert-id-string">{certItem.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;