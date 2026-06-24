import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2>Who We Are</h2>
          <p>
            A community built from within the BCIT DAMD program — designers who
            believe no one should graduate invisible.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Our Purpose</h2>
          <p>
            The industry is shifting fast — we're building a space where BCIT
            designers can grow together, find real opportunities, and show up in
            the broader creative world.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Our Goal</h2>
          <p>
            Workshops. Real client projects. A network of DAMD students, alumni,
            and industry professionals who actually get it.
          </p>
        </div>
      </div>
    </section>
  );
}
