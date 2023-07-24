import Link from "next/link";

import { Github, Linkedin, Codepen, Twitter } from "../Icons";
import styles from "./styles.module.css";

function SocialLinks({ classNameContainer = "" } : { classNameContainer?: string; }) {
  return (
    <div className={`${styles.container} ${classNameContainer}`}>
      <Link href="https://github.com/henryzarza">
        <a className={styles.link} target="blank" rel="author" aria-label="Github">
          <Github />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/henryzarza">
        <a className={styles.link} target="blank" rel="author" aria-label="LinkedIn">
          <Linkedin />
        </a>
      </Link>
      <Link href="https://codepen.io/HenryZarza/">
        <a className={styles.link} target="blank" rel="author"  aria-label="Codepen">
          <Codepen />
        </a>
      </Link>
      <Link href="https://twitter.com/henry_zarza">
        <a className={styles.link} target="blank" rel="author" aria-label="Twitter">
          <Twitter />
        </a>
      </Link>
    </div>
  );
}

export default SocialLinks;
