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
                        சந்த் ஞானேஸ்வர் மகாராஜ்

                    </motion.h1>
                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        சனாதன தர்மத்தின் நித்திய ஞானத்தைத் தழுவுங்கள். அமைதி, பக்தி மற்றும் ஆன்மீக விழிப்புணர்வுக்கான சரணாலயம்.
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
                    <h2 className={styles.sectionTitle}>தெய்வீக ஒளியின் கலங்கரை விளக்கம்</h2>
                    <p className={styles.introText}>
                        சந்த் ஞானேஸ்வர் மகாராஜின் ஆன்மீக இல்லத்திற்கு வரவேற்கிறோம். எங்கள் நோக்கம் எங்கள் மூதாதையர்களின் புனித மரபுகளைப் பாதுகாப்பதும், சுய-உணர்தலுக்கான பாதையில் தேடுபவர்களுக்கு வழிகாட்டுவதும் ஆகும். இங்கே, பண்டைய ஞானம் நவீன புரிதலுடன் இணைந்து, தெய்வீகத்திற்கான பாலத்தை உருவாக்குகிறது.
                    </p>
                    <p className={styles.introText}>
                        நீங்கள் பிரார்த்தனையில் ஆறுதலையோ, வேதங்களிலிருந்து அறிவையோ, அல்லது சக பக்தர்களின் சமூகத்தையோ தேடினாலும், நீங்கள் உங்கள் வீட்டைக் கண்டுபிடித்துவிட்டீர்கள்.
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
                        "உள்ளே உள்ள தெய்வீகத்தை உணரும் ஆன்மா எல்லாவற்றிலும் தெய்வீகத்தைக் காண்கிறது. மனித குலத்திற்கான சேவை என்பது கடவுளுக்குச் செய்யும் சேவையாகும்."
                    </p>
                    <span className={styles.quoteAuthor}>— சந்த் ஞானேஸ்வர் மகாராஜ்</span>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
