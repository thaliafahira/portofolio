import React, { useState } from 'react';
import styles from './Skill.module.css';
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';

export const Skill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.container} id="skill">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technologies I work with</h2>
        </div>
        
        <div className={styles.grid}>
          {skills.map((skill, id) => (
            <div 
              key={id} 
              className={`${styles.skillCard} ${hoveredIndex === id ? styles.active : ''}`}
              onMouseEnter={() => setHoveredIndex(id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  <img 
                    src={getImageUrl(skill.image)} 
                    alt={skill.title} 
                    className={styles.icon}
                  />
                </div>
                <span className={styles.name}>{skill.title}</span>
              </div>
              <div className={styles.hoverEffect}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};