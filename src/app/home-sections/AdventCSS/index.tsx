import Link from 'next/link';
import Image from 'next/image';
import { REGISTERS_PER_PAGE } from '@/constants';
import { AdventCSSChallenge } from '@/types';
import { AdventCard } from '@/components';
import { CurvedArrow } from '@/components/Icons';
import snow from 'public/snow.svg';
import styles from './styles.module.css';

export default function AdventCSS({ data } : { data: AdventCSSChallenge[] }) {
  return (
    <section className={styles.section}>
      <h2 className="heading-2">Advent of CSS</h2>
      <p className={`base-text ${styles.paragraph}`}>
        It was a challenge powered by <Link className="link-text" href="https://www.compressed.fm/" target="_blank" rel="nofollow external">Compressed.fm</Link>
        {' '} in December of 2022. For 24 days I received an email with 24 CSS challenge,{' '}
        <Link className="link-text" href="https://github.com/henryzarza/advent-css" target="_blank" rel="author">this repository</Link> is my solution for the challenges.
      </p>
      <div className={`cards-container ${styles.container}`}>
        {data.slice(0, REGISTERS_PER_PAGE).map((advent) => (
          <AdventCard key={advent.id} data={advent} />
        ))}
      </div>
      <Link
        href="/advent-of-css"
        className={`highlighted-text button ${styles["link-button"]}`}
      >
        See more <CurvedArrow />
      </Link>
      <Image
        alt="Snow"
        src={snow}
        quality={100}
        sizes="100vw"
        className={styles.snow}
        fill
      />
    </section>
  );
}
