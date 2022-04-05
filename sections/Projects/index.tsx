import i18next from "i18next";

import WhiteCard, { WhiteCardProps } from "../../components/WhiteCard";
import styles from "./styles.module.css";

function Projects({ projects } : { projects: Array<WhiteCardProps["data"]> }) {
  return (
    <section className={styles.container}>
      <h2 className={`small-title ${styles.title}`}>{i18next.t("MAIN:PROJECTS_TITLE")}</h2>
      <p className={`base-text ${styles.paragraph}`}>{i18next.t("MAIN:PROJECTS_DESCRIPTION")}</p>
      <ul className={styles.timeline}>
        <span className={styles.circle} />
        {projects?.map((el) => (
          <WhiteCard key={el.id} classContainer={styles.item} className={styles.card} data={el} />
        ))}
        <span className={styles.circle} />
      </ul>
    </section>
  );
}

export default Projects;
