import React from 'react';
import { string } from 'prop-types';

import { ReactComponent as Github } from '../../assets/github-logo.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as CodePen } from '../../assets/codepen.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import styles from './styles.module.css';

function SocialLinks({ classNameContainer }) {
  return (
    <div className={`${styles.container} ${classNameContainer}`}>
      <a className={styles.link} href='https://github.com/henryzarza' target='blank' rel='author'>
        <Github aria-label='Github' />
      </a>
      <a
        className={styles.link}
        href='https://www.linkedin.com/in/henryzarza'
        target='blank'
        rel='author'
      >
        <LinkedIn aria-label='LinkedIn' />
      </a>
      <a className={styles.link} href='https://codepen.io/HenryZarza/' target='blank' rel='author'>
        <CodePen aria-label='CodePen' />
      </a>
      <a className={styles.link} href='https://twitter.com/henry_zarza' target='blank' rel='author'>
        <Twitter aria-label='Twitter' />
      </a>
    </div>
  );
}

SocialLinks.propTypes = {
  classNameContainer: string
};

export default SocialLinks;
