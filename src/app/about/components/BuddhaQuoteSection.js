import React from 'react';
import styles from '../about.module.css';

const BuddhaQuoteSection = ({ addToRefs }) => {
    return (
        <section className={`${styles.quoteSection} ${styles.buddhaSection}`} ref={addToRefs}>
            <div className={styles.buddhaBackground}>
                <img src="/buddha_light.png" alt="Buddha" />
                <div className={styles.buddhaOverlayGradient}></div>
            </div>
            <div className={styles.quoteContent} style={{ position: 'relative', zIndex: 2, paddingTop: '15rem' }}>
                <div className={styles.quoteText}>
                    <p>உங்களுக்கு ஒரு விஷயம் நன்கு தெரியும். உங்களுடைய இந்த நான் என்பது நீங்கள் அறிந்ததே. ஆகவே இந்த நான் எங்கு உள்ளது யார் இது என்று உங்களுள் தேடி கொண்டு இருக்கும் போதே இப்படி நான் ஒன்று கிடையவே கிடையாது என்பதை காண்பீர்கள். (முற்றிலும் தப்பான வெறும் தோற்றமே நான் என்பது ஒன்று உண்டு என்பது உங்களது கற்பனையே.</p>
                </div>
                <span className={styles.nirvana} style={{ fontSize: '2.5rem', letterSpacing: '4px' }}>
                    - கெளதம புத்தர்
                </span>
            </div>
        </section>
    );
};

export default BuddhaQuoteSection;
