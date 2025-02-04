import React, { useState } from 'react';
import styles from './Experience.module.css';
import workData from "../../data/work.json";
import organizationData from "../../data/organization.json";
import { getImageUrl } from '../../utils';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  return (
    <section className={styles.container} id="experience">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Experience</h2>
        
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'work' ? styles.active : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'organization' ? styles.active : ''}`}
            onClick={() => setActiveTab('organization')}
          >
            Organizations
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'work' ? (
            <div className={styles.timelineContainer}>
              {workData.experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.position}>{exp.position}</p>
                    <p className={styles.period}>{exp.period}</p>
                    <ul className={styles.responsibilities}>
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.organizationGrid}>
              {organizationData.map((org, index) => (
                <div key={index} className={styles.orgCard}>
                  {org.image && org.image.trim() !== "" && (
                    <div className={styles.orgImageContainer}>
                      <img 
                        src={getImageUrl(org.image)}  
                        alt={`${org.organization} logo`}
                        className={styles.orgImage}
                      />
                    </div>
                  )}
                  <div className={styles.orgHeader}>
                    <h3 className={styles.orgRole}>{org.role}</h3>
                    <p className={styles.orgName}>{org.organization}</p>
                  </div>
                  <div className={styles.orgDetails}>
                    <p className={styles.orgPeriod}>{org.period}</p>
                    <p className={styles.orgDescription}>{org.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};