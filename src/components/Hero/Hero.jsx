import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const strings = [
    'interface Developer',
    'type SoftwareEngineer',
    'const Entrepreneur',
    'React Developer',
    'Python Developer',
    'Django Engineer',
    'UI/UX Designer',
    'Tech Founder'
  ];

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = strings[currentStringIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          setTypingSpeed(2000); // Pause at full string
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          setTypingSpeed(500); // Pause before starting next string
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero-container">
      {/* Structural Decorative Grid Mesh Overlay */}
      <div className="hero-mesh"></div>

      <div className="hero-content">
        {/* LEFT SIDE: Copywriting & CTAs */}
        <div className="hero-left">
          <div className="badge-wrapper">
            <span className="badge-ping"></span>
            <span className="badge-text">Available for Q3 2026 Contracts</span>
          </div>

          <h1 className="hero-headline">
            Hi,   I'm <br />
            <span className="gradient-text-cyan">Collins Sixpence</span> <br />
            Software Developer
          </h1>

          <div className="typing-box">
            <span className="code-prefix">$&nbsp;</span>
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-subtext">
            Crafting premium digital platforms with flawless performance, clean engineering structures, and high-end aesthetics. Specialized in scalable ecosystems using React, TypeScript, Python, and Django.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="cta-primary" onClick={handleScrollToProjects}>
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/resume.pdf" download className="cta-secondary">
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Compact Floating Code Window */}
        <div className="hero-right">
          <div className="code-window float-animation">
            <div className="card-header">
              <div className="header-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="card-filename">developer.ts</span>
            </div>
            <pre className="card-body">
              <code>
                <span className="keyword">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="string">"Collins Sixpence"</span>,<br />
                &nbsp;&nbsp;role: <span className="string">"Software Engineer"</span>,<br />
                &nbsp;&nbsp;passion: <span className="string">"Building products"</span><br />
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;