import React, { useState } from 'react';
import styles from './Portofolio.module.css';
import UIUXData from "../../data/projectuiux.json";
import WebData from "../../data/projectweb.json";

export const Portofolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const filterProjects = () => {
    switch (activeCategory) {
      case 'uiux':
        return UIUXData;
      case 'web':
        return WebData;
      default:
        return [...UIUXData, ...WebData];
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerSection}>
        <h2 className={styles.title}>Creative Works</h2>
      </div>
      
      <div className={styles.categoryButtons}>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          <span className={styles.buttonText}>All Projects</span>
        </button>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'uiux' ? styles.active : ''}`}
          onClick={() => setActiveCategory('uiux')}
        >
          <span className={styles.buttonText}>UI/UX Design</span>
        </button>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'web' ? styles.active : ''}`}
          onClick={() => setActiveCategory('web')}
        >
          <span className={styles.buttonText}>Web Development</span>
        </button>
      </div>

      <div className={styles.projects}>
        {filterProjects().map((project, index) => (
          <div 
            key={index} 
            className={styles.projectCard}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDivider}></div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.achievement && (
                <div className={styles.achievementWrapper}>
                  <p className={styles.achievement}>
                    <span className={styles.achievementIcon}>🏆</span>
                    {project.achievement}
                  </p>
                </div>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.projectLink} ${hoveredIndex === index ? styles.linkHovered : ''}`}
                >
                  Explore Project
                  <span className={styles.arrow}>→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};