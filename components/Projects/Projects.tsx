import useSWR from 'swr';

import styles from './Projects.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = () => {
  const { data, error } = useSWR('/api/projects', fetcher);

  return (
    <section className={styles.projects} id='projects'>
      <h2 className={styles.header}>Projects</h2>
    </section>
  );
};

export default Projects;
