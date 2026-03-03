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
                            பகவத் கீதைக்கு எத்தனையோ விளக்கவுரை இருக்கிறது ஆனால் ஒவ்வொன்றும் திருக்குறளில் சொல்வது போல் "எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள் மெய்ப்பொருள் காண்ப தறிவு" அவர் அவர் நிலை கேட்ப எழுதி இருக்கிறார்கள் .ஆனால் ஸ்ரீ  ஞானேஸ்வர் மகாராஜ் பகவத் கீதையின் தத்துவத்தை சாமானிய மக்களும் புரிந்துகொள்ளும் வகையில், மராத்திய மொழியில் "ஞானேஸ்வரி" என்ற பெயரில் எழுதி இருக்கிறார் .இதை தமிழில் பாவர்த்ததீபிகை என்ற "ஞானேஸ்வரி" என்ற பெயரில் திரு.கோதண்டராமய்யர் அவர்கள் கிபி 1896 லே கருத்து கொஞ்சம் கூட மாறாமல் மராத்தியில் இருந்து தமிழுக்கு மொழிபெயர்த்தார் .இந்த கீதை தான் மிகவும் உயர்ந்த நிலையில் உள்ள கீதை மொழிபெயர்ப்பு ஆகும் .ஏன் இவ்வளவு சிறப்பு வாய்ந்தது என்று சொல்கிறோம் என்றால் கீதை பொதுவாக ஒரு மனிதனின் ஜீவன் முக்த நிலையை அடைய சொல்லப்பட்டதாகும் .மற்ற உரைகள் பொறுத்தவரை அவை உலக பரமனா விளக்கஉரைகளாகும் அனால் ஞானேஸ்வரி முற்றிலும் வேறுபட்டது .இது சொரூபநிலையில் இருந்து விலகாமல் பேசுகிறது . கீதையில் கண்ணபிரான் என்ன சொன்னாரோ அதை அப்படியே சொல்கிறது . இரண்டு சுலோகங்களை உதாரணமாக பார்க்கலாம்
                        </p>

                    </div>

                    <div className={styles.slogamImagesContainer}>
                        <img src="/Slogam_top.png" alt="Slogam Top" className={styles.slogamImage} />
                        <img src="/slogam.png" alt="Slogam" className={styles.slogamImage} />
                    </div>

                    <div className={styles.bookDesc}>
                        <p>
                            மற்ற விளக்க உரையில் சமமா பார்ப்பார்கள் என்றல் பார்ப்பவன் ,பார்க்கப்படும் பொருள் ,இரண்டையும் சொல்பவன் இப்படி வைத்து கொண்டு விளக்கம் கொடுப்பார்கள் ஆனால் இவரோ எந்த அறியாமை கொண்டு நாம வந்துஇருக்கிறோமோ அந்த மூல நான் என்ற அகங்காரம் போய்விட்டாள் என்று ஜீவன் முக்த நிலைமையை எடுத்து கூறுகிறார் .இவ்வாறு கீதையின் சாராம்சத்தை எடுத்து கூறுவது என்பது இந்த நூலில் காண முடிகிறது .எனவே தான் இந்த &quot;ஞானேஸ்வரி&quot; கீதை விளக்க உரை அனைத்திலும் சிறந்தது என்று சொல்கிறோம் .இப்படி உயர்ந்த விளக்கம் என்பது ஒரு தன்னை உணர்ந்த மகான்களால் மட்டுமே உள்ளதை உள்ளபடி சொல்லமுடியும் .இப்படி பட்ட கீதை தேவைப்படுபவர்கள் நாங்கள் கொடுக்கக்கூடிய முகவரிக்கு கேட்டு வாங்கிக்கொள்ளாம் .
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
