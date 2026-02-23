import React from 'react';
import Image from 'next/image';
import styles from '../about.module.css';

const DedicationSection = ({ addToRefs }) => {
    return (
        <section className={styles.section} ref={addToRefs}>
            <div className={styles.dedicationText}>
                <p>
                    எங்களுடைய குருநாதர் ஸ்வாமிஜி ஞானானந்த மஹராஜின் பொற்பாதங்களை வணங்கி,
                    ஒவ்வொரு ஜீவனும் விடுதலைக்காக பயணிக்கும் அப்படிப்பட்ட அன்பர்களுக்கு இந்த இணையதளத்தை சமர்ப்பிக்கிறோம்.
                </p>
                <br />
                <p>
                    இந்த வெப்சைட் சொல்லக் கூடிய சாராம்சம்: தேடுதலில் இருப்பவர்கள் தேடுபவரைப் பார்த்தால், அப்படி ஒரு நபர் உங்களில் கிடையாது.
                    இருப்பது வெறுமை (emptiness) மட்டுமே.
                    இதைத் தெரிந்த மாத்திரத்தில் தெரிபவன் இல்லை; இருப்பது மட்டுமே.
                    அப்படி இருப்பதை &quot;ஆத்மா&quot; என்று பெயர் கொடுத்தால் கூட, இதைப் பற்றி பேசுபவன் வந்து விடுவான்.
                    எனவே, &quot;எதுவும் இல்லை&quot; என்ற சொல் கூட கிடையாது.
                </p>
            </div>
            <div className={styles.dedicationImage}>
                <div className={styles.bookWrapper}>
                    <div className={styles.book3D}>
                        <Image
                            src="/Cover.png"
                            alt="Guru Gnanananda Maharaj"
                            fill
                            className={styles.bookCoverImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DedicationSection;
