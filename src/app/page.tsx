import { ProjectInfo, AdventCSSChallenge } from '@/types';
import {
  Main,
  AboutMe,
  WhatDoIKnow,
  Projects,
  AdventOfCSS,
} from './home-sections';
import styles from './page.module.css';

async function getProjects(): Promise<ProjectInfo[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

async function getAdvents(): Promise<AdventCSSChallenge[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/advents`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

export default async function Home() {
  const projectsData = getProjects();
  const adventsData = getAdvents();

  const [projects, advents] = await Promise.all([projectsData, adventsData]);

  return (
    <main className={styles.main}>
      <Main />
      <AboutMe />
      <WhatDoIKnow />
      {projects && <Projects projects={projects} />}
      {advents && <AdventOfCSS data={advents} />}
    </main>
  )
}
