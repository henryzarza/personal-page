import { useState, useCallback } from "react";
import i18next from "i18next";

import WhiteCardChips, { WhiteCardChipsProps } from "../../components/WhiteCardChips";
import { REGISTER_PER_PAGE } from "../../constants";
import styles from "../Challenges/styles.module.css";
import mainStyles from "./styles.module.css";

function Random({ data } : { data: Array<WhiteCardChipsProps['data']> }) {
  const [endIndex, setEndIndex] = useState(data.length < REGISTER_PER_PAGE ? data.length : REGISTER_PER_PAGE);

  const handleClick = useCallback(() => {
    if (data) {
      const regPerPage = endIndex + REGISTER_PER_PAGE;
      setEndIndex(data.length < regPerPage ? data.length : regPerPage);
    }
  }, [data, endIndex]);

  return (
    <section className={`${styles.container} ${mainStyles.container}`}>
      <h2 className={`small-title white ${styles.title}`}>{i18next.t("MAIN:RANDOM_TITLE")}</h2>
      <p className={`base-text white ${styles.paragraph}`}>
        {i18next.t("MAIN:RANDOM_DESCRIPTION")}
      </p>
      <div className={styles["link-container"]}>
        {data.map(el => <WhiteCardChips key={el.id} data={el} /> )}
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

export default Random;
