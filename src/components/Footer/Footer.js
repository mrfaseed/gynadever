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
                        <span className={styles.icon}>📍</span>
                        <div>
                            <strong>SRI RAMANAM BANK</strong><br />
                            Ramamanthiram, #2, Vinayagam St,<br />
                            Perambur, Vivekanandapuram,<br />
                            West Mambalam, Chennai - 600033
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.icon}>📞</span>
                        <div>
                            044 2489 3736<br />
                            +91 98765 43210
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.icon}>✉️</span>
                        <div>
                            info@gynadever.org<br />
                            support@gynadever.org
                        </div>
                    </div>
                </div>

                {/* Column 4: Newsletter & Social */}
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div>© {new Date().getFullYear()} Gynadever Organization. All Rights Reserved.</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                    <Link href="/terms" className={styles.link}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
