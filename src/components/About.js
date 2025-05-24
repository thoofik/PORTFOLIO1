import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const About = () => {
  const educationItems = [
    {
      year: 'Nov 2022 - At 6th Semester',
      title: 'B.E. in Computer Science and Engineering',
      organization: 'PES Institute of Technology and Management, Shivamogga',
      description: 'Currently pursuing Bachelor of Engineering in Computer Science and Engineering with a focus on modern software development practices and emerging technologies.',
      grade: 'Current CGPA: 8.0',
      icon: <FaUniversity />
    },
    {
      year: 'July 2022',
      title: 'Class 12th',
      organization: 'Sri Vidya BharathiPU college Shivamogga',
      description: 'Completed higher secondary education with a focus on science and mathematics, building a strong foundation for engineering studies.',
      grade: 'Scored 62.33%',
      icon: <FaGraduationCap />
    },
    {
      year: 'April 2020',
      title: 'Class 10th',
      organization: 'Swamy Vivekananda High School',
      description: 'Completed secondary education with comprehensive learning across all subjects, developing analytical and problem-solving skills.',
      grade: 'Scored 63.84%',
      icon: <FaSchool />
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Learn more about my educational background and academic journey.</p>
        </motion.div>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="about-card full-width"
          >
            <h3>Education</h3>
            <div className="education-timeline">
              {educationItems.map((item, index) => (
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
                    <h4 className="timeline-title">{item.title}</h4>
                    <h5 className="timeline-organization">{item.organization}</h5>
                    <p className="timeline-description">{item.description}</p>
                    <p className="timeline-grade"><strong>{item.grade}</strong></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 