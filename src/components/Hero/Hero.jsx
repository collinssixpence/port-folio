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

        {/* RIGHT SIDE: Interactive Orbit & Decorative Code Snippets */}
        <div className="hero-right">
          <div className="orbit-system">
            
            {/* Center Premium Portrait Placeholder Glow */}
            <div className="avatar-core">
              <div className="avatar-inner-glow"></div>
              <div className="avatar-placeholder">
                <span className="avatar-code-initials">&lt;CS/&gt;</span>
              </div>
            </div>

            {/* Orbit Ring 1 (Inner) */}
            <div className="orbit-ring ring-1">
              <div className="orbit-icon icon-react">
                <span className="tooltip">React</span>
                <code>jsx</code>
              </div>
              <div className="orbit-icon icon-python">
                <span className="tooltip">Python</span>
                <code>py</code>
              </div>
            </div>

            {/* Orbit Ring 2 (Middle) */}
            <div className="orbit-ring ring-2">
              <div className="orbit-icon icon-ts">
                <span className="tooltip">TypeScript</span>
                <code>ts</code>
              </div>
              <div className="orbit-icon icon-django">
                <span className="tooltip">Django</span>
                <code>dj</code>
              </div>
            </div>

            {/* Orbit Ring 3 (Outer) */}
            <div className="orbit-ring ring-3">
              <div className="orbit-icon icon-git">
                <span className="tooltip">Git</span>
                <code>git</code>
              </div>
              <div className="orbit-icon icon-js">
                <span className="tooltip">JavaScript</span>
                <code>js</code>
              </div>
            </div>

          </div>

          {/* Floating Vercel-style Code Card Fragment */}
          <div className="floating-card snippet-card">
            <div className="card-header">
              <div className="header-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="card-filename">developer.ts</span>
            </div>
            <pre className="card-body">
              <code>
                <span className="keyword">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="string">"Collins Sixpence"</span>,<br />
                &nbsp;&nbsp;role: <span className="string">"Software Engineer"</span>,<br />
                &nbsp;&nbsp;passion: <span className="string">"Building products."</span><br />
                &#125;;
              </code>
            </pre>
          </div>

          {/* Floating Git Commit Fragment */}
          <div className="floating-card git-card">
            <div className="git-status">
              <span className="git-branch-icon">⌥</span>
              <span className="git-branch-name">main</span>
            </div>
            <div className="git-message">
              <span className="git-success">✓</span> git commit -m "feat: core architecture complete"
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;