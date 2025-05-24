import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/thoofik-usmaan-a-2b93a9254/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/thoofik',
      color: '#333'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:thoofikusmaan@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind or just want to chat? Feel free to reach out through any of these platforms.</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="contact-info"
          >
            <h3>If you wish to contact me,</h3>
            <p>I'm always interested in discussing new opportunities, collaborating on exciting projects, or simply connecting with fellow developers and designers.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Shivamogga, Karnataka, India</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>thoofikusmaan@gmail.com</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="contact-links"
          >
            <h3>Connect with me</h3>
            <div className="social-links">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--link-color': link.color }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="social-icon">
                    {link.icon}
                  </div>
                  <span className="social-name">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="contact-cta"
        >
          <p>Let's create something amazing together!</p>
          <motion.a
            href="mailto:thoofikusmaan@gmail.com"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            <span>Send Message</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 