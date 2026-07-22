import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: [
        { name: 'React.js', progress: '95%' },
        { name: 'JavaScript (ES6+)', progress: '92%' },
        { name: 'TypeScript', progress: '40%' },
        { name: 'HTML5 / CSS3 Layouts', progress: '95%' }
      ]
    },
    {
      title: 'Backend Systems',
      skills: [
        { name: 'Python Engineering', progress: '90%' },
        { name: 'Django Framework', progress: '85%' },
        { name: 'SQLite / REST Ecosystems', progress: '50%' }
      ]
    },
    {
      title: 'Engineering Tools & UX',
      skills: [
        { name: 'Git & Automated CI/CD', progress: '90%' },
        { name: 'Figma Systems Prototype', progress: '82%' },
        { name: 'VS Code Workflow Automation', progress: '95%' }
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
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.progress}</span>
                    </div>
                    <div className="skill-track">
                      <div 
                        className="skill-fill" 
                        style={{ '--target-width': skill.progress }}
                      ></div>
                    </div>
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