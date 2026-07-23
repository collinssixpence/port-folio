import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'HTML5 / CSS3 Layouts',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Backend Systems',
      skills: [
        'Python Engineering',
        'Django Framework',
        'PostgreSQL',
        'SQLite / REST Ecosystems'
      ]
    },
    {
      title: 'Engineering Tools & UX',
      skills: [
        'Git & Automated CI/CD',
        'Figma Systems Prototype',
        'VS Code Workflow Automation'
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="header-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card">
              <div className="skills-card-glow"></div>
              <h3 className="category-title">{category.title}</h3>
              
              {/* Refactored from progress bars to skill tags */}
              <div className="skills-pills-wrapper">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill-tag">
                    <span className="skill-bullet">&gt;</span>
                    <span className="skill-name-text">{skill}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;