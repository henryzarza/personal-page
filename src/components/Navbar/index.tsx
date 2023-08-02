'use client';
 
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { debounce } from '@/utils';
import Accordion from './accordion';
import styles from './styles.module.css';

const setClassnames = (href: string, currenPathName: string) => 
  `highlighted-text ${styles.link} ${href === currenPathName ? styles.active : ''}`;

export default function Navbar() {
  const pathName = usePathname();
  const refNav = useRef<HTMLDivElement>(null);

  useEffect(()  => {
    let scrollPos = 0;

    const checkPosition = () => {
      if (refNav.current) {
        refNav.current.style.translate = window.scrollY < scrollPos ? '0' : '0 -100%';
        scrollPos = window.scrollY;
      }
    }

    window.addEventListener('scroll', debounce(checkPosition));

    return () => {
      window.removeEventListener('scroll', debounce(checkPosition));
    };
  }, []);

  return (
    <nav ref={refNav} className={`${styles.nav} ${pathName !== '/' ? styles.visible : ''}`}>
      <div className={styles["nav-content"]}>
        <div className={styles["nav-links"]} aria-roledescription='List of internal links'>
          <Link className={setClassnames("/", pathName)} href="/">Home</Link>
          <Link className={setClassnames("/advent-of-css", pathName)} href="/advent-of-css">Advent of CSS</Link>
          <Link className={setClassnames("/30-days-of-code", pathName)} href="/30-days-of-code">30 Days of Code</Link>
          <Link className={setClassnames("/#cookbook", pathName)} href="/#cookbook">Cookbook</Link>
          <Link className={setClassnames("/#inspiration", pathName)} href="/#inspiration">Inspiration</Link>
        </div>
        <Accordion />
      </div>
    </nav>
  )
}
