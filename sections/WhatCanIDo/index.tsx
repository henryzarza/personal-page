import { useEffect, useRef } from 'react';
import i18next from 'i18next';

import { WHAT_CAN_I_DO_TEXTS } from '../../constants';
import { ICONS_MOVEMENT } from './figures';
import styles from './styles.module.css';

function WhatCanIDo() {
  const refContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    const { current } = refContainer;
    if (current) {
      const icons = current.querySelectorAll<SVGElement>(`.${styles.icon}`);

      const parallax = (e: MouseEvent) => {
        if (e.y < current.clientHeight / 2) {
          current.style.setProperty('--icon-movement-color', '#82F4B1');
        } else {
          current.style.setProperty('--icon-movement-color', '#FFF');
        }
        icons.forEach((el) => {
          const speed = Number(el.getAttribute('data-speed'));
          const x = (current.clientWidth - e.x * speed) / 150;
          const y = (current.clientHeight - e.y * speed) / 150;
          el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
        });
      };

      current.addEventListener('mousemove', parallax);

      return () => {
        current.removeEventListener('mousemove', parallax);
      };
    }
  }, []);

  return (
    <section ref={refContainer} className={styles.container}>
      <div className={styles.content}>
        <h2 className={`small-title white text-center ${styles.title}`}>
          {i18next.t('MAIN:WHAT_CAN_I_DO_TITLE')}
        </h2>
        <ul className={styles.list}>
          {WHAT_CAN_I_DO_TEXTS.map((el) => (
            <li
              key={el}
              className='base-text white'
              dangerouslySetInnerHTML={{ __html: i18next.t(`MAIN:${el}`) }}
            />
          ))}
        </ul>
      </div>
      {ICONS_MOVEMENT.map(({ id, Cmp, cssProperties, speed }) => (
        <Cmp key={id} className={styles.icon} style={cssProperties} data-speed={speed} />
      ))}
    </section>
  );
}

export default WhatCanIDo;
