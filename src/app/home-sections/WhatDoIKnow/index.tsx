import { WHAT_DO_I_KNOW_LIST } from '@/constants';
import { ICONS } from './bgIcons';
import styles from './styles.module.css';

export default function WhatDoIKnow() {
  return (
    <section className={styles.container}>
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
