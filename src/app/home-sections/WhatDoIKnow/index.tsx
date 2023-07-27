'use client';

import { useRef, useEffect } from 'react';

import { WHAT_DO_I_KNOW_LIST, buildThresholdList } from '@/constants';
import { ICONS } from './bgIcons';
import styles from './styles.module.css';

export default function WhatDoIKnow() {
  const refInteraction = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = refInteraction;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (current) {
          const ratio = entry.intersectionRatio;
          current.style.setProperty('--icons-movement-X', `${(ratio * 150).toFixed(2)}%`);
          current.style.setProperty('--icons-movement-Y', `${(ratio * 200).toFixed(2)}%`);
        }
      },
      { threshold: buildThresholdList(100) }
    );

    if (current) {
      observer.observe(current);

      return () => {
        observer.unobserve(current);
      };
    }
  }, []);

  return (
    <section className={styles.container} ref={refInteraction}>
      <div className={styles.content}>
        <h2 className="heading-2 white text-center">
          What do I know?
        </h2>
        <ul className={styles.list}>
          {WHAT_DO_I_KNOW_LIST.map((el) => (
            <li
              key={el}
              className="base-text white"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          ))}
        </ul>
      </div>
      {ICONS.map(({ id, Cmp, cssProperties }) => (
        <Cmp key={id} className={styles.icon} style={cssProperties} />
      ))}
    </section>
  );
}
