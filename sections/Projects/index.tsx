import { useEffect, useState } from "react";
import i18next from "i18next";

import WhiteCard, { WhiteCardProps } from "../../components/WhiteCard";
import { BACKEND_URL } from "../../constants";
import styles from "./styles.module.css";

function Projects() {
  const [projects, setProjects] = useState<Array<WhiteCardProps["data"]>>();

  useEffect(() => {
    fetch(`${BACKEND_URL}projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

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
