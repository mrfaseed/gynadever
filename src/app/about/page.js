"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './about.module.css';
import GlobalLoader from '../../components/GlobalLoader';

// Lazy load components with a religious loader fallback
const HeroSection = dynamic(() => import('./components/HeroSection'), {
    loading: () => <GlobalLoader />,
    ssr: false
});

const DedicationSection = dynamic(() => import('./components/DedicationSection'), {
    loading: () => <div className={styles.sectionLoader}><span className={styles.omSymbol}>ॐ</span> Loading Divine Dedication...</div>
});

const BioSection = dynamic(() => import('./components/BioSection'), {
    loading: () => <div className={styles.sectionLoader}><span className={styles.omSymbol}>ॐ</span> Loading Biography...</div>
});

const LiteratureSection = dynamic(() => import('./components/LiteratureSection'), {
    loading: () => <div className={styles.sectionLoader}><span className={styles.omSymbol}>ॐ</span> Loading Sacred Texts...</div>
});

const AmrutanubhavSection = dynamic(() => import('./components/AmrutanubhavSection'), {
    loading: () => <div className={styles.sectionLoader}><span className={styles.omSymbol}>ॐ</span> Loading Wisdom...</div>
});

const QuoteSection = dynamic(() => import('./components/QuoteSection'), {
    loading: () => <div className={styles.sectionLoader}><span className={styles.omSymbol}>ॐ</span> Loading Enlightenment...</div>
});

const BuddhaQuoteSection = dynamic(() => import('./components/BuddhaQuoteSection'), {
    loading: () => <div className={styles.sectionLoader}><span className={styles.omSymbol}>ॐ</span> Loading Truth...</div>
});

export default function About() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        setTimeout(() => {
            if (sectionRefs.current) {
                sectionRefs.current.forEach((el) => {
                    if (el) observer.observe(el);
                });
            }
        }, 1000);

        return () => {
            if (sectionRefs.current) {
                sectionRefs.current.forEach((el) => {
                    if (el) observer.unobserve(el);
                });
            }
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <div className={styles.container}>
            <HeroSection />
            <DedicationSection addToRefs={addToRefs} />
            <BioSection addToRefs={addToRefs} />
            <LiteratureSection addToRefs={addToRefs} />
            <AmrutanubhavSection addToRefs={addToRefs} />
            <QuoteSection addToRefs={addToRefs} />
            <BuddhaQuoteSection addToRefs={addToRefs} />
        </div>
    );
}
