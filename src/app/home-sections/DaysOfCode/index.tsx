import Link from 'next/link';

import { DaysOfCodeCard } from '@/components';
import { CurvedArrow } from '@/components/Icons';
import { REGISTERS_PER_PAGE } from '@/constants';
import { CodeChallenge } from '@/types';
import styles from './styles.module.css';

export default function DaysOfCode({ data } : { data: CodeChallenge[] }) {
  return (
    <section className={styles.section}>
      <h2 className="heading-2 white">#30DaysOfCreativeCode</h2>
      <p className={`base-text white ${styles.paragraph}`}>
        In 2020, I decided to do this challenge to practice, improve, and learn new things
        about HTML, CSS, JavaScript, and Web APIs. I had to think &quot;out of the box&quot;
        and be creative, but I really enjoyed it.
      </p>
      <div className="cards-container">
        {data.slice(0, REGISTERS_PER_PAGE).map((code) => (
          <DaysOfCodeCard key={code.id} data={code} />
        ))}
      </div>
      <Link
        href="/30-days-of-code"
        className={`highlighted-text button ${styles["link-button"]}`}
      >
        See more <CurvedArrow />
      </Link>
    </section>
  );
}
