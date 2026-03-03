"use client";

import Image from 'next/image';
import styles from './temples.module.css';

const temples = [
    {
        id: 1,
        name: "ஆலந்தி - சஞ்சீவன் சமாதி",
        location: "புனே, மகாராஷ்டிரா",
        description: (
            <>
                <p>
                    <span className={styles.highlight}>ஆலந்தி</span> என்பது
                    சந்த் ஞானேஸ்வர் மகாராஜ் கி.பி. 1296 இல் உயிருடன் <span className={styles.highlight}>சஞ்சீவன் சமாதி</span> அடைந்த புனிதமான இடமாகும்.
                    அவர் இன்னும் சமாதியில் உயிருடன் இருந்து ஆன்மீக ஆற்றலை வெளிப்படுத்துகிறார் என்று நம்பப்படுகிறது.
                </p>
                <br />
                <p>
                    பக்தர்கள் தெய்வீக அமைதியை உணர இங்கு வருகிறார்கள், குறிப்பாக
                    <span className={styles.highlight}> கார்த்திகி ஏகாதசி</span> திருவிழாவின் போது.
                </p>
            </>
        ),
        image: "/Alandi.jpg"
    },
    {
        id: 2,
        name: "பைதான் - பிறந்த இடம்",
        location: "ஔரங்காபாத், மகாராஷ்டிரா",
        description: (
            <>
                <p>
                    <span className={styles.highlight}>பைதான்</span>, கோதாவரி நதிக்கரையில் அமைந்துள்ள
                    இந்த இடம் அவரது பூர்வீக வீடாகும்.
                </p>
                <br />
                <p>
                    இந்த புனித இடம் அவருடைய ஆரம்பகால போராட்டங்களுக்கும் அற்புதங்களுக்கும் சாட்சியாக நின்றது.
                    அருகிலுள்ள <span className={styles.highlight}> ஜாயக்வாடி அணை</span> மற்றும் பூந்தோட்டம் இதை அமைதியான பயணத் தலமாக்குகின்றன.
                </p>
            </>
        ),
        image: "/Paithan.webp"
    },
    {
        id: 3,
        name: "நேவாசா - ஞானேஸ்வரி இயற்றப்பட்ட இடம்",
        location: "அகமதுநகர், மகாராஷ்டிரா",
        description: (
            <>
                <p>
                    <span className={styles.highlight}>நேவாசா</span> என்பது அவர்
                    தனது மகத்தான படைப்பான <span className={styles.highlight}>ஞானேஸ்வரி</span>-ஐ இயற்றிய இடமாகும்.
                </p>
                <br />
                <p>
                    இந்தக் கோவிலில் ஒரு தூண் உள்ளது — அவர் வசனங்களை சொல்லிக் கொடுக்கும்போது சாய்ந்து நின்ற தூண் —
                    மராத்தி இலக்கியத்தின் பிறப்பிடத்தை குறிக்கிறது.
                </p>
            </>
        ),
        image: "/ancient_book.png"
    }
];

export default function Temples() {
    return (
        <div className={styles.container}>
            {/* Layers */}
            <div className={styles.pageBackground}></div>

            {/* Background Mandalas */}
            <div className={styles.backgroundEffects}>
                <img
                    src="/bg1_circle.png"
                    alt=""
                    className={`${styles.mandala} ${styles.mandalaTopLeft}`}
                />
                <img
                    src="/bg1_circle.png"
                    alt=""
                    className={`${styles.mandala} ${styles.mandalaBottomRight}`}
                />
            </div>

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>புனித கோவில்கள்</h1>
                    <p className={styles.subtitle}>
                        சந்த் ஞானேஸ்வர் மகாராஜின் வாழ்க்கை மற்றும் பரம்பரையுடன் தொடர்புடைய புனிதமான இடங்களைக் கண்டறியுங்கள்.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                {temples.map((temple) => (
                    <div key={temple.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={temple.image}
                                alt={temple.name}
                                fill
                                className={styles.templeImage}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.templeName}>{temple.name}</h2>
                            <div className={styles.location}>
                                <span className={styles.locationIcon}>📍</span> {temple.location}
                            </div>
                            <div className={styles.description}>
                                {temple.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

