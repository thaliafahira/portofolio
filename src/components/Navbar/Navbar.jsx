import { useState } from 'react';
import React from "react";
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#hero", label: "About" },
        { href: "#skill", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#project", label: "Projects" },
        { href: "#award", label: "Awards" }
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const navbarHeight = document.querySelector(`.${styles.navbar}`).offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <a href="/" className={styles.logo} onClick={(e) => handleClick(e, "#hero")}>
                    <img 
                        src={getImageUrl("nav/portofolio.png")} 
                        alt="Portfolio Logo" 
                    />
                </a>

                <div className={styles.navContent}>
                    <div className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className={styles.navLink}
                                onClick={(e) => handleClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className={styles.mobileMenu}>
                        <button 
                            className={styles.menuToggle} 
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`}></span>
                        </button>

                        {menuOpen && (
                            <div className={`${styles.mobileNavLinks} ${menuOpen ? styles.open : ''}`}>
                                {navLinks.map((link) => (
                                    <a 
                                        key={link.href} 
                                        href={link.href} 
                                        className={styles.mobileNavLink}
                                        onClick={(e) => handleClick(e, link.href)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}