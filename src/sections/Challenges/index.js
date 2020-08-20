import React, { useEffect, useState } from 'react';
import i18next from 'i18next';

import BlackCard from '../../components/BlackCard';
import { BACKEND_URL } from '../../constants';
import styles from './styles.module.css';

function Challenges() {
  const [challenges, setChallenges] = useState();

  useEffect(() => {
    fetch(`${BACKEND_URL}challenges`)
      .then((response) => response.json())
      .then((data) => setChallenges(data))
      .catch(setChallenges([]));
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={`small-title white ${styles.title}`}>{i18next.t('MAIN:CHALLENGES_TITLE')}</h2>
      <p className={`base-text white ${styles.paragraph}`}>
        {i18next.t('MAIN:CHALLENGES_DESCRIPTION')}
      </p>
      <div className={styles['link-container']}>
        {challenges && challenges.map((el) => <BlackCard key={el.id} data={el} />)}
      </div>
      <button type='button' className={`white big-text text-center ${styles.button}`}>
        {i18next.t('MAIN:WATCH_MORE')}
      </button>
    </section>
  );
}

export default Challenges;
