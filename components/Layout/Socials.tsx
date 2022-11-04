import Link from 'next/link';

import styles from './Socials.module.scss';

import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa';

type Props = {
  type: string;
  isOpen?: boolean;
};

const Socials = ({ type, isOpen }: Props) => {
  return (
    <section className={`${type === 'mobile' ? styles.mobile : ''}`}>
      <Link
        href='https://www.linkedin.com/in/pawelkrml/'
        target='_blank'
        rel='noopener'
        className={`${type === 'desktop' ? styles.icon : styles.iconMobile} ${
          isOpen ? styles.open : ''
        }`}
      >
        <FaLinkedin />
      </Link>
      <Link
        href='https://github.com/cateruu'
        target='_blank'
        rel='noopener'
        className={`${type === 'desktop' ? styles.icon : styles.iconMobile} ${
          isOpen ? styles.open : ''
        }`}
      >
        <FaGithubSquare />
      </Link>
      <Link
        href='mailto:pawelkrml@gmail.com'
        className={`${type === 'desktop' ? styles.icon : styles.iconMobile} ${
          isOpen ? styles.open : ''
        }`}
      >
        <FaEnvelopeSquare />
      </Link>
    </section>
  );
};

export default Socials;
