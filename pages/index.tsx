import Head from 'next/head';
import About from '../components/About/About';

import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
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
        <Landing />
        <Projects />
        <section className={styles.container}>
          <About />
          <Skills />
          <div className={styles.blur}></div>
        </section>
      </main>
    </>
  );
};

export default Home;
