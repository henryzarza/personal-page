import Link from 'next/link';
import Image from 'next/image';

import { INSPIRATION_CARDS } from '@/constants';
import styles from './styles.module.css';

export default function Inspiration() {
  return (
    <section className={styles.container} id="inspiration">
      <h2 className="heading-2">
        Inspiration
      </h2>
      <p className={`base-text ${styles.paragraph}`}>
        Sometimes is difficult to find the inspiration or good tools, photos, etc, for using,
        when we wanna do something, so I wanna share with you some links that for me are very useful.
      </p>
      <div className={styles["card-container"]}>
        {INSPIRATION_CARDS.map((el) => (
          <div key={el.title} className={styles.card}>
            <div className={styles["card-header"]}>
              <div className={styles["card-image"]}>
                <Image 
                  src={el.image}
                  alt={el.title}
                  width={36}
                  height={36}
                />
              </div>
              <h6 className="heading-4 white">{el.title}</h6>
            </div>
            <ul className={styles["card-content"]}>
              {el.links.map((link) => (
                <li key={link.link}>
                  <Link className={`link-text ${styles.link}`} href={link.link} target="blank" rel="external">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="base-text">
        If you know more links, please don&apos;t hesitate to share it, I&apos;ll be really grateful.
      </p>
    </section>
  );
}
