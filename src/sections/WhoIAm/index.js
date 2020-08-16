import React from 'react';
import i18next from 'i18next';

import SocialLinks from '../../components/SocialLinks';
import henry from '../../assets/henry.png';
import styles from './styles.module.css';

function WhoIAm() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={`small-title ${styles.title}`}>{i18next.t('MAIN:WHO_I_AM')}</h2>
        <div className={styles['inner-content']}>
          <img className={styles.img} src={henry} alt={i18next.t('MAIN:NAME')} />
          <p className='base-text'>{i18next.t('MAIN:WHO_I_AM_TEXT')}</p>
        </div>
      </div>
      <h4 className={`big-text text-center ${styles.subtitle}`}>{i18next.t('MAIN:KEEP_TOUCH')}</h4>
      <SocialLinks />
    </section>
  );
}

export default WhoIAm;
