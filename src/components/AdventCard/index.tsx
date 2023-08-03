import Link from 'next/link';
import Image from 'next/image';

import { AdventCSSChallenge } from '@/types';
import styles from './styles.module.css';

export default function AdventCard({ data } : { data: AdventCSSChallenge }) {
  return (
    <Link className={styles.container} href={data.link} target="blank" rel="external">
      <figure className={styles["img-container"]}>
        <Image
          src={data.image}
          alt={data.title}
          sizes="(min-width: 40rem) 30vw, 50vw"
          fill
        />
      </figure>
      <h6 className="base-text white fw-bold">
        Day {data.id} - {data.title}
      </h6>
      <p className="base-text white">{data.description}</p>
    </Link>
  );
}
