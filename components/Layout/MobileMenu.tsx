import Link from 'next/link';
import { useState } from 'react';

import styles from './MobileMenu.module.scss';
import Socials from './Socials';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link
        href='#projects'
        className={`${styles.linkMobile} ${isMenuOpen ? styles.open : ''}`}
        scroll={false}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Projects
      </Link>
      <Link
        href='#about'
        className={`${styles.linkMobile} ${isMenuOpen ? styles.open : ''}`}
        scroll={false}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        About
      </Link>
      <Link
        href='#skills'
        className={`${styles.linkMobile} ${isMenuOpen ? styles.open : ''}`}
        scroll={false}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Skills
      </Link>
      <Socials
        type='mobile'
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
};

export default MobileMenu;
