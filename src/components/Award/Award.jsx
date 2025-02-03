import React from 'react';
import styles from './Award.module.css';
import awardData from '../../data/award.json';

export const Award = () => {
  console.log('Award Data:', awardData); // Add this to debug

  // First check if awardData exists and has the expected structure
  const awards = awardData?.awards || [];

  return (
    <section className={styles.container} id="awards">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Awards & Achievements</h2>
        
        <div className={styles.timelineContainer}>
          {awards.length > 0 ? (
            awards.map((award, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.year}>{award.year}</div>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  {award.organization && (
                    <p className={styles.organization}>{award.organization}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>Loading awards...</div> // Add this to see if data is loading
          )}
        </div>
      </div>
    </section>
  );
};