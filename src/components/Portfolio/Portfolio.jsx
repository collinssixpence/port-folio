import React, { useState } from 'react';
import './Portfolio.css';

// 1. Import your project images here
import cert from '../../assets/certi.png'; 
// Replace these paths with your real local image files when available


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectData = [
    {
      id: 1,
      title: 'DBMS',
      subtitle: 'Learning platform for database management systems',
      location: 'Harare, Zimbabwe',
      category: 'Software Engineering',
      image: cert, // Assign imported image
      description:
        'DBMS Learning Platform is an educational web application tailored for students and aspiring software engineers looking to solidify their knowledge of database management systems.',
      features: [
        'Interactive SQL Query Runner',
        'Topic-Based Multiple Choice Quizzes',
        'Real-Time Quiz Scoring & Feedback',
        'User Learning Progress Dashboard',
        'Visual Database Schema Diagrams',
      ],
      techStack: ['React.js', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/collinssixpence/DBMS.git',
      demo: 'https://vite-project-six-nu.vercel.app/',
    },
    {
      id: 2,
      title: 'Shoes Closet',
      subtitle: 'Modern Footwear E-Commerce Platform',
      location: 'Global Deploy',
      category: 'UI/UX',
      image: cert, // Assign imported image
      description:
        'A premium retail journey focusing heavily on immersive frame-rate stability, reactive cart mutations, and micro-interaction visual indicators.',
      features: [
        'Custom structural variant engine',
        'Optimized persistent lazy-loading',
        'Stripe checkout API bindings',
      ],
      techStack: ['React.js', 'TypeScript', 'CSS3 Modules', 'Figma'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Apex Venture Hub',
      subtitle: 'SaaS Business Optimization Hub',
      location: 'Distributed Architecture',
      category: 'Ventures',
      image: cert, // Assign imported image
      description:
        'A structural metadata dashboard optimized for venture tracking, strategic asset distributions, and unified automated marketing funnel diagnostics.',
      features: [
        'Asynchronous event streaming metrics',
        'Custom canvas data reports',
        'Encrypted parameter management',
      ],
      techStack: ['Python', 'Django', 'React.js', 'Tailwind Grid'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  const filters = ['All', 'Software Engineering', 'UI/UX', 'Ventures'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectData
      : projectData.filter((project) => project.category === activeFilter);

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Selected Productions</h2>
          <div className="header-line"></div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-wrapper">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${
                activeFilter === filter ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              <span className="filter-dot"></span>
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Project Image Container */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="project-image"
                />
                <div className="image-overlay-glow"></div>
                <span className="project-location-badge">
                  {project.location}
                </span>
              </div>

              {/* Card Details */}
              <div className="project-details">
                <div className="project-meta">
                  <span className="project-category-tag">
                    {project.category}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features-list">
                  <h5>Core Features Architecture:</h5>
                  <ul>
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <span className="feature-bullet">&gt;</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-pills">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-action-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link github-link"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link demo-link"
                  >
                    <span>Live Architecture</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;