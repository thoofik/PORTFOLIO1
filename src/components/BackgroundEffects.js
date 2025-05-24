import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundEffects.css';

const BackgroundEffects = () => {
  // Generate floating elements with viewport-based positioning
  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className={`floating-element element-${i % 3}`}
      initial={{ 
        opacity: 0,
        scale: 0,
        x: `${Math.random() * 100}vw`,
        y: `${Math.random() * 100}vh`
      }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        x: [
          `${Math.random() * 100}vw`,
          `${Math.random() * 100}vw`,
          `${Math.random() * 100}vw`
        ],
        y: [
          `${Math.random() * 100}vh`,
          `${Math.random() * 100}vh`,
          `${Math.random() * 100}vh`
        ]
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay: i * 2,
        ease: "easeInOut"
      }}
    />
  ));

  return (
    <div className="background-effects">
      {/* Animated Grid Lines */}
      <div className="grid-lines">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`line-${i}`}
            className="grid-line"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="floating-container">
        {floatingElements}
      </div>

      {/* Pulse Rings */}
      <div className="pulse-rings">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="pulse-ring"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 2, 3],
              opacity: [1, 0.2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="binary-rain">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="binary-column"
            style={{ left: `${i * 12.5}%` }}
            initial={{ y: -50 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear"
            }}
          >
            {Array.from({ length: 10 }, (_, j) => (
              <span key={j} className="binary-digit">
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundEffects; 