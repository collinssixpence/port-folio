import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <p className="about-eyebrow">
          <span className="eyebrow-prefix">$&nbsp;</span>whoami
        </p>
        <h2 className="about-title">About me</h2>

         <div className="about-grid">
          <div className="about-narrative">
            <p>
              I care about the unglamorous parts of software as much as the
              visible ones  the edge case that's actually handled, the API
              that fails politely, the interface that doesn't make someone
              stop and think about how to use it. My day-to-day sits mostly
              in React and TypeScript on the frontend and Python and Django
              on the backend, but the specific stack matters less to me than
              whether what ships actually holds up once real people rely on
              it.
            </p>
            <p>
              I like working close to the people a product is for,
              translating messy real-world requirements into something
              simple to use and straightforward to maintain. When I'm not
              building, I'm usually reading someone else's codebase to see
              how they solved a problem I'm stuck on, or writing notes for
              the version of me that has to revisit this code in six months.
            </p>
          </div>

          <dl className="focus-list">
            <div className="focus-item">
              <dt className="focus-name">frontend/</dt>
              <dd className="focus-desc">
                React, TypeScript, JavaScript — interfaces that hold up under
                real use, not just in a demo.
              </dd>
            </div>
            <div className="focus-item">
              <dt className="focus-name">backend/</dt>
              <dd className="focus-desc">
                Python, Django — APIs and data models built to stay correct
                under load.
              </dd>
            </div>
            <div className="focus-item">
              <dt className="focus-name">tooling/</dt>
              <dd className="focus-desc">
                Git, CI, testing — the unglamorous habits that keep a
                codebase honest.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;