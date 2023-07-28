import {
  ProjectInfo,
  AdventCSSChallenge,
  CodeChallenge
} from '@/types';
import {
  Main,
  AboutMe,
  WhatDoIKnow,
  Projects,
  AdventOfCSS,
  DaysOfCode,
} from './home-sections';
import styles from './page.module.css';

async function getProjects(): Promise<ProjectInfo[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

async function getAdvents(): Promise<AdventCSSChallenge[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/advents`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

async function getChallenges(): Promise<CodeChallenge[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/challenges`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Home() {
  const projectsData = getProjects();
  const adventsData = getAdvents();
  const challengesData = getChallenges();

  const [projects, advents, challenges] = await Promise.all([projectsData, adventsData, challengesData]);

  return (
    <main className={styles.main}>
      <Main />
      <AboutMe />
      <WhatDoIKnow />
      {projects && <Projects projects={projects} />}
      {advents && <AdventOfCSS data={advents} />}
      {challenges && <DaysOfCode data={challenges} />}
    </main>
  )
}
