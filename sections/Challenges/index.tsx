import { useState, useCallback } from "react";
import i18next from "i18next";

import BlackCard, { BlackCardProps } from "../../components/BlackCard";
import { REGISTER_PER_PAGE } from "../../constants";
import styles from "./styles.module.css";

function Challenges({ data } : { data: Array<BlackCardProps['data']> }) {
  const [endIndex, setEndIndex] = useState(data.length < REGISTER_PER_PAGE ? data.length : REGISTER_PER_PAGE);

  const handleClick = useCallback(() => {
    if (data) {
      const regPerPage = endIndex + REGISTER_PER_PAGE;
      setEndIndex(data.length < regPerPage ? data.length : regPerPage);
    }
  }, [data, endIndex]);

  return (
    <section className={styles.container}>
      <h2 className={`small-title white ${styles.title}`}>{i18next.t("MAIN:CHALLENGES_TITLE")}</h2>
      <p className={`base-text white ${styles.paragraph}`}>
        {i18next.t("MAIN:CHALLENGES_DESCRIPTION")}
      </p>
      <div className={styles["link-container"]}>
        {data.slice(0, endIndex).map((el) => (
          <BlackCard key={el.id} data={el} />
        ))}
      </div>
      {endIndex < data.length && (
        <button
          type="button"
          className={`white big-text text-center ${styles.button}`}
          onClick={handleClick}
        >
          {i18next.t("MAIN:SEE_MORE")}
        </button>
      )}
    </section>
  );
}

export default Challenges;
