import React from 'react';
import styles from './Contact.module.css';
import contactData from '../../data/contact.json';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Get In Touch</h2>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subtitle}>Let's Connect!</h3>
            <p className={styles.description}>
              I'm always open for new opportunities and interesting projects.
              Feel free to reach out if you want to collaborate or just say hi!
            </p>

            <div className={styles.socialLinks}>
              {contactData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {social.platform}
                </a>
              ))}
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href={`mailto:${contactData.email}`} className={styles.contactValue}>
                  {contactData.email}
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Location:</span>
                <span className={styles.contactValue}>{contactData.location}</span>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
                placeholder="Your email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={styles.input}
                placeholder="Subject"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};