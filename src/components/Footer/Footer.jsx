import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={`${styles.footerUnderline} sketch-img`}
        src="/temp_landing/footer_underline.png"
      />
      {/* <a href='#' target='_blank' rel='noreferrer'>
        BCIT DAMD
      </a> */}
      <span>© 2026 The Creative Room</span>
      <a href="#" target="_blank" rel="noreferrer">
        Instagram
      </a>
    </footer>
  );
}
