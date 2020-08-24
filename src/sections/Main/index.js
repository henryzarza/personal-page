import React, { useRef, useEffect } from 'react';
import i18next from 'i18next';

import { buildThresholdList } from '../../constants';
import styles from './styles.module.css';

function Main() {
  const refContainer = useRef();
  const refInteraction = useRef();

  useEffect(() => {
    const { current } = refInteraction;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio.toFixed(2);
        refContainer.current.style.setProperty('--intersection', ratio);
      },
      { threshold: buildThresholdList(100) }
    );
    if (current) observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <section ref={refContainer} className={styles.container}>
      <header className={`text-center ${styles.header}`}>
        <h1 className={`title ${styles.title}`}>{i18next.t('MAIN:NAME')}</h1>
        <h3 className='small-title fw-normal'>{i18next.t('MAIN:PROFESSION')}</h3>
      </header>
      <div className={`${styles.parallax} ${styles.tree}`} />
      <div className={`${styles.parallax} ${styles.mountain}`} />
      <div ref={refInteraction} className={styles.interaction} />
    </section>
  );
}

export default Main;
