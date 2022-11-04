import Link from 'next/link';
import styles from './Header.module.scss';

import MobileMenu from './MobileMenu';
import Socials from './Socials';

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
      <Socials type='desktop' />
      <MobileMenu />
    </header>
  );
};

export default Header;
