import React from 'react';
import { motion } from 'framer-motion';
import './RobotBackground.css';

const RobotBackground = () => {
  return (
    <div className="robot-background">
      <div className="circuit-grid">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="circuit-node"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 25}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="floating-shapes">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`shape shape-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="scan-lines">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="scan-line"
            animate={{
              y: ['-100vh', '100vh'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RobotBackground; 