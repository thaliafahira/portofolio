import { useState } from 'react';
import React from "react";
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/skill", label: "Skills" },
        { href: "/experience", label: "Experience" },
        { href: "/project", label: "Projects" },
        { href: "/award", label: "Awards" }
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <a href="/" className={styles.logo}>
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
                                        onClick={() => setMenuOpen(false)}
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