import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &#xa9; {new Date().getFullYear()} Paweł Kromołowski
    </footer>
  );
};

export default Footer;
