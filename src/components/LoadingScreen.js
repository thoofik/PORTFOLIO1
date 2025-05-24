import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="loading-container">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.3, rotateY: -180, opacity: 0 }}
          animate={{ 
            scale: [0.3, 1.2, 1],
            rotateY: [180, 0, 0],
            opacity: [0, 1, 1]
          }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        >
          <div className="logo-container-loading">
            <div className="logo-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            <div className="logo-core">
              <motion.span 
                className="logo-initials"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                TU
              </motion.span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="typewriter">
            <motion.h2
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
            >
              Loading Portfolio...
            </motion.h2>
          </div>
          <div className="loading-progress">
            <motion.div
              className="progress-segments"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="progress-segment"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ 
                    delay: 2.5 + (i * 0.1),
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="loading-orbit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="orbit-dot"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2 + (i * 0.2),
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                transformOrigin: `${40 + i * 8}px center`
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 