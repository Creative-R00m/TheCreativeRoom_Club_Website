import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <img
        className={styles.paper}
        src="/temp_landing/white-paper-texture.jpg"
      />
      <img
        className={styles.tornPapertop}
        src="/temp_landing/torn_paper_top.png"
      />
      <img
        className={styles.tornPaperbottom}
        src="/temp_landing/torn_paper_bottom.png"
      />
      <img
        className={styles.aboutQuestion}
        src="/temp_landing/exclamation_question.png"
      />
      <img className={styles.aboutHeart} src="/temp_landing/Heart.png" />
      <img className={styles.tapeTop} src="/temp_landing/top_tape.png" />
      <img className={styles.tapeBottom} src="/temp_landing/bottom_tape.png" />
      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Who We Are</h2>
          <p>
            The Creative Room is a design community of BCIT DAMD creatives, a
            space where creativity sparks louder and ideas grow stronger.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Our Purpose</h2>
          <img
            className={styles.aboutPurpose}
            src="/temp_landing/purpose_underline.png"
          />
          <p>
            The industry moves fast, so we build our strength from within,
            sharpening our skills and finding our voices through workshops and
            real-world briefs to grow our presence in the Vancouver design
            scene.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Our Goal</h2>
          <p>
            We’re here to establish a strong, inclusive network of creatives to
            make sure every member has the support they need as they step into
            the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
