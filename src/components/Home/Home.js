'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slideshow from './Slideshow';
import styles from './Home.module.css';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
    return (
        <div className={styles.container}>
            {/* --- Hero Section --- */}
            <section className={styles.heroSection}>
                <Slideshow /> {/* Background Slideshow */}

                <div className={styles.heroOverlay}>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Sant Dnyaneshwar Maharaj
                    </motion.h1>
                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Embrace the eternal wisdom of Sanatana Dharma. A sanctuary for peace, devotion, and spiritual awakening.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <Link href="/about" className={styles.ctaButton}>
                            Explore Our Journey
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* --- Introduction Section --- */}
            <section className={styles.introSection}>
                <img src="/bg1_circle.png" alt="" className={styles.mandalaBg} />

                <motion.div
                    className={styles.introContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <h2 className={styles.sectionTitle}>A Beacon of Divine Light</h2>
                    <p className={styles.introText}>
                        Welcome to the spiritual abode of Swami Gnanaandha Maharaj. Our mission is to preserve the sacred traditions of our ancestors and guide seekers on the path of self-realization. Here, ancient wisdom meets modern understanding, creating a bridge to the divine.
                    </p>
                    <p className={styles.introText}>
                        Whether you seek solace in prayer, knowledge from scriptures, or the community of fellow devotees, you have found your home.
                    </p>
                </motion.div>
            </section>

            {/* --- Highlights / Cards Section --- */}
            <section className={styles.highlightsSection}>
                <motion.div
                    className={styles.cardGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {/* Card 1: About */}
                    <Link href="/about">
                        <motion.div className={styles.card} variants={fadeInUp}>
                            <div className={styles.cardIcon}>ॐ</div>
                            <h3 className={styles.cardTitle}>Our Philosophy</h3>
                            <p className={styles.cardDesc}>
                                Delve into the life and teachings of our Guru. Discover the principles that guide our spiritual path.
                            </p>
                        </motion.div>
                    </Link>

                    {/* Card 2: Temples */}
                    <Link href="/temples">
                        <motion.div className={styles.card} variants={fadeInUp}>
                            <div className={styles.cardIcon}>🛕</div>
                            <h3 className={styles.cardTitle}>Sacred Temples</h3>
                            <p className={styles.cardDesc}>
                                Visit the holy sanctuaries associated with the Maharaj. Places of immense energy and tranquility.
                            </p>
                        </motion.div>
                    </Link>

                    {/* Card 3: Gallery */}
                    <Link href="/gallery">
                        <motion.div className={styles.card} variants={fadeInUp}>
                            <div className={styles.cardIcon}>🖼️</div>
                            <h3 className={styles.cardTitle}>Divine Gallery</h3>
                            <p className={styles.cardDesc}>
                                Witness the captured moments of grace. A visual journey through the spiritual life of the Guru.
                            </p>
                        </motion.div>
                    </Link>
                </motion.div>
            </section>

            {/* --- Parallax Quote Section --- */}
            <section className={styles.quoteSection}>
                <motion.div
                    className={styles.quoteContent}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className={styles.quoteText}>
                        "The soul that realizes the divine within sees the divine in all. Service to humanity is service to God."
                    </p>
                    <span className={styles.quoteAuthor}>— Swami Gnanaandha Maharaj</span>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
