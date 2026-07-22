import React from 'react';
import './Certifications.css';

// Import certificate image (adjust path to actual file in the project)
import cert from '../../assets/certi.png'; // 1. Import the image file  

const Certifications = () => {
  const credentials = [
    {
      title: 'Advanced Full-Stack Engineering Blueprint',
      issuer: 'Technical Systems Institute',
      date: '2025',
      id: 'ID: FE-992381-X',
      image: cert 
    },
    {
      title: 'Enterprise Architecture & Cloud Optimization',
      issuer: 'Coursera',
      date: '2024',
      id: 'ID: CA-110294-M',
      image: cert  // 2. Add the imported image variable here
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
          {credentials.map((cert, idx) => (
            <div key={idx} className="cert-corporate-badge">
              {/* 3. Display the certificate image at the top of the badge */}
              <div className="cert-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`} 
                  className="cert-image" 
                />
              </div>

              <div className="badge-guts">
                <div className="badge-branding">
                  <div className="branding-icon-shell">⬡</div>
                  <div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
                <div className="badge-footer-meta">
                  <span className="cert-date">{cert.date}</span>
                  <span className="cert-id-string">{cert.id}</span>
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