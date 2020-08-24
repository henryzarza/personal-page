import React from 'react';
import { string, func } from 'prop-types';

import { LANGUAGES } from '../../constants';
import styles from './styles.module.css';

function RadioBtnLng({ currentLng, onChange }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.radio}
        type='radio'
        name='changeLng'
        id={LANGUAGES.EN}
        value={LANGUAGES.EN}
        onChange={onChange}
      />
      <label
        className={currentLng === LANGUAGES.EN ? styles.active : null}
        htmlFor={LANGUAGES.EN}
        aria-label='English'
      />
      <input
        className={styles.radio}
        type='radio'
        name='changeLng'
        id={LANGUAGES.IT}
        value={LANGUAGES.IT}
        onChange={onChange}
      />
      <label
        className={currentLng === LANGUAGES.IT ? styles.active : null}
        htmlFor={LANGUAGES.IT}
        aria-label='Italiano'
      />
    </div>
  );
}

RadioBtnLng.propTypes = {
  currentLng: string.isRequired,
  onChange: func.isRequired
};

export default RadioBtnLng;
