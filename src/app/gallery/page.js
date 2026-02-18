'use client';

import React from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import './style.scss';

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-thumbnail.css';

const GalleryPage = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <LightGallery
                elementClassNames={'gallery-grid'}
                plugins={[lgZoom, lgShare, lgHash]}
                speed={500}
            >
                {/* Gallery Images */}
                <a
                    data-lg-size="1600-2400"
                    className="gallery-item-card"
                    data-src="/gallery/swami-1.jpg"
                    data-sub-html="<h4>Swami Gnanaandha Maharaj</h4>"
                >
                    <div className="card-image-wrapper">
                        <img
                            alt="Swami Gnanaandha Maharaj 1"
                            src="/gallery/swami-1.jpg"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Swami Gnanaandha Maharaj</h3>
                    </div>
                </a>

                <a
                    data-lg-size="1600-2400"
                    className="gallery-item-card"
                    data-src="/gallery/swami-2.jpg"
                    data-sub-html="<h4>Swami Gnanaandha Maharaj</h4>"
                >
                    <div className="card-image-wrapper">
                        <img
                            alt="Swami Gnanaandha Maharaj 2"
                            src="/gallery/swami-2.jpg"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Swami Gnanaandha Maharaj</h3>
                    </div>
                </a>

                <a
                    data-lg-size="1600-2400"
                    className="gallery-item-card"
                    data-src="/gallery/swami-3.jpg"
                    data-sub-html="<h4>Swami Gnanaandha Maharaj</h4>"
                >
                    <div className="card-image-wrapper">
                        <img
                            alt="Swami Gnanaandha Maharaj 3"
                            src="/gallery/swami-3.jpg"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Swami Gnanaandha Maharaj</h3>
                    </div>
                </a>

                <a
                    data-lg-size="1600-2400"
                    className="gallery-item-card"
                    data-src="/gallery/swami-4.jpg"
                    data-sub-html="<h4>Swami Gnanaandha Maharaj</h4>"
                >
                    <div className="card-image-wrapper">
                        <img
                            alt="Swami Gnanaandha Maharaj 4"
                            src="/gallery/swami-4.jpg"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Swami Gnanaandha Maharaj</h3>
                    </div>
                </a>

                <a
                    data-lg-size="1600-2400"
                    className="gallery-item-card"
                    data-src="/gallery/swami-5.jpg"
                    data-sub-html="<h4>Swami Gnanaandha Maharaj</h4>"
                >
                    <div className="card-image-wrapper">
                        <img
                            alt="Swami Gnanaandha Maharaj 5"
                            src="/gallery/swami-5.jpg"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Swami Gnanaandha Maharaj</h3>
                    </div>
                </a>
            </LightGallery>
        </div>
    );
};

const HeaderComponent = () => (
    <div className="header">
        <h1 className="header__title">Spiritual Gallery</h1>
        <p className="header__description">
            Experience the divine moments captured in time. A beautiful collection of Swami Gnanaandha Maharaj.
        </p>
    </div>
);

export default GalleryPage;