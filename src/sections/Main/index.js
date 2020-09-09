import React, { useRef, useEffect } from 'react';
import i18next from 'i18next';

import { buildThresholdList } from '../../constants';
import styles from './styles.module.css';

function Main() {
  const refTitle = useRef();
  const refInteraction = useRef();

  useEffect(() => {
    const { current } = refInteraction;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio.toFixed(2);
        refTitle.current.style.transform = `translate3d(0, ${ratio * 150}%, 0)`;
      },
      { threshold: buildThresholdList(100) }
    );
    if (current) observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <section className={styles.container}>
      <header ref={refTitle} className={`text-center ${styles.header}`}>
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
