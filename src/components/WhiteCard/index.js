import React from 'react';
import { string, shape, number } from 'prop-types';
import i18next from 'i18next';

import { useIsInView } from '../../utils';
import styles from './styles.module.css';

function WhiteCard({ className, data, classContainer }) {
  const [refContainer, isIntersecting] = useIsInView('-200px');

  return (
    <li
      ref={refContainer}
      className={`${classContainer} ${styles.container} ${isIntersecting ? styles.visible : null}`}
    >
      <div className={className} data-year={data.year}>
        <h6 className={`big-text fw-bold ${styles.title}`}>{data.title}</h6>
        <p className={`base-text ${styles.paragraph}`}>{data.description}</p>
        <img className={styles.img} src={data.image} alt={data.title} />
        <a
          href={data.link}
          target='blank'
          rel='external'
          className={`base-text fw-bold white text-center ${styles.link}`}
        >
          {i18next.t('MAIN:WATCH_PROJECT')}
        </a>
      </div>
    </li>
  );
}

WhiteCard.propTypes = {
  className: string.isRequired,
  classContainer: string.isRequired,
  data: shape({
    id: number,
    title: string,
    description: string,
    image: string,
    link: string,
    year: number
  }).isRequired
};

export default WhiteCard;
