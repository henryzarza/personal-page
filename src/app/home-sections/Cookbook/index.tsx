'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { ExpandDown } from '@/components/Icons';
import { CookbookField } from '@/types';
import { COOKBOOKS_TO_SHOW } from '@/constants';
import { ICONS_MOVEMENT } from './bgIcons';
import styles from './styles.module.css';

export default function Cookbook({ data } : { data: CookbookField[] }) {
  const refInteraction = useRef<HTMLElement>(null);
  const [endIndex, setEndIndex] = useState(COOKBOOKS_TO_SHOW);

  useEffect(() => {
    const { current } = refInteraction;
    if (current) {
      const parallax = (e: MouseEvent) => {
        current.querySelectorAll<SVGElement>(`.${styles.icon}`).forEach((el) => {
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
    <section className={styles.container} ref={refInteraction}>
      <h2 className="heading-2 white text-center">
        Cookbook
      </h2>
      <p className={`base-text white ${styles.paragraph}`}>
        I wanna share with you random things like  articles, talks, resources, codbits, experiences,
        thoughts, etc. I can&apos;t think about a name for this section so I just named it &quot;Cookbook&quot; <span aria-label='Nerdy emoji'>🤓</span>
      </p>
      <ul className={styles.list}>
        {data.slice(0, endIndex).map((cookbook) => (
          <Link
            key={cookbook.id}
            href={cookbook.link}
            rel="nofollow external"
            className={styles.item}
            target="_blank"
            aria-roledescription="Link item"
          >
            <h6 className="heading-4">{cookbook.title}</h6>
            <p className="base-text">{cookbook.description}</p>
            <div className={styles["chips-container"]}>
              {cookbook.chips.map(chip =>
                <span
                  key={`${cookbook.id}-${chip.name}`}
                  className={`small-text ${styles.chip}`}
                >
                  {chip.name}
                </span>
              )}
            </div>
          </Link>
        ))}
      </ul>
      {endIndex < data.length && (
        <button
          type="button"
          className={`highlighted-text ${styles.button}`}
          onClick={() => setEndIndex((prev) => prev + COOKBOOKS_TO_SHOW > data.length ? data.length : prev + COOKBOOKS_TO_SHOW)}
        >
          See more <ExpandDown className={styles["btn-icon"]} />
        </button>
      )}
      {ICONS_MOVEMENT.map(({ id, Cmp, cssProperties, speed }) => (
        <Cmp key={id} className={styles.icon} style={cssProperties} data-speed={speed} />
      ))}
    </section>
  );
}
