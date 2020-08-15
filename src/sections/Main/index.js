import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.css';

function Main() {
  return (
    <section className={styles.container}>
      <header className={`text-center ${styles.header}`}>
        <h1 className={`title ${styles.title}`}>{i18next.t('MAIN:NAME')}</h1>
        <h3 className='small-title'>{i18next.t('MAIN:PROFESSION')}</h3>
      </header>
    </section>
  );
}

export default Main;
