import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full-Stack Architect',
      company: 'Apex Tech Labs',
      period: '2024 - Present',
      points: [
        'Designed high-throughput data processing workflows handling millions of telemetry events weekly.',
        'Migrated key UI modules into strict TypeScript types, improving code reliability and compilation safety.',
        'Mentored junior engineering personnel on deep optimization targets across relational database indices.'
      ]
    },
    {
      role: 'Full-Stack Software Engineer',
      company: 'Vanguard Ventures',
      period: '2021 - 2024',
      points: [
        'Built full-stack product layers via robust Django services integrated directly with responsive React components.',
        'Reduced visual interaction layout delays by 35% through custom asset caching and lazy-loading systems.',
        'Deployed scalable automation webhooks to streamline payment processing validations securely.'
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional History</h2>
          <div className="header-line"></div>
        </div>

        <div className="timeline-layout">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-node">
              <div className="timeline-marker">
                <div className="marker-core"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header-block">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-details-list">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="bullet-token">//</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;