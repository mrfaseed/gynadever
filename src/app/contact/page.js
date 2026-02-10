"use client";

import React, { useEffect, useRef } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`; // Gold with low opacity
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 100)})`; // Fading gold line
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className={styles.container}>
            <canvas ref={canvasRef} className={styles.canvas} />

            <div className={styles.card}>

                <h1 className={styles.title}>Contact Us</h1>

                <div className={styles.divider}></div>

                <div className={styles.content}>
                    <h2 className={styles.subtitle}>Sri Gnaneswara Maharaj Samasthanam</h2>

                    <div className={styles.tamilText}>
                        <p>ஸ்ரீ ஞானேஸ்வர் மகாராஜ் சமஸ்தானம்</p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.address}>
                        <p>Thiruvannamalai</p>
                        <p className={styles.tamilText} style={{ fontSize: '1.2rem' }}>திருவண்ணாமலை</p>
                        <br />
                        <p>Tamil Nadu, India</p>
                        <p className={styles.tamilText} style={{ fontSize: '1.2rem' }}>தமிழ்நாடு, இந்தியா</p>
                    </div>
                </div>

                <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                        <span className={styles.icon}>📍</span>
                        <span className={styles.label}>Location</span>
                        <span className={styles.value}>Thiruvannamalai</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.icon}>✉️</span>
                        <span className={styles.label}>Email</span>
                        <span className={styles.value}>info@gynadever.org</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
