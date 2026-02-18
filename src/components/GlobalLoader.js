import React from 'react';
import styles from './loader.module.css';

const GlobalLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.spinner}>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
};

export default GlobalLoader;
