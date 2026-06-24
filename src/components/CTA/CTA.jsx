import styles from "./CTA.module.css";
import { FaDiscord } from "react-icons/fa";
import { PiSparkleFill } from "react-icons/pi";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.buttons}>
        <a href='#' className={`${styles.button} ${styles.discord}`}>
          <FaDiscord />
          Join us on Discord
        </a>
        <a href='#' className={`${styles.button} ${styles.launch}`}>
          <PiSparkleFill />
          Soft Launch Opening
        </a>
      </div>
      <p className={styles.tagline}>
        Be a part of something bigger than each one of us...
      </p>
    </section>
  );
}
