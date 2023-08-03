import Link from 'next/link';

import { Github, Linkedin, Codepen, Twitter } from '../Icons';
import styles from "./styles.module.css";

function SocialLinks({ classNameContainer = "" } : { classNameContainer?: string; }) {
  return (
    <div className={`${styles.container} ${classNameContainer}`}>
      <Link href="https://www.linkedin.com/in/henryzarza" className={styles.link} target="blank" rel="author" aria-label="LinkedIn">
        <Linkedin />
      </Link>
      <Link href="https://codepen.io/HenryZarza/" className={styles.link} target="blank" rel="author" aria-label="Codepen">
        <Codepen />
      </Link>
      <Link href="https://github.com/henryzarza" className={styles.link} target="blank" rel="author" aria-label="Github">
        <Github />
      </Link>
      <Link href="https://twitter.com/henry_zarza" className={styles.link} target="blank" rel="author" aria-label="Twitter">
        <Twitter />
      </Link>
    </div>
  );
}

export default SocialLinks;
