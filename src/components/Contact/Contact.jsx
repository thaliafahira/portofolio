import React, { useState } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [selectedService, setSelectedService] = useState('');
  
  const services = [
    { name: 'Mobile UI', price: '25k/slide' },
    { name: 'Desktop UI', price: '30k/slide' },
    { name: 'User Flow', price: '15k' },
    { name: 'Wireframe', price: '30k/project' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`UI/UX Service Request: ${selectedService}`);
    const body = encodeURIComponent(`I'm interested in your ${selectedService} service.`);
    window.location.href = `mailto:thaliafahira@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        
        <div className={styles.content}>
          <div className={styles.services}>
            <h3>Select Service</h3>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <button
                  key={service.name}
                  className={`${styles.serviceButton} ${selectedService === service.name ? styles.selected : ''}`}
                  onClick={() => setSelectedService(service.name)}
                >
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.servicePrice}>{service.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.contactInfo}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={!selectedService}
              >
                Contact via Email
              </button>
            </form>

            <div className={styles.directContact}>
              <p>Or contact me directly:</p>
              <a 
                href="https://wa.me/628111099973"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
              >
                WhatsApp: +62 811109973 (Dinda)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};