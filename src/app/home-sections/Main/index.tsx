'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

import { buildThresholdList } from '@/constants';
import medellin from 'public/medellin.png';
import mountains from 'public/mountains.png';
import styles from './styles.module.css';

export default function Main() {
  const refTitle = useRef<HTMLHeadElement>(null);
  const refInteraction = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = refInteraction;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (refTitle.current) {
          const ratio = entry.intersectionRatio;
          refTitle.current.style.transform = `translate3d(0, ${(ratio * 150).toFixed(2)}%, 0)`;
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
    <section className={styles.container}>
      <header ref={refTitle} className={`text-center ${styles.header}`}>
        <h1 className="heading-1">
          Hey there, I&apos;m Henry
        </h1>
        <h3 className="heading-3">
          A software developer <br />
          from Colombia <span aria-label="Colombian flag">🇨🇴</span>
        </h3>
      </header>
      {/* Background image */}
      <Image
        alt="Medellín mountains"
        src={medellin}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className={styles['cover-bg']}
        priority
        fill
      />
      {/* Half mountain image for interactivity */}
      <Image
        alt="Medellín mountains for interactivity"
        src={mountains}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className={styles.mountain}
        priority
        fill
      />
      <div ref={refInteraction} className={styles.interaction} />
    </section>
  );
}
