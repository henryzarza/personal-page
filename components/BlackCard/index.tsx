import Link from "next/link";
import Image from "next/image";
import i18next from "i18next";

import styles from "./styles.module.css";

export interface BlackCardProps {
  data: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
}

function BlackCard({ data } : BlackCardProps) {
  return (
    <Link href={data.link} passHref>
      <a target="blank" rel="external" className={styles.container}>
        <div className={styles["img-container"]}>
          <Image src={data.image} alt={data.title} width={335} height={200} />
        </div>
        <h6 className="base-text white fw-bold">
          {i18next.t("MAIN:DAY", { number: data.id })} {data.title}
        </h6>
      </a>
    </Link>
  );
}

export default BlackCard;