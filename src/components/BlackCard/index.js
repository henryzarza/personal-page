import React from 'react';
import { string, shape, number } from 'prop-types';
import i18next from 'i18next';

import styles from './styles.module.css';

function BlackCard({ data }) {
  return (
    <a href={data.link} target='blank' rel='external' className={styles.container}>
      <img className={styles.img} src={data.image} alt={data.title} />
      <h6 className={`base-text white fw-bold ${styles.title}`}>
        {i18next.t('MAIN:DAY', { number: data.id })} {data.title}
      </h6>
      <p className='base-text white'>{data.description}</p>
    </a>
  );
}

BlackCard.propTypes = {
  data: shape({
    id: number,
    title: string,
    description: string,
    image: string,
    link: string
  }).isRequired
};

export default BlackCard;
