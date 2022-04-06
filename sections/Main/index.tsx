import i18next from "i18next";
import { useRef, useEffect } from "react";

import { buildThresholdList } from "../../constants";
import styles from "./styles.module.css";

function Main() {
  const refTitle = useRef<HTMLHeadElement>(null);
  const refInteraction = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = refInteraction;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (refTitle.current) {
          const ratio = entry.intersectionRatio;
          refTitle.current.style.transform = `translate3d(0, ${(ratio * 150).toFixed(2)}%, 0)`;
        }
      },
      { threshold: buildThresholdList(100) }
    );

    if (current) {
      observer.observe(current);

      return () => {
        observer.unobserve(current);
      };
    }
  }, []);

  return (
    <section className={styles.container}>
      <header ref={refTitle} className={`text-center ${styles.header}`}>
        <h1 className={`title ${styles.title}`}>{i18next.t("MAIN:NAME")}</h1>
        <h3 className="small-title fw-normal">{i18next.t("MAIN:PROFESSION")}</h3>
      </header>
      <div className={styles.mountain} />
      <div ref={refInteraction} className={styles.interaction} />
    </section>
  );
}

export default Main;
