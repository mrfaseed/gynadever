import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundWrapper}>
                <img
                    src="/bg1_circle.png"
                    alt="Rotating Background"
                    className={styles.backgroundImage}
                />
            </div>
            {/* Content can go here */}
        </div>
    );
};

export default Home;
