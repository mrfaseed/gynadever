"use client";

import React from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.container}>
            {/* Layers */}
            <div className={styles.pageBackground}></div>

            {/* Background Mandalas */}
            <div className={styles.backgroundEffects}>
                <img
                    src="/bg1_circle.png"
                    alt=""
                    className={`${styles.mandala} ${styles.mandalaTopLeft}`}
                />
                <img
                    src="/bg1_circle.png"
                    alt=""
                    className={`${styles.mandala} ${styles.mandalaBottomRight}`}
                />
            </div>

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Contact Us</h1>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2 className={styles.subtitle}>Sri Gnaneswar Maharaj Samasthanam</h2>
                    <p className={styles.subText}>
                        <span className={styles.tamilText}>ஸ்ரீ ஞானேஸ்வர் மகாராஜ் சமஸ்தானம்</span>
                    </p>

                    <table className={styles.contactTable}>
                        <tbody>
                            <tr>
                                <td className={styles.tableLabel}>Address</td>
                                <td className={styles.tableValue}>
                                    Thiruvannamalai
                                    <span className={styles.tamilText}>திருவண்ணாமலை</span>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.tableLabel}>State</td>
                                <td className={styles.tableValue}>
                                    Tamil Nadu, India
                                    <span className={styles.tamilText}>தமிழ்நாடு, இந்தியா</span>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.tableLabel}>Get in Touch</td>
                                <td className={styles.tableValue}>
                                    <div style={{ marginBottom: '0.8rem' }}>
                                        <span className={styles.icon}>📍</span> Thiruvannamalai
                                    </div>
                                    <div>
                                        <span className={styles.icon}>✉️</span> saintdyaneshwarmaharaj@gmail.com
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
