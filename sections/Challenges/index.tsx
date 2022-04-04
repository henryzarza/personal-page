import { useEffect, useState, useCallback } from "react";
import i18next from "i18next";

import BlackCard, { BlackCardProps } from "../../components/BlackCard";
import { BACKEND_URL, REGISTER_PER_PAGE } from "../../constants";
import styles from "./styles.module.css";

function Challenges() {
  const [challenges, setChallenges] = useState<Array<BlackCardProps['data']>>();
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    fetch(`${BACKEND_URL}challenges`)
      .then((response) => response.json())
      .then((data) => {
        setChallenges(data);
        setEndIndex(data.length < REGISTER_PER_PAGE ? data.length : REGISTER_PER_PAGE);
      });
  }, []);

  const handleClick = useCallback(() => {
    if (challenges) {
      const regPerPage = endIndex + REGISTER_PER_PAGE;
      setEndIndex(challenges.length < regPerPage ? challenges.length : regPerPage);
    }
  }, [challenges, endIndex]);

  return (
    <section className={styles.container}>
      <h2 className={`small-title white ${styles.title}`}>{i18next.t("MAIN:CHALLENGES_TITLE")}</h2>
      <p className={`base-text white ${styles.paragraph}`}>
        {i18next.t("MAIN:CHALLENGES_DESCRIPTION")}
      </p>
      {!!challenges && (
        <>
          <div className={styles["link-container"]}>
            {challenges.slice(0, endIndex).map((el) => (
              <BlackCard key={el.id} data={el} />
            ))}
          </div>
          {endIndex < challenges.length && (
            <button
              type="button"
              className={`white big-text text-center ${styles.button}`}
              onClick={handleClick}
            >
              {i18next.t("MAIN:WATCH_MORE")}
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default Challenges;
