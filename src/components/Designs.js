import React from 'react';
import { motion } from 'framer-motion';

const Designs = () => {
  const designs = [
    {
      title: 'Portfolio Design',
      status: 'Completed',
      description: 'A modern, dark-themed portfolio design that showcases professional work with style and elegance. Features a striking hero section with dynamic text animation, seamless navigation, and a clean layout. The design emphasizes personal branding with a custom logo, interactive elements, and a professional color scheme focused on black and pink accents. Built with attention to typography, spacing, and user experience.',
      technologies: ['Figma', 'UI Design', 'Personal Branding', 'Dark Theme', 'Animation'],
      image: '/images/Portfolio.png'
    },
    {
      title: 'TripAdvisor Redesign',
      status: 'Completed',
      description: 'A modern reimagining of TripAdvisor\'s interface with AI-powered trip planning, enhanced search experience, and stunning visual hierarchy. Features include a streamlined navigation system, visually appealing awards showcase, intuitive filters, and an innovative AI trip builder. The design focuses on making travel planning more engaging and personalized.',
      technologies: ['Figma', 'UI/UX Design', 'AI Integration', 'Travel Platform', 'Responsive Design'],
      image: '/images/tripAdvisor.png'
    },
    {
      title: 'Google Pixel Product Website',
      status: 'Completed',
      description: 'A sleek and modern product website design inspired by Google\'s Pixel lineup. Features an engaging hero section with dynamic typography, seamless product navigation, and an innovative product showcase. The design emphasizes the product\'s AI capabilities with the "Oh hi, Gemini" headline and clean product imagery. Incorporates Google\'s material design principles with a focus on whitespace, typography, and subtle animations.',
      technologies: ['Figma', 'Product Design', 'Material Design', 'E-commerce', 'Responsive Design'],
      image: '/images/pixel.png'
    }
  ];

  return (
    <section id="designs" className="section designs-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2>UI/UX Designs</h2>
          <p>Exploring creative solutions through user-centered design thinking and modern aesthetics.</p>
        </motion.div>
        
        <div className="projects-list">
          {designs.map((design, index) => (
            <motion.div
              key={design.title}
              className="project-card horizontal-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{design.title}</h3>
                  <span className={`project-status ${design.status.toLowerCase().replace(' ', '-')}`}>
                    {design.status}
                  </span>
                </div>
                
                <p className="project-description">{design.description}</p>
                
                <div className="project-technologies">
                  {design.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-image-container">
                <img 
                  src={design.image} 
                  alt={design.title}
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

export default Designs; 