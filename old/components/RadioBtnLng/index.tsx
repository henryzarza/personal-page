import React from "react";

import { LANGUAGES } from "../../constants";
import styles from "./styles.module.css";

const RadioBtnLng = ({ currentLng, onChange }: { currentLng: string; onChange: (e: React.FormEvent<HTMLInputElement>) => void; }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.radio}
        type="radio"
        name="changeLng"
        id={LANGUAGES.EN}
        value={LANGUAGES.EN}
        onChange={onChange}
      />
      <label
        className={currentLng === LANGUAGES.EN ? styles.active : undefined}
        htmlFor={LANGUAGES.EN}
        aria-label="English"
      />
      <input
        className={styles.radio}
        type="radio"
        name="changeLng"
        id={LANGUAGES.IT}
        value={LANGUAGES.IT}
        onChange={onChange}
      />
      <label
        className={currentLng === LANGUAGES.IT ? styles.active : undefined}
        htmlFor={LANGUAGES.IT}
        aria-label="Italiano"
      />
    </div>
  );
}

export default RadioBtnLng;
