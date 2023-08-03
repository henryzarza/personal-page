'use client'
 
import { useEffect } from 'react';
import styles from './page.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className={`${styles.main} ${styles.error}`}>
      <h2 className="heading-2">Something went wrong!</h2>
      <button
        className={`highlighted-text white ${styles["btn-error"]}`}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  )
}
