import React from 'react';
import styles from '../about.module.css';

const QuoteSection = ({ addToRefs }) => {
    return (
        <section className={styles.quoteSection} ref={addToRefs}>
            <div className={styles.quoteOverlay}></div>
            <div className={styles.quoteContent}>
                <div className={styles.quoteText}>
                    <p>நீ மேலும் மேலும் ஆழமாகச் சென்றால், இறுதியில் உன்னுள் ஒரு வெறுமை மட்டுமே இருப்பதை உணர்வாய்.</p>
                    <p>அந்த நிலையில், நீ ஒரு பூஜ்ஜியம் (Zero) என்பதை உணர்வாய்.</p>
                    <p>அதேதான் ஞானோதயத்தின் (Enlightenment) உச்ச நிலை.</p>
                    <p>அங்கு உன் அகங்காரம் (Ego) முற்றிலும் மறைந்து விடுகிறது.</p>
                    <p>உன் பேராசை, பற்றுதல், ஆசைகள் அனைத்தும் கரைந்து போகின்றன.</p>
                    <p>“நான்” என்ற தனி மனித உணர்வு அங்கே இல்லை.</p>
                    <p>ஒரு நபராக நீ அங்கே இல்லை.</p>
                    <p>அந்த நிலைதான் வெறுமை. அந்த வெறுமை ஒரு இல்லாமை அல்ல; அது ஒளி, உயிர், எல்லையற்ற நிலை.</p>
                    <p>புத்தர் இந்த நிலையையே</p>
                </div>

                <span className={styles.nirvana}>“நிர்வாணம்”</span>

                <div className={styles.quoteText}>
                    <p>(Nirvana) என்று அழைத்தார்.</p>
                    <p>நிர்வாணம் என்றால் — எதுவுமில்லாமை.</p>
                    <p>ஆனால் அது அழிவு அல்ல; அது எல்லாவற்றையும் தாண்டிய நிலை.</p>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
