// import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      /> */}
      <Link href="/30-days-of-code">30 Days of Code</Link>
      <Link href="/advent-of-css">Advent of CSS</Link>
    </main>
  )
}
