import styles from './About.module.scss';

const About = () => {
  return (
    <article className={styles.about} id='about'>
      <h2 className={styles.header}>About</h2>
      <p className={styles.text}>
        Born in August 8, 2000.
        <br /> I started learning web dev in 2019, grasped some basics and left
        it for 3 years to explore other areas of programming such as game dev. I
        returned to web dev in 2022 and have been learning it ever since.
      </p>
    </article>
  );
};

export default About;
