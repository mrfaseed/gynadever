"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>


            <div className={styles.content}>
                {/* Column 1: About Organization */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Gynadever</h3>
                    <p style={{ lineHeight: '1.8', color: '#ccc' }}>
                        Dedicated to the preservation of Sanatana Dharma and the teachings of Guru Gnanananda Maharaj.
                        Join us in the journey towards spiritual enlightenment and inner peace.
                    </p>
                    <div className={styles.quoteBox}>
                        <span className={styles.sanskrit}>"Purnamadah Purnamidam..."</span>
                        <p>"That is whole, this is whole. From the wholeness emerges the wholeness."</p>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/" className={styles.link}>Home</Link></li>
                        <li><Link href="/about" className={styles.link}>About</Link></li>
                        <li><Link href="/temples" className={styles.link}>Temples & Ashrams</Link></li>
                        <li><Link href="/gallery" className={styles.link}>Gallery</Link></li>
                        <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Contact Us</h3>

                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div>
                            <strong>SRI DYANESHWAR <br />MAHARJ SAMASTHANAM</strong><br />
                            Thiruvannamalai, <br />Tamil Nadu, India
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div>
                            saintdyaneshwarmaharaj@gmail.com
                        </div>
                    </div>
                </div>

                {/* Column 4: Newsletter & Social */}
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div>© {new Date().getFullYear()} Gynadever Organization. All Rights Reserved.</div>

            </div>
        </footer>
    );
}
