import Link from 'next/link';
import styles from './Header.module.scss';

import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Paweł Kromołowski</h1>
      <nav>
        <Link href='#projects' className={styles.link} scroll={false}>
          Projects
        </Link>
        <Link href='#about' className={styles.link} scroll={false}>
          About
        </Link>
        <Link href='#skills' className={styles.link} scroll={false}>
          Skills
        </Link>
      </nav>
      <section>
        <a
          href='https://www.linkedin.com/in/pawelkrml/'
          target='_blank'
          rel='noopener'
          className={styles.icon}
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/cateruu'
          target='_blank'
          rel='noopener'
          className={styles.icon}
        >
          <FaGithubSquare />
        </a>
        <a href='mailto:pawelkrml@gmail.com' className={styles.icon}>
          <FaEnvelopeSquare />
        </a>
      </section>
    </header>
  );
};

export default Header;
