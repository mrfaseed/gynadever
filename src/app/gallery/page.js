'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './gallery.module.css';

const images = [
    { id: 1, src: '/Coin.jpeg', alt: 'Sacred Coin', caption: 'Sacred Coin', size: 'tall' },
    { id: 2, src: '/1.jpeg', alt: 'Divine Blessings', caption: 'Divine Blessings', size: 'wide' },
    { id: 3, src: '/gallery/swami-3.jpg', alt: 'Swami Gnanaandha Maharaj', caption: 'Spiritual Grace', size: 'normal' },
    { id: 4, src: '/Tiger.jpg', alt: 'Tiger', caption: 'Changdev meets Dnyaneshwar', size: 'wide' },
    { id: 5, src: '/jpeg', alt: 'Divine Image', caption: 'Divine Presence', size: 'normal' },
];

const GalleryPage = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loaded, setLoaded] = useState({});
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    const openLightbox = (index) => {
        setActiveIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const navigate = (dir) => {
        setActiveIndex((prev) => (prev + dir + images.length) % images.length);
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxOpen]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            setMousePos({
                x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
                y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
            });
        };
        const el = heroRef.current;
        if (el) el.addEventListener('mousemove', handleMouseMove);
        return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
    }, []);

    return (
        <div className={styles.page}>

            {/* ── HERO ── */}
            <section className={styles.hero} ref={heroRef}>
                {/* Animated mandala rings */}
                <div className={styles.ring1} />
                <div className={styles.ring2} />
                <div className={styles.ring3} />

                {/* Floating particles */}
                {[...Array(18)].map((_, i) => (
                    <span key={i} className={styles.particle} style={{ '--i': i }} />
                ))}

                <div
                    className={styles.heroContent}
                    style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
                >
                    <p className={styles.eyebrow}>✦ Divine Collection ✦</p>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.titleLine1}>Spiritual</span>
                        <span className={styles.titleLine2}>Gallery</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Sacred moments captured in light — a visual journey through the divine presence
                        of <em>Swami Gnanaandha Maharaj</em>.
                    </p>
                    <div className={styles.scrollHint}>
                        <span className={styles.scrollLine} />
                        <span className={styles.scrollText}>Scroll to explore</span>
                    </div>
                </div>

                <div className={styles.heroBgImage}
                    style={{ transform: `translate(${mousePos.x * 0.08}px, ${mousePos.y * 0.08}px)` }}
                />
            </section>

            {/* ── GALLERY ── */}
            <section className={styles.gallerySection}>
                <div className={styles.sectionLabel}>
                    <span className={styles.labelLine} />
                    <span>Photographs</span>
                    <span className={styles.labelLine} />
                </div>

                <div className={styles.masonryGrid}>
                    {images.map((img, i) => (
                        <div
                            key={img.id}
                            className={`${styles.masonryItem} ${styles[img.size]}`}
                            onClick={() => openLightbox(i)}
                            style={{ '--delay': `${i * 0.12}s` }}
                        >
                            {/* Shimmer skeleton while loading */}
                            {!loaded[img.id] && <div className={styles.skeleton} />}

                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`${styles.masonryImg} ${loaded[img.id] ? styles.imgLoaded : ''}`}
                                onLoad={() => setLoaded((p) => ({ ...p, [img.id]: true }))}
                            />

                            {/* Gold corner accents */}
                            <span className={`${styles.corner} ${styles.cornerTL}`} />
                            <span className={`${styles.corner} ${styles.cornerTR}`} />
                            <span className={`${styles.corner} ${styles.cornerBL}`} />
                            <span className={`${styles.corner} ${styles.cornerBR}`} />

                            {/* Hover overlay */}
                            <div className={styles.overlay}>
                                <div className={styles.overlayInner}>
                                    <span className={styles.overlayIcon}>☸</span>
                                    <p className={styles.overlayCaption}>{img.caption}</p>
                                    <span className={styles.overlayHint}>Click to expand</span>
                                </div>
                            </div>

                            {/* Index badge */}
                            <div className={styles.badge}>{String(i + 1).padStart(2, '0')}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightboxOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">✕</button>

                    <button className={`${styles.lbNav} ${styles.lbPrev}`}
                        onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Prev">
                        ‹
                    </button>

                    <div className={styles.lbContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.lbImgWrap}>
                            <img
                                src={images[activeIndex].src}
                                alt={images[activeIndex].alt}
                                className={styles.lbImg}
                                key={activeIndex}
                            />
                        </div>
                        <div className={styles.lbMeta}>
                            <p className={styles.lbCaption}>{images[activeIndex].caption}</p>
                            <p className={styles.lbCounter}>{activeIndex + 1} / {images.length}</p>
                        </div>
                        {/* Thumbnail strip */}
                        <div className={styles.lbThumbs}>
                            {images.map((img, i) => (
                                <div
                                    key={img.id}
                                    className={`${styles.lbThumb} ${i === activeIndex ? styles.lbThumbActive : ''}`}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    <img src={img.src} alt={img.alt} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className={`${styles.lbNav} ${styles.lbNext}`}
                        onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;