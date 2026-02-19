'use client';

import React from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

const galleryItems = [
    {
        id: 6,
        title: "Tiger of Wisdom",
        image: "/gallery/dynaneshwar-tiger.jpg",
        size: "wide", // Spans 2 cols
        featured: true
    },
    {
        id: 1,
        title: "Divine Presence",
        image: "/gallery/swami-1.jpg",
        size: "normal"
    },
    {
        id: 2,
        title: "Sacred Teachings",
        image: "/gallery/swami-2.jpg",
        size: "normal"
    },
    {
        id: 7,
        title: "Eternal Light",
        image: "/gallery/download-8.jpg",
        size: "tall" // Spans 2 rows
    },
    {
        id: 3,
        title: "Dnyaneshwar Maharaj",
        image: "/gallery/swami-3.jpg",
        size: "wide"
    },
    {
        id: 4,
        title: "Serene Meditation",
        image: "/gallery/swami-4.jpg",
        size: "normal"
    },
    {
        id: 5,
        title: "Graceful Blessings",
        image: "/gallery/swami-5.jpg",
        size: "tall"
    }
];

const GalleryPage = () => {
    return (
        <div className={styles.container}>
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

            <div className={styles.titleSection}>
                <h1 className={styles.title}>Divine Gallery</h1>
                <p className={styles.subtitle}>
                    A visual journey through the divine life and legacy.
                </p>
            </div>

            <div className={styles.galleryGrid}>
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.galleryItem} ${styles[item.size]} ${item.featured ? styles.alwaysShowOverlay : ''}`}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={styles.galleryImage}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.overlay}>
                                <h3 className={`${styles.itemTitle} ${item.featured ? styles.featuredText : ''}`}>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;