import Slideshow from './Slideshow';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            {/* Section 1: Full Screen Slideshow */}
            <div className={styles.slideshowSection}>
                <Slideshow />
            </div>


        </div>
    );
};

export default Home;
