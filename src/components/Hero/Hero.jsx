import React from "react";
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
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
                    </div>
                    <p className={styles.description}>
                        Front-end Developer & UI/UX Designer
                    </p>
                    <div className={styles.actions}>
                        <a href="https://drive.google.com/file/d/13Rufg8vNooX0ob_TgVENZ-qgxnqVaDxX/view?usp=sharing">
                            <button className={styles.cta}>
                                View my CV!
                                <span className={styles.ctaArrow}>→</span>
                            </button>
                        </a>  
                        <div className={styles.socials}>
                            <a href="https://www.linkedin.com/in/thaliafahira/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className={styles.socialLink}
                            >
                                <img src={getImageUrl("hero/linkedin.png")} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/thaliafahira/" 
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
}
