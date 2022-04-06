import Image from "next/image";
import Link from "next/link";
import i18next from 'i18next';

import styles from './styles.module.css';

export interface WhiteCardProps {
  className: string;
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    year: number;
  };
  classContainer: string;
}

function WhiteCard({ className, data, classContainer } : WhiteCardProps) {
  return (
    <li className={classContainer}>
      <div className={className} data-year={data.year}>
        <h6 className={`big-text fw-bold ${styles.title}`}>{data.title}</h6>
        <p className={`base-text ${styles.paragraph}`}>{data.description}</p>
        <Image className={styles.img} src={data.image} alt={data.title} width={360} height={190} />
        <Link href={data.link} passHref>
          <a
            target="blank"
            rel="external"
            className={`base-text fw-bold white text-center ${styles.link}`}
          >
            {i18next.t("MAIN:SEE_PROJECT")}
          </a>
        </Link>
      </div>
    </li>
  );
}

export default WhiteCard;
