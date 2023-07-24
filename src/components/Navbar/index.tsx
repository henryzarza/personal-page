import Link from 'next/link';
import styles from './styles.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-content']}>
        <div className={styles['nav-links']} aria-roledescription='List of internal links'>
          <Link className={`highlighted-text ${styles.link} ${styles.active}`} href="#what-do-i-know">What do I know?</Link>
          <Link className={`highlighted-text ${styles.link}`} href="#projects">Projects</Link>
          <Link className={`highlighted-text ${styles.link}`} href="/advent-of-css">Advent of CSS</Link>
          <Link className={`highlighted-text ${styles.link}`} href="/30-days-of-code">30DaysofCode</Link>
          <Link className={`highlighted-text ${styles.link}`} href="#cookbook">Cookbook</Link>
          <Link className={`highlighted-text ${styles.link}`} href="#inspiration">Inspiration</Link>
        </div>
        <button className={`highlighted-text ${styles['accordion-button']}`}>
          Change Theme
        </button>
      </div>
    </nav>
  )
}
