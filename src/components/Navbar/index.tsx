'use client'
 
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { DropDownArrow } from '@/components/Icons';
import styles from './styles.module.css';

const setClassnames = (href: string, currenPathName: string) => 
  `highlighted-text ${styles.link} ${href === currenPathName ? styles.active : ''}`;

export default function Navbar() {
  const pathName = usePathname();
  const [isStatic, setIsStatic] = useState(false);

  useEffect(()  => {
    setIsStatic(pathName !== '/');
  }, [pathName]);

  return (
    <nav className={`${styles.nav} ${isStatic ? styles.static : ''}`}>
      <div className={styles["nav-content"]}>
        <div className={styles["nav-links"]} aria-roledescription='List of internal links'>
          <Link className={setClassnames("/", pathName)} href="/">Home</Link>
          <Link className={setClassnames("/advent-of-css", pathName)} href="/advent-of-css">Advent of CSS</Link>
          <Link className={setClassnames("/30-days-of-code", pathName)} href="/30-days-of-code">30 Days of Code</Link>
          <Link className={setClassnames("/#cookbook", pathName)} href="/#cookbook">Cookbook</Link>
          <Link className={setClassnames("/#inspiration", pathName)} href="/#inspiration">Inspiration</Link>
        </div>
        <button className={`highlighted-text ${styles['accordion-button']}`}>
          Change Theme <DropDownArrow />
        </button>
      </div>
    </nav>
  )
}
