import { CodeChallenge } from '@/types';
import { DaysOfCodeCard } from '@/components';
import styles from './styles.module.css';

async function getChallenges(): Promise<CodeChallenge[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/challenges`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function DaysOfCode() {
  const challenges = await getChallenges();

  return (
    <main className={styles.main}>
      <h2 className="heading-2 white">#30DaysOfCreativeCode</h2>
      <p className={`base-text white ${styles.paragraph}`}>
        In 2020, I decided to do this challenge to practice, improve, and learn new things
        about HTML, CSS, JavaScript, and Web APIs. I had to think &quot;out of the box&quot;
        and be creative, but I really enjoyed it.
      </p>
      <div className="cards-container">
        {challenges.map((challenge) => <DaysOfCodeCard key={challenge.id} data={challenge} />)}
      </div>
    </main>
  );
}
