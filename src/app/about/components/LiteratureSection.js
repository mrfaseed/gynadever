import React from 'react';
import Image from 'next/image';
import styles from '../about.module.css';

const LiteratureSection = ({ addToRefs }) => {
    return (
        <section className={`${styles.section} ${styles.literatureSection}`} ref={addToRefs}>
            <div className={styles.bookContainer}>
                <div className={styles.bookImageWrapper}>
                    <div className={styles.bookWrapper}>
                        <div className={styles.book3D}>
                            <Image
                                src="/ancient_book.png"
                                alt="Saint Dnyaneshwar"
                                fill
                                className={styles.bookCoverImage}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.bookContent}>
                    <h2 className={styles.bookTitle}>ஞானேஸ்வரி (பாவர்த்ததீபிகை)</h2>
                    <div className={styles.bookDesc}>
                        <p>
                            பகவத் கீதைக்கு எத்தனையோ விளக்கவுரை இருக்கிறது. ஆனால் ஸ்ரீ ஞானேஸ்வர் மகாராஜ் மராத்திய மொழியில் &quot;ஞானேஸ்வரி&quot; என்ற பெயரில் எழுதியுள்ளார்.
                            இதை தமிழில் பாவர்த்ததீபிகை என்ற பெயரில் திரு.கோதண்டராமய்யர் அவர்கள் கிபி 1896-ல் மராத்தியில் இருந்து தமிழுக்கு மொழிபெயர்த்தார்.
                        </p>
                        <br />
                        <p>
                            இந்த கீதை ஜீவன் முக்த நிலையை அடைய சொல்லப்பட்டதாகும். மற்ற உரைகள் உலக பரமனா விளக்கவுரைகளாகும் ஆனால் ஞானேஸ்வரி முற்றிலும் வேறுபட்டது.
                            இது சொரூபநிலையில் இருந்து விலகாமல் பேசுகிறது.
                            &quot;நான்&quot; என்ற அகங்காரம் போய்விட்டது என்று ஜீவன் முக்த நிலைமையை எடுத்துக்கூறுகிறது.
                        </p>
                    </div>

                    <div className={styles.addressBox}>
                        <div className={styles.addressTitle}>Get Your Copy / புத்தகம் கிடைக்குமிடம்:</div>
                        <p><strong>SRI RAMANAM BANK</strong></p>
                        <p>Ramamanthiram, #2, Vinayagam St, Perambur,</p>
                        <p>Vivekanandapuram, West Mambalam, Chennai, Tamil Nadu 600033</p>
                        <p>Phone: 044 2489 3736</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiteratureSection;
