'use client';

import { DropDownArrow } from '@/components/Icons';
import styles from './styles.module.css';
import { THEMES } from '@/constants';

export default function Accordion() {
  const handleChangeTheme = (theme: typeof THEMES[number]) => {
    const rootRef: HTMLElement | null = document.querySelector(':root');
    if (rootRef) {
      rootRef.style.setProperty('--primary-color', theme.primary);
      rootRef.style.setProperty('--highlight-color', theme.highlight);
      rootRef.style.setProperty('--secondary-color', theme.secondary);
      rootRef.style.setProperty('--secondary-highlight-color', theme.secondaryHighlight);
      rootRef.style.setProperty('--tertiary-color', theme.tertiary);
      rootRef.style.setProperty('--gradient-start-color', theme.gradientStart);
      rootRef.style.setProperty('--gradient-end-color', theme.gradientEnd);
      rootRef.style.setProperty('--contrast-text-color', theme.contrastText || '');
      rootRef.style.setProperty('--contrast-background-color', theme.contrastBackground || '');
    }
  }

  return (
    <div className={styles["accordion-container"]}>
      <button className={`highlighted-text ${styles['accordion-button']}`}>
        Change Theme <DropDownArrow />
      </button>
      <ul className={styles.accordion}>
        {THEMES.map(theme => (
          <li key={theme.id} className={styles["accordion-item"]} onClick={() => handleChangeTheme(theme)}>
            <div className={styles["theme-container"]}>
              <span className={styles.color} style={{ backgroundColor:theme.tertiary }} />
              <span className={styles.color} style={{ backgroundColor:theme.highlight }} />
              <span className={styles.color} style={{ backgroundColor:theme.secondaryHighlight }} />
              <span className={styles.color} style={{ backgroundColor:theme.secondary }} />
              <span className={styles.color} style={{ backgroundColor:theme.primary }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
