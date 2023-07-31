import {
  ProjectInfo,
  AdventCSSChallenge,
  CodeChallenge,
  CookbookField,
} from '@/types';
import {
  Main,
  AboutMe,
  WhatDoIKnow,
  Projects,
  AdventOfCSS,
  DaysOfCode,
  Cookbook,
  Inspiration
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

async function getCookbooks(): Promise<CookbookField[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/cookbook`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Home() {
  const projectsData = getProjects();
  const adventsData = getAdvents();
  const challengesData = getChallenges();
  const cookbooksData = getCookbooks();

  const [
    projects,
    advents,
    challenges,
    cookbooks
  ] = await Promise.all([projectsData, adventsData, challengesData, cookbooksData]);

  return (
    <main className={styles.main}>
      <Main />
      <AboutMe />
      <WhatDoIKnow />
      {projects && <Projects projects={projects} />}
      {advents && <AdventOfCSS data={advents} />}
      {challenges && <DaysOfCode data={challenges} />}
      {cookbooks && <Cookbook data={cookbooks} />}
      <Inspiration />
    </main>
  )
}
