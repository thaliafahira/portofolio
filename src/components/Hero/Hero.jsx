import React from "react";
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    const handleCVClick = () => {
       
        const cvUrl = "https://drive.google.com/file/d/1OYlFsjnAnRIi-s_9gJ36fQ4mmhlFGtIn/view?usp=sharing";
        window.open(cvUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className={styles.hero} style={{
            backgroundImage: `url(${getImageUrl("hero/profpic.png")})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <div className={styles.greeting}>
                        <h2 className={styles.welcome}>Hi, I'm</h2>
                        <img 
                            src={getImageUrl("hero/thaliaLogo.png")} 
                            alt="Logo" 
                            className={styles.logo}
                        />
                        <div className={styles.mobileProfile}>
                            <img 
                                src={getImageUrl("hero/mobile.png")} 
                                alt="Profile" 
                                className={styles.profileImage}
                            />
                        </div>
                    </div>
                    <p className={styles.description}>
                        UI/UX Designer & Front-end Developer 
                    </p>
                    <div className={styles.actions}>
                        <button 
                            onClick={handleCVClick}
                            className={styles.cta}
                        >
                            View my CV!
                            <span className={styles.ctaArrow}>→</span>
                        </button>
                        <div className={styles.socials}>
                            <a 
                                href="https://www.linkedin.com/in/thaliafahira/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <img src={getImageUrl("hero/linkedin.png")} alt="LinkedIn" />
                            </a>
                            <a 
                                href="https://github.com/thaliafahira/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <img src={getImageUrl("hero/github.png")} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};