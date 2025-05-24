import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'designs', label: 'Designs' },
    { id: 'roadmap', label: 'Learning' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Account for fixed header
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 80 : 70; // Extra offset for mobile
      const elementPosition = element.offsetTop - offset;
      
      // Enhanced scroll options for better mobile support
      const scrollOptions = {
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      };
      
      // For mobile, enhance the scrolling experience
      if (isMobile) {
        // Prevent body scroll during transition
        document.body.style.overflow = 'hidden';
        
        // Start the scroll immediately
        window.scrollTo(scrollOptions);
        
        // Close menu and restore scroll after animation starts
        setTimeout(() => {
          setIsMenuOpen(false);
          setCurrentSection(sectionId);
          document.body.style.overflow = 'unset';
        }, 150);
      } else {
        // Desktop behavior - immediate
        window.scrollTo(scrollOptions);
        setCurrentSection(sectionId);
        setIsMenuOpen(false);
      }
    } else {
      // Fallback if element not found
      setIsMenuOpen(false);
      setCurrentSection(sectionId);
      if (window.innerWidth <= 768) {
        document.body.style.overflow = 'unset';
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="logo-neon-container">
            <div className="logo-neon-border">
              <span className="logo-neon-text">TU</span>
            </div>
          </div>
        </motion.div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.a
                  href={`#${item.id}`}
                  className={currentSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 
