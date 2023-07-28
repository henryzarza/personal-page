import Link from 'next/link';
import Image from 'next/image';
import { AdventCSSChallenge } from '@/types';
import { AdventCard } from '@/components';
import snow from 'public/snow.svg';
import styles from './styles.module.css';

async function getAdvents(): Promise<AdventCSSChallenge[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/advents`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function AdventOfCSS() {
  const advents = await getAdvents();

  return (
    <main className={styles.main}>
      <h2 className="heading-2">Advent of CSS</h2>
      <p className={`base-text ${styles.paragraph}`}>
        It was a challenge powered by <Link className="link-text" href="https://www.compressed.fm/" target="_blank" rel="nofollow external">Compressed.fm</Link>
        {' '} in December of 2022. For 24 days I received an email with 24 CSS challenge,{' '}
        <Link className="link-text" href="https://github.com/henryzarza/advent-css" target="_blank" rel="author">this repository</Link> is my solution for the challenges.
        I was experiencing burnout and working through these exercises really helped me regain my passion and love for creative code.
      </p>
      <div className={`cards-container ${styles.container}`}>
        {advents.map((advent) => <AdventCard key={advent.id} data={advent} />)}
      </div>
      <Image
        alt="Snow"
        src={snow}
        quality={100}
        sizes="100vw"
        className={styles.snow}
        fill
      />
    </main>
  );
}
