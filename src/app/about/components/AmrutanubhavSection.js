import React from 'react';
import styles from '../about.module.css';

const AmrutanubhavSection = ({ addToRefs }) => {
    return (
        <section className={`${styles.section} ${styles.separatorSection}`} ref={addToRefs}>
            <div className={`${styles.dedicationText} ${styles.transparentCard}`}>
                <h2 className={styles.sectionTitle}>அமிர்தனுபாவம் (Amrutanubhav)</h2>
                <p>
                    &quot;ஞானேஸ்வரி&quot; பகவத் கீதை ஒருவர் ஒருவருக்கு சொன்ன உபதேசம்.
                    ஆனால் இவருடைய உள் அனுபவத்தில் இருந்து சொல்லப்பட்ட, வேதங்களுக்கு இணையான நூல் &quot;அமிர்தனுபாவம்&quot;.
                </p>
                <br />
                <p>
                    இது ப்ரம்மம், இருக்கிறது, ஆத்மா என்று கூட பெயர் வைப்பதில்லை. கொஞ்சம் கூட இவர் &quot;நான்&quot; என்கிற தனித்தன்மை வைப்பதில்லை.
                    இந்த நூலைப் படிக்கும் பொழுதே &quot;நான்&quot; என்ற தனித்தன்மை கரைந்துவிடும். இது படித்து அடுத்தவர்களுக்கு பாடம் எடுக்கும் நூல் கிடையாது.
                    தனித்தன்மையின் சாம்பல் கூட மிஞ்சாத ஒரு பொக்கிஷம்.
                </p>
                <br />
                <p>
                    இந்த நூல் இதுவரை தமிழில் கிடையாது .ஆனால் திருவண்ணாமலையில் ஒரு ஆத்ம சாதகர் ஒருவருக்கு ஸ்ரீ  ஞானேஸ்வர் மகாராஜ் அவருள் இருந்து தமிழ் மொழியில் கொஞ்சம் கூட தத்துவம் மாறாமல் மொழிபெயர்த்துள்ளார் .இப்படி பட்ட நூல் கிடைக்க நம் தமிழ் சமூகம் கொடுத்த அதிர்ஷ்டம் ஆகும் .இப்படி பட்ட நூல் அனைவருக்கும் கிடைப்பதற்காக பதிவிறக்கம் செய்து கொள்வதற்கு ஏதுவாக இந்த இணையத்தளத்தில் கொடுத்துளோம் . இதுதவிர, சாங்தேவ் பாசாஷ்டி, ஹரிபாத் (Abhangas) ஆகியவற்றை இயற்றியுள்ளார். இதுவும் பதிவிறக்கம் செய்யும் பொருட்டு கொடுத்துளோம்.
                </p>

                <div className={styles.downloadSection}>
                    <a href="https://firebasestorage.googleapis.com/v0/b/renomatedialysis.firebasestorage.app/o/%E0%AE%85%E0%AE%AE%E0%AE%BF%E0%AE%B0%E0%AF%8D%E0%AE%A4%E0%AE%A9%E0%AF%81%E0%AE%AA%E0%AE%BE%E0%AE%B5%E0%AE%AE%E0%AF%8D.pdf?alt=media&token=7b823998-ccfb-41b4-89a7-26ee87c07926" className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">Download Amrutanubhav Tamil</a>
                   
                </div>
            </div>
        </section>
    );
};

export default AmrutanubhavSection;
