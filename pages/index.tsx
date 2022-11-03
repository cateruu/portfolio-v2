import Head from 'next/head';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
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
      </main>
    </>
  );
};

export default Home;
