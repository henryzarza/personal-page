import Image from 'next/image';
import Link from 'next/link';

import SocialLinks from '@/components/SocialLinks';
import henryProfileImg from 'public/henry.jpg';
import styles from './styles.module.css';

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={`heading-2 ${styles.title}`}>
          About me
        </h2>
        <div className={styles["inner-content"]}>
          <figure className={styles["img-container"]}>
            <Image
              className={styles.img} 
              src={henryProfileImg}
              alt="Henry Zarza profile image"
              placeholder="blur"
              priority
              fill
            />
          </figure>
          <div className={styles["text-content"]}>
            <p className="base-text">
              Hi, nice to e-meet you <span aria-label='Hand to say hello'>👋</span> <br />
              I&apos;m Henry Zarza a system engineer from Medellín, Colombia. I defined myself
              as dedicated and passionate about what I like, self-taught, adventurous, nerdy,
              and creative. I love to push my limits every day and face new challenges.
            </p>
            <hr className={styles.separator} />
            <h6 className="highlighted-text">
              What am I doing?
            </h6>
            <ul className={styles.list}>
              <li className="base-text">Improving my English and Italian (I love languages).</li>
              <li className="base-text">Learning new APIs, frameworks, libraries, and best practices.</li>
              <li className="base-text">
                I love creative code, UI/UX, I&apos;m a design enthusiast, so I tend to play around in my
                <Link className={`link-text ${styles.link}`} href="https://codepen.io/HenryZarza/" rel="author" target="_blank">Codepen</Link>
                with some stuff.
              </li>
              <li className="base-text">
                From the beginning of 2020 to the end of 2023, I worked, lived and traveled in different
                parts of the world, now I&apos;ve been trying to get back to the &quot;normal life&quot;.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h4 className={`heading-4 text-center ${styles.subtitle}`}>
        Let&apos;s keep in touch:
      </h4>
      <SocialLinks />
    </section>
  );
}