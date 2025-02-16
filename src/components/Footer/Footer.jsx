import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyrightText}>
          © {currentYear} Thalia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};