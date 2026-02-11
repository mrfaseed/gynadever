"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        {/* You can replace this text with an SVG or Image logo if available */}
        <span className={styles.logoText}>Gynadever Maharaj</span>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/temples" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Temples
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/gallery" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
