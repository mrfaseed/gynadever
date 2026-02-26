import React from 'react';
import styles from '../about.module.css';

const BioSection = ({ addToRefs }) => {
    return (
        <section className={`${styles.section} ${styles.bioSection}`} ref={addToRefs}>
            <h2 className={styles.sectionTitle}>ஸ்ரீ ஞானேஸ்வர் மகாராஜ் (1275–1296)</h2>
            <div className={styles.bioContent}>
                <p>
                    இந்த இணையத்தளமூலம் 13-ஆம் நூற்றாண்டில் மகாராஷ்டிராவில் வாழ்ந்த மராட்டிய தத்துவஞானி மற்றும் யோகி ஆவார் ஸ்ரீ ஞானேஸ்வர் மகாராஜ்.
                    இவர் மௌலி (அம்மா) என்றும் அன்போடு அழைக்கப்படுகிறார். வர்காரி (Varkari) பக்தி இயக்கத்தின் முக்கிய தூணாகக் கருதப்படும் இவர்,
                    வெறும் 21 வயதில் ஆளந்தியில் ஜீவசமாதி அடைந்தார்.
                </p>

                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>காலம் &amp; பிறப்பு:</span>
                    பொ.ஊ. 1275 இல், மகாராஷ்டிராவின் பைத்தன் அருகே கோதாவரி நதிக்கரையில் உள்ள ஆபேகாவ் என்ற இடத்தில் Deshastha Brahmin குடும்பத்தில் பிறந்தார்.
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>பெற்றோர்:</span>
                    தந்தை விட்டல்பந்த் (Vitthalpant) மற்றும் தாய் ருக்மிணி (Rukmini).
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>குரு:</span>
                    ஞானேஸ்வரின் மூத்த சகோதரர் நிவ்ருத்திநாத் (Nivrithinath) தான் இவருக்கு குரு.
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>படைப்புகள்:</span>
                    பகவத் கீதையின் தத்துவத்தை சாமானிய மக்களும் புரிந்துகொள்ளும் வகையில், மராத்திய மொழியில் &quot;ஞானேஸ்வரி&quot; (Dnyaneshwari - Bhavarthadeepika) என்ற நூலை 15 வயதில் எழுதினார்.
                    இதுதவிர, அம்ருதானுபவ், சாங்தேவ் பாசாஷ்டி, ஹரிபாத் (Abhangas) ஆகியவற்றை இயற்றியுள்ளார்.
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>சமாதி:</span>
                    1296 இல் ஆளந்தி (Alandi) என்னும் இடத்தில், பூனே அருகில், ஜீவசமாதி அடைந்தார்.
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>அற்புதங்கள்:</span>
                    சிறு வயதிலேயே பல அற்புதங்களை நிகழ்த்தியதாகக் கூறப்படுகிறது, இதில் சாங்கதேவர் (Changdev) என்ற யோகியின் கர்வத்தை அடக்கியதும், எருமையை வேதம் ஓத வைத்ததும் முக்கியமானவை.
                </div>
                <div className={styles.infoCard}>
                    <span className={styles.infoTitle}>சிறப்புகள்:</span>
                    ஸ்ரீ ஞானேஸ்வர் மகாராஜ் நினைவாக நமது மத்திய அரசாங்கம் 1999 ஆம் ஆண்டு Sant Dnyaneshwar Rs.100 Rs.1 (UNC SET) மற்றும் ஒரு ரூபாய் நாணயம் வெளியிட்டு இருக்கிறார்கள். மேலும் 12101 ஞானேஸ்வரி விரைவு ரயில் மும்பை to கொல்கத்தா செல்லும் தொடர்வண்டி இயங்குகிறது. இதையும் இணையத்தளத்தில் பார்க்கலாம். இவ்வளவு சிறப்பு பொருந்திய மகான் ஸ்ரீ ஞானேஸ்வர் மகாராஜ் என்பதை அறியலாம்.
                </div>

            </div>
        </section>
    );
};

export default BioSection;
