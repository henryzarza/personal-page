import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.css';

export interface WhiteCardChipsProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    chips: {
      name: string;
      color: string;
    }[];
  };
}

function WhiteCardChips({ data } : WhiteCardChipsProps) {
  return (
    <Link href={data.link} passHref>
      <a target="blank" rel="external" className={styles.card}>
        <Image src={data.image} alt={data.title} width={380} height={180} objectFit="cover" objectPosition="top" />
        <div className={styles.content}>
          <h6 className={`base-text fw-bold ${styles.title}`}>{data.title}</h6>
          <p className={`base-text ${styles.paragraph}`}>{data.description}</p>
          <div className={styles["chips-container"]}>
            {data.chips.map(({ name, color }) =>
              <span key={`${data.id}-${name}`} className={`small-text fw-medium ${styles.chip}`} style={{ backgroundColor: color }}>
                {name}
              </span>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default WhiteCardChips;
