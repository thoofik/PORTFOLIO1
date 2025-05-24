import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa';

const Learning = () => {
  const learningItems = [
    {
      year: '2025',
      title: 'Bosch Implant Training',
      organization: 'Bosch Adugodi',
      description: 'At Bosch Adugodi, we explored smart manufacturing, automation, IoT-driven solutions, and AI in industrial applications. It was an eye-opening experience to witness how Bosch integrates AI, robotics, and data analytics to drive Industry 4.0 transformations.',
      icon: <FaGraduationCap />
    },
    {
      year: '2024',
      title: 'WeCP Badge Achievement',
      organization: 'We Create Problems',
      description: 'Recognition for demonstrating excellence in problem-solving and technical skills on the WeCP platform.',
      icon: <FaAward />
    },
    {
      year: 'July 2024',
      title: 'Web Development using WordPress & Digital Marketing',
      organization: 'PESITM',
      description: 'Comprehensive training in WordPress development and digital marketing strategies, focusing on building and promoting web platforms.',
      icon: <FaCertificate />
    },
    {
      year: 'July 2024',
      title: 'Code Craft: Mastering Competitive Programming',
      organization: 'PESITM',
      description: 'Three-day intensive program enhancing problem-solving and competitive programming skills for the IT Arena.',
      icon: <FaCertificate />
    },
    {
      year: 'March 2024',
      title: 'Foundations of Cybersecurity',
      organization: 'Google & Coursera',
      description: 'Essential cybersecurity fundamentals including threat detection, security protocols, and risk management. Industry-standard tools and methodologies for protecting systems and data.',
      icon: <FaCertificate />
    },
    {
      year: 'February 2024',
      title: 'Enterprise App Development with JAVA EE',
      organization: 'PESITM & PraloTech Solutions',
      description: 'Three-day intensive program on Java Enterprise Edition development, focusing on building scalable enterprise applications.',
      icon: <FaCertificate />
    }
  ];

  return (
    <section id="roadmap" className="section learning-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2>Learning Journey</h2>
          <p>My continuous path of growth and professional development in technology.</p>
        </motion.div>
        
        <div className="learning-timeline">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-organization">{item.organization}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning; 