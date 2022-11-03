import Link from 'next/link';
import useSWR from 'swr';
import Project from './Project';

import styles from './Projects.module.scss';

export type Project = {
  id: number;
  name: string;
  date: number;
  description: string;
  purpose: string;
  stack: string;
  live: string;
  code: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = () => {
  const { data, error } = useSWR('/api/projects', fetcher);

  if (error) return <div>Unable to load projects...</div>;
  if (!data) return <div>Loading...</div>;

  const projects: Project[] = JSON.parse(data);

  return (
    <section className={styles.projects} id='projects'>
      <h2 className={styles.header}>Projects</h2>
      <section className={styles.container}>
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </section>
      <Link
        href='https://github.com/cateruu'
        target='_blank'
        rel='noopener'
        className={styles.link}
      >
        Check rest of my projects
      </Link>
      <div className={styles.blur}></div>
    </section>
  );
};

export default Projects;
