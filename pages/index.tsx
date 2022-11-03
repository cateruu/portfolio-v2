import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Paweł Kromołowski</title>
        <meta
          name='description'
          content='Paweł Kromołowski Front-End Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={styles.landing}>
          <h2 className={styles.proffesion}>Front-End Developer</h2>
          <div className={styles.blurP}></div>
          <div className={styles.blurB}></div>
        </section>
      </main>
    </>
  );
};

export default Home;
