"use client";

import Image from 'next/image';
import styles from './temples.module.css';

const temples = [
    {
        id: 1,
        name: "Alandi - Sanjeevan Samadhi",
        location: "Pune, Maharashtra",
        description: (
            <>
                <p>
                    <span className={styles.highlight}>Alandi</span> is the sacred place where
                    Sant Dnyaneshwar Maharaj took <span className={styles.highlight}>Sanjeevan Samadhi</span> alive in 1296 CE.
                    It is believed he is still alive in the Samadhi, radiating spiritual energy.
                </p>
                <br />
                <p>
                    Devotees visit to experience divine peace, especially during the
                    <span className={styles.highlight}> Kartiki Ekadashi</span> festival.
                </p>
            </>
        ),
        image: "/spiritual_hero.png" // Using hero as placeholder for Alandi
    },
    {
        id: 2,
        name: "Paithan - Birthplace",
        location: "Aurangabad, Maharashtra",
        description: (
            <>
                <p>
                    <span className={styles.highlight}>Paithan</span>, situated on the banks of
                    river Godavari, is his ancestral home.
                </p>
                <br />
                <p>
                    It witnessed the early struggles and miracles of the saint's life. The nearby
                    <span className={styles.highlight}> Jayakwadi Dam</span> and Garden make it a serene destination.
                </p>
            </>
        ),
        image: "/background_full.png" // Fallback placeholder since generation is capped
    },
    {
        id: 3,
        name: "Nevasa - Dnyaneshwari composed",
        location: "Ahmednagar, Maharashtra",
        description: (
            <>
                <p>
                    <span className={styles.highlight}>Nevasa</span> is where he composed
                    the magnum opus <span className={styles.highlight}>Dnyaneshwari</span>.
                </p>
                <br />
                <p>
                    The temple has a pillar against which he leaned while dictating the verses, marking the
                    birth of Marathi literature.
                </p>
            </>
        ),
        image: "/ancient_book.png" // Appropriate context
    }
];

export default function Temples() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Sacred Temples</h1>
                    <p className={styles.subtitle}>
                        Discover the holy places associated with the life and legacy of Sant Dnyaneshwar Maharaj.
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
