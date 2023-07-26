'use client';

import { useState } from 'react';
import { ProjectInfo } from '@/types';
import { PROJECTS_TO_SHOW } from '@/constants';
import { ExpandDown } from '@/components/Icons';
import WhiteCard from './WhiteCard';
import styles from "./styles.module.css";

export default function Projects({ projects } : { projects: ProjectInfo[] }) {
  const [endIndex, setEndIndex] = useState(PROJECTS_TO_SHOW);

  return (
    <section className={styles.container}>
      <h2 className="heading-2">
        Projects
      </h2>
      <p className={`base-text ${styles.paragraph}`}>
        These are not all the projects in where I&apos;ve participated and done (for confidentiality and
        privacy of information I can&apos;t show them all). Many of the following projects are personal
        and small because my goal and purpose is <strong>learning</strong> and <strong>testing</strong> libraries,
        frameworks, tools, and other things.
      </p>
      <ul className={styles.timeline}>
        <span className={styles.circle} />
        {projects.slice(0, endIndex).map((project) => (
          <WhiteCard
            key={project.id}
            classContainer={styles.item}
            className={styles.card}
            data={project}
          />
        ))}
        <span className={styles.circle} />
      </ul>
      {endIndex < projects.length && (
        <footer className={styles.footer}>
          <button
            type="button"
            className={`highlighted-text white ${styles.button}`}
            onClick={() => setEndIndex(projects.length)}
          >
            Load all <ExpandDown className={styles.icon} />
          </button>
        </footer>
      )}
    </section>
  );
}
