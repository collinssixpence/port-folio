import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Coding Instructor / Youth Mentor',
      company: 'Uncommon.Org / Community Outreach',
      period: 'Present',
      points: [
        'Taught block-based programming (Scratch) and foundational computer literacy to primary and secondary school students across Harare.',
        'Simplified complex algorithmic logic and computational thinking for young learners, boosting youth digital literacy.',
        'Fostered strong communication, leadership, and public speaking skills while presenting tech curriculum to schools.'
      ]
    },
    {
      role: 'Software Engineering Student Developer',
      company: 'Uncommon.Org',
      period: '2025 - 2026',
      points: [
        'Engaged in intensive project-based software engineering training covering full-stack web engineering, API development, and UI/UX best practices.',
        'Collaborated with peer developers using Git version control to complete client and internal web initiatives.'
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Leadership</h2>
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