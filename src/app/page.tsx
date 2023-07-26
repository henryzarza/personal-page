import { ProjectInfo } from '@/types';
import {
  Main,
  AboutMe,
  WhatDoIKnow,
  Projects,
} from './home-sections';
import styles from './page.module.css';

async function getProjects() {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

export default async function Home() {
  const projects: ProjectInfo[] = await getProjects();

  return (
    <main className={styles.main}>
      <Main />
      <AboutMe />
      <WhatDoIKnow />
      {projects && <Projects projects={projects} />}
    </main>
  )
}
