import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'SpendWise Elite',
      status: 'Completed',
      description: 'A simple multi-page expense tracking website built with HTML, CSS, and JavaScript. It allows users to add, view, and analyze their income and expenses with a clean UI, local storage support, and category-based analytics using charts.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      image: '/images/expense-tracker-logo.jpeg',
      url: 'https://github.com/thoofik/SpendWise_Elite'
    },
    {
      title: 'ShelfScout',
      status: 'In Progress',
      description: 'A modern digital library companion that helps you discover, organize, and explore your book collection. Built with the MERN stack, featuring an elegant user interface, smart book recommendations, seamless user authentication, and advanced search functionality.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      image: '/images/ShelfScout.png',
      url: 'https://github.com/thoofik/ShelfScout'
    },
    {
      title: 'SkillScape',
      status: 'Completed',
      description: 'A SkillScape is a gamified student tracking platform designed to make learning more engaging. It allows students to log academic and extracurricular achievements, earn badges, and monitor their progress through an interactive dashboard, leaderboard, and campus journey map — all aimed at motivating continuous growth and participation',
      technologies: ['React', 'JavaScript', 'MongoDB', 'Node.js', 'Python'],
      image: '/images/SkillScape.png',
      url: 'https://github.com/thoofik/SkillScape'
    },
    {
      title: 'CuraPath',
      status: 'In Progress',
      description: 'A personalized treatment planning platform that generates tailored care pathways from digital health records, including a report summarizer and predictive steps for patients. Built with advanced AI/ML integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      image: '/images/CuraPath.png',
      url: 'https://github.com/thoofik/Curapath'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on. Each one demonstrates different skills and technologies.</p>
        </motion.div>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card horizontal-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </motion.a>
                </div>
              </div>
              
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 