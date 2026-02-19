import React from 'react';
import styles from '../about.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>About Us</h1>
                <h2 className={styles.subtitle}>எங்களைப் பற்றி</h2>
            </div>
        </section>
    );
};

export default HeroSection;
