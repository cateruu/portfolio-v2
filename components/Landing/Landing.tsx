import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <section className={styles.landing}>
      <h2 className={styles.proffesion}>Front-End Developer</h2>
      <div className={styles.blurP}></div>
      <div className={styles.blurB}></div>
    </section>
  );
};

export default Landing;
