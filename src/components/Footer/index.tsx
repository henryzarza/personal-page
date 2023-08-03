import SocialLinks from '../SocialLinks';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`text-center ${styles.header}`}>
        <blockquote className="base-text white">
          “Nobody hopes that you know everything, only amuse yourself and never stop learning.”
        </blockquote>
        <blockquote className="base-text white">
          “The real growth comes when we leave our zone of comfort.”
        </blockquote>
      </div>
      <SocialLinks classNameContainer={styles.link} />
      <small className={`small-text white ${styles["small-text"]}`}>
        Made with
        <span className={styles.icon} role="img" aria-label="love">
          ❤️
        </span>
        by Henry Zarza, 2023
      </small>
    </footer>
  );
}
