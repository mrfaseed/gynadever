'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import styles from './Slideshow.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
    '/1.jpeg',
    '/gallery/swami-3.jpg',
    '/Tiger.jpg',
    '/Cover.png',
];

const Slideshow = () => {
    return (
        <div className={styles.slideshowContainer}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className={styles.mySwiper}
            >
                {galleryImages.map((src, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={src}
                                alt={`Swami Slide ${index + 1}`}
                                className={`${styles.slideImage} ${index === 0 ? styles.firstSlideImage : styles.otherSlideImage}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slideshow;
