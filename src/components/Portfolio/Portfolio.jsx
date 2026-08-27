import React, { useState } from 'react';
import './Portfolio.css';

// 1. Import project images
import cert from '../../assets/certi.png'; 
import food from '../../assets/Food.png'; 
import MyDBMS from '../../assets/MyDBMS.jpeg'; 
import Superfert from '../../assets/Superfert Landing Page.png'; 
import Vvid from '../../assets/Vivid.png'; 
import Car from '../../assets/car.png'; 
import Barber from '../../assets/Barber.png'; // Import your barber image file here

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectData = [
    {
      id: 1,
      title: 'Food Ordering App',
      subtitle: 'Full-stack online food ordering & restaurant system',
      location: 'Harare, Zimbabwe',
      category: 'Software Engineering',
      image: food,
      description:
        'A feature-rich full-stack web application for online food ordering. Integrates secure user authentication, interactive menu discovery, cart management, and seamless PostgreSQL database persistence.',
      features: [
        'JWT-based User Authentication & Authorization',
        'Interactive Food Item Catalog & Dynamic Cart',
        'Express RESTful API with Prisma ORM',
        'PostgreSQL Database Schema & Data Models',
        'Full-Stack Deployment on Vercel & Render',
      ],
      techStack: ['React.js', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/collinssixpence/food-ordering',
      demo: 'https://food-ordering-yft7.vercel.app/',
    },
    {
      id: 2,
      title: 'DBMS',
      subtitle: 'Learning platform for database management systems',
      location: 'Harare, Zimbabwe',
      category: 'Software Engineering',
      image: MyDBMS,
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
      id: 3,
      title: 'Vivid Horizons',
      subtitle: 'Immersive Travel & Tourism Platform',
      location: 'Harare, Zimbabwe',
      category: 'Software Engineering',
      image: Vvid,
      description:
        'A modern web application crafted to promote tourism in Zimbabwe. Features interactive tour discovery, seamless navigation, client testimonials, and newsletter engagement for travelers.',
      features: [
        'Interactive Tour Discovery Engine',
        'Curated Destination Highlights (Victoria Falls)',
        'Dynamic Client Testimonials Section',
        'Automated Newsletter Subscriptions',
      ],
      techStack: ['React.js', 'TypeScript', 'CSS3 Modules'],
      github: 'https://github.com/collinssixpence/Vivid-Horizons-project.git',
      demo: 'https://vivid-horizons-project.vercel.app',
    },
    {
      id: 4,
      title: 'Superfert Fertilizer',
      subtitle: 'Agricultural Solutions & Products Platform',
      location: 'Harare, Zimbabwe',
      category: 'Software Engineering',
      image: Superfert,
      description:
        'A high-performance corporate landing page designed for an agricultural fertilizer brand. Provides an intuitive showcase for crop-specific nutrient solutions, farming services, and company insights.',
      features: [
        'Interactive Crop & Fertilizer Catalog',
        'Custom Agronomy Services Showcase',
        'Corporate News & Event Publishing Engine',
        'Direct Customer Inquiry & Contact Interface',
      ],
      techStack: ['HTML & CSS', 'JavaScript'],
      github: 'https://github.com/collinssixpence/Apex-Venture-Hub.git',
      demo: 'https://apex-venture-hub.vercel.app/',
    },
    {
      id: 5,
      title: 'Elite CUTS',
      subtitle: 'Premium Barber Studio Landing Page',
      location: 'Harare, Zimbabwe',
      category: 'Software Engineering',
      image: Barber,
      description:
        'A modern, high-performance web application tailored for a luxury barber studio. Designed to showcase premium grooming services, custom fades, and provide a seamless online booking experience.',
      features: [
        'Interactive Barber Services & Pricing Catalog',
        'Online Appointment Booking Interface',
        'Responsive High-Contrast UI Design',
        'Customer Testimonials & Studio Showcase',
      ],
      techStack: ['HTML & CSS', 'JavaScript'],
      github: 'https://github.com/collinssixpence/barberdemo.git',
      demo: 'https://barber-de.vercel.app/',
    },

    {
  id: 6,
  title: 'CarSale',
  subtitle: 'Responsive Vehicle Marketplace & Car Dealership Platform',
  location: 'Harare, Zimbabwe',
  category: 'Software Engineering',
  image: Car,
  description:
    'A modern, responsive vehicle marketplace built to help customers discover, filter, and explore cars online. The platform provides an intuitive browsing experience with vehicle categories, detailed car profiles, search and filtering functionality, and direct customer contact through WhatsApp.',
  features: [
    'Responsive Vehicle Marketplace Interface',
    'Dynamic Car Search & Filtering',
    'Vehicle Categories & Inventory Browsing',
    'Individual Vehicle Details Pages',
    'WhatsApp Customer Inquiry Integration',
    'Responsive Mobile-First Design',
  ],
  techStack: ['HTML5', 'CSS3', 'JavaScript'],
  github: 'https://github.com/collinssixpence/Carsale',
  demo: 'https://carsale-eta.vercel.app/',
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