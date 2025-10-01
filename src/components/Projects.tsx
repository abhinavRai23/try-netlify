import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Add your projects here */}
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of your project goes here.</p>
          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;