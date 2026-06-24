import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.logoWrapper}>
        <img src='/logo.png' alt='The Creative Room' />
      </div>
      <p>
        A space made by and for BCIT DAMD designers where we exchange knowledge
        and explore ideas.
      </p>
    </div>
  );
}
