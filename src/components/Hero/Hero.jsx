import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.paper} src="/temp_landing/white-paper-texture.jpg" />
      <img className={styles.hero_eye} src="/temp_landing/hero_eye.png" />
      <img className={styles.hero_line} src="/temp_landing/hero_line.png" />
      <img className={styles.hero_scribble} src="/temp_landing/hero_scribble.png" />
      <img className={styles.hero_sparkle} src="/temp_landing/hero_sparkle.png" />
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src='/temp_landing/logo_wordmark.png' alt='The Creative Room' />
      </div>
      <p>
        A space made by and for BCIT DAMD designers where we exchange knowledge
        and explore ideas.
      </p>
    </div>
  );
}
