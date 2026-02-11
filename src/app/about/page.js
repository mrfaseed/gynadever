"use client";

import Image from 'next/image';
import styles from './about.module.css';
import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRefs = useRef([]);

    // Simple scroll fade-in effect
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            if (sectionRefs.current) {
                sectionRefs.current.forEach((el) => {
                    if (el) observer.unobserve(el);
                });
            }
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };


    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>About Us</h1>
                    <h2 className={styles.subtitle}>எங்களைப் பற்றி</h2>
                </div>
            </section>

            {/* Dedication Section */}
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
                                src="/sage_silhouette.png"
                                alt="Guru Gnanananda Maharaj"
                                fill
                                className={styles.bookCoverImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
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
                </div>
            </section>

            {/* Literature Section: Dnyaneshwari */}
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

            {/* Literature Section: Amrutanubhav */}
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
                        இந்த நூல் இதுவரை தமிழில் கிடையாது. ஆனால் திருவண்ணாமலையில் ஒரு ஆத்ம சாதகர் ஒருவருக்கு ஸ்ரீ ஞானேஸ்வர் மகாராஜ் அவருள் இருந்து
                        தமிழ் மொழியில் கொஞ்சம் கூட தத்துவம் மாறாமல் மொழிபெயர்த்துள்ளார்.
                        இப்படிப்பட்ட நூல் அனைவருக்கும் கிடைப்பதற்காக, பதிவிறக்கம் செய்து கொள்வதற்கு ஏதுவாக இந்த இணையத்தளத்தில் கொடுத்துள்ளோம்.
                    </p>

                    <div className={styles.downloadSection}>
                        <a href="#" className={styles.downloadBtn} onClick={(e) => e.preventDefault()}>Download Amrutanubhav</a>
                        <a href="#" className={styles.downloadBtn} onClick={(e) => e.preventDefault()}>Download Changdev Pasashti</a>
                    </div>
                </div>
            </section>

            {/* Philosophy / Nirvana Section */}
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
                        <p>ஒரு நபராக நீ அங்கே இல்லை. அங்கு இருப்பது தூய சுத்த சிந்தனை (Pure Consciousness) மட்டுமே.</p>
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
        </div>
    );
}
