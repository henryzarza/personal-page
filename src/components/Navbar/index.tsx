'use client'
 
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Navbar() {
  const pathName = usePathname();
  const [isStatic, setIsStatic] = useState(false);

  useEffect(()  => {
    setIsStatic(pathName !== '/');
  }, [pathName]);

  return (
    <nav className={`${styles.nav} ${isStatic ? styles.static : ''}`}>
      <div className={styles['nav-content']}>
        <div className={styles['nav-links']} aria-roledescription='List of internal links'>
          <Link className={`highlighted-text ${styles.link} ${styles.active}`} href="/advent-of-css">Advent of CSS</Link>
          <Link className={`highlighted-text ${styles.link}`} href="/30-days-of-code">30 Days of Code</Link>
          <Link className={`highlighted-text ${styles.link}`} href="/#cookbook">Cookbook</Link>
          <Link className={`highlighted-text ${styles.link}`} href="/#inspiration">Inspiration</Link>
        </div>
        <button className={`highlighted-text ${styles['accordion-button']}`}>
          Change Theme
        </button>
      </div>
    </nav>
  )
}
