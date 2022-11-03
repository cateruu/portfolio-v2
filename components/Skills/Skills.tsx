import Image from 'next/image';
import useSWR from 'swr';

import styles from './Skills.module.scss';

export type Skill = {
  id: number;
  name: string;
  image: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Skills = () => {
  const { data, error } = useSWR('/api/skills', fetcher);

  if (error) return <div>Unable to load projects...</div>;
  if (!data) return <div>Loading...</div>;

  const skills: Skill[] = JSON.parse(data);

  return (
    <section id='skills' className={styles.skills}>
      <h2 className={styles.header}>Skills</h2>
      <section className={styles.container}>
        {skills.map((skill) => (
          <Image
            key={skill.id}
            src={skill.image}
            alt={skill.name}
            width={70}
            height={70}
          />
        ))}
      </section>
    </section>
  );
};

export default Skills;
