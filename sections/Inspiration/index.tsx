import i18next from "i18next";
import Link from "next/link";

import { INSPIRATION_CARDS } from "../../constants";
import styles from "./styles.module.css";

function Inspiration() {
  return (
    <section className={styles.container}>
      <h2 className={`small-title ${styles.title}`}>{i18next.t("MAIN:INSPIRATION_TITLE")}</h2>
      <p className={`base-text ${styles.paragraph}`}>{i18next.t("MAIN:INSPIRATION_DESCRIPTION")}</p>
      <div className={styles["card-container"]}>
        {INSPIRATION_CARDS.map((el) => (
          <div key={el.title} className={styles.card}>
            <h6 className={`base-text fw-medium ${styles["card-title"]}`}>
              {i18next.t(`MAIN:${el.title}`)}
            </h6>
            <ul className={styles["card-content"]}>
              {el.links.map((link) => (
                <li key={link.link}>
                  <Link href={link.link} passHref>
                    <a
                      target="blank"
                      rel="external"
                      className={`base-text ${styles.link}`}
                    >
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={`base-text ${styles.paragraph}`}>{i18next.t("MAIN:INSPIRATION_FOOTER")}</p>
    </section>
  );
}

export default Inspiration;
