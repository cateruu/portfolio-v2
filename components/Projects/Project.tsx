import Image from 'next/image';
import styles from './Project.module.scss';
import { Project } from './Projects';

type Props = {
  data: Project;
};

const Project = ({ data }: Props) => {
  return (
    <article className={styles.project}>
      <section className={styles.textContainer}>
        <header className={styles.header}>
          <div className={styles.nameContainer}>
            <h3 className={styles.name}>{data.name}</h3>
            <time className={styles.time}>{data.date}</time>
          </div>
          <div>
            <a
              href={data.live}
              target='_blank'
              rel='noopener'
              className={styles.link}
            >
              Live
            </a>
            <a
              href={data.code}
              target='_blank'
              rel='noopener'
              className={styles.link}
            >
              Code
            </a>
          </div>
        </header>
        <p className={styles.text}>{data.description}</p>
        <p className={styles.text}>{data.purpose}</p>
        <p className={styles.text}>{data.stack}</p>
      </section>
      <section className={styles.imageContainer}>
        <Image
          src={data.image}
          alt={data.name}
          layout='fill'
          className={styles.image}
        />
      </section>
    </article>
  );
};

export default Project;
