import Link from 'next/link';
import Image from 'next/image';

import { CodeChallenge } from '@/types';
import styles from './styles.module.css';

export default function DaysOfCodeCard({ data } : { data: CodeChallenge }) {
  return (
    <Link href={data.link} rel="external" className={styles.container}>
      <figure className={styles["img-container"]}>
        <Image
          src={data.image}
          alt={data.title}
          sizes="(min-width: 40rem) 30vw, 50vw"
          fill
        />
      </figure>
      <h6 className="highlighted-text">
        {data.id}. {data.title}
      </h6>
    </Link>
  );
}
