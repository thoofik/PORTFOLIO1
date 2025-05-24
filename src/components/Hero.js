import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaEye } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = useMemo(() => [
    'Web Developer', 
    'Problem Solver', 
    'Software Engineer', 
    'Thoofik Usmaan A'
  ], []);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="rotating-text-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </motion.h1>
            
            <motion.h2
              className="main-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Software Engineer & Web Developer
            </motion.h2>
            
            <motion.div
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p>
                I'm a passionate software engineer specializing in creating elegant, 
                user-centered web applications with clean, efficient code.
              </p>
              <p>
                With a strong foundation in computer science fundamentals and modern 
                development practices, I build scalable solutions that solve real-world problems.
              </p>
              <p>
                My technical toolkit includes <span className="highlight">JavaScript</span>, 
                <span className="highlight"> React</span>, <span className="highlight"> Node.js</span>, 
                and various other web technologies. I'm committed to writing maintainable code and 
                creating intuitive user experiences.
              </p>
            </motion.div>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={scrollToProjects}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEye />
                <span>View Projects</span>
              </motion.button>
              
              <motion.a
                href="/resume/Thoofik_Usmaan_Resume.pdf"
                download="Thoofik_Usmaan_Resume.pdf"
                className="btn btn-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.a>
              
              <motion.button
                className="btn btn-outline"
                onClick={scrollToContact}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaArrowRight />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 