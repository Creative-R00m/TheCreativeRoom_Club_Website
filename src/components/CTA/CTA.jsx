import styles from "./CTA.module.css";
import { FaDiscord } from "react-icons/fa";
import { PiSparkleFill } from "react-icons/pi";
import Footer from "../Footer/Footer";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <img
        className={`${styles.paper}`}
        src="/temp_landing/white-paper-texture.jpg"
      />
      <img className={`${styles.arrowTop} sketch-img`} src="/temp_landing/Arrow.png" />
      <img className={`${styles.scribble} sketch-img`} src="/temp_landing/hero_scribble.png" />
      <img
        className={`${styles.footerUnderline} sketch-img`}
        src="/temp_landing/footer_underline.png"
      />
      <div className={styles.buttons}>
        <a href="https://discord.gg/8knfryy6wC" className={`${styles.button} ${styles.discord}`}>
          {/* <FaDiscord /> */}
          <img
            className={`${styles["link-button"]}`}
            src="/temp_landing/discord_icon.svg"
          />
          Join us on Discord
        </a>
        <a href='https://luma.com/h5us2skt' className={`${styles.button} ${styles.launch}`}>
          <img className={`${styles['link-button']}`} src="/temp_landing/luma_icon.svg" />
          Soft Launch Opening
        </a>
      </div>
      <p className={styles.tagline}>
        Be a part of something bigger...
      </p>
      <div className={styles.footer}>
        <span>© 2026 The Creative Room</span>
        <a href="https://www.instagram.com/thecreativeroom.damd" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </section>
  );
}
