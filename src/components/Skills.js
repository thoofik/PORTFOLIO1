import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 50 },
    { name: 'React', level: 50 },
    { name: 'Node.js', level: 50 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 75 },
    { name: 'TypeScript', level: 50 }
  ];

  const otherSkills = [
    'Git', 'AWS', 'Firebase', 'Next.js', 'Tailwind CSS', 'Figma', 'XAMPP', 'AI/ML'
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <p>My technical toolkit and professional capabilities in web development and design.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="about-card full-width"
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-divider"></div>
          
          <h4>Other Technologies & Tools</h4>
          <div className="other-skills">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 