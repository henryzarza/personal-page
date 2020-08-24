import React from 'react';
import i18next from 'i18next';

import SocialLinks from '../../components/SocialLinks';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <header className={`text-center ${styles.header}`}>
        <h5 className='base-text white fw-medium'>{i18next.t('MAIN:FOOTER_TITLE_1')}</h5>
        <h5 className='base-text white fw-medium'>{i18next.t('MAIN:FOOTER_TITLE_2')}</h5>
      </header>
      <SocialLinks classNameContainer={styles.link} />
      <small className={`small-text white ${styles['small-text']}`}>
        {i18next.t('MAIN:MADE_TEXT')}
        <span className={styles.icon} role='img' aria-label='love'>
          ❤️
        </span>
        {i18next.t('MAIN:MADE_BY')}
      </small>
    </footer>
  );
}

export default Footer;
