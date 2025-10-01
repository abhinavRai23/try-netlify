import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">React</div>
        <div className="skill-item">TypeScript</div>
        <div className="skill-item">Node.js</div>
        {/* Add more skills */}
      </div>
    </section>
  );
};

export default Skills;