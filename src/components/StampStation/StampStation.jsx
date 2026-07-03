import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./StampStation.module.css";

// each stamp lands in a random brand colour
const STAMP_COLORS = [
  "/assets/stamps/blue.png",
  "/assets/stamps/dark-green.png",
  "/assets/stamps/light-green.png",
  "/assets/stamps/pink.png",
  "/assets/stamps/red.png",
  "/assets/stamps/yellow.png",
];
const randomStamp = () =>
  STAMP_COLORS[Math.floor(Math.random() * STAMP_COLORS.length)];

/**
 * Stamp tool, top-right. Click it to "pick up" the stamp — the cursor is
 * replaced by a stamp that follows the pointer, and clicking anywhere on
 * screen presses it down (a quick squash) and leaves a red mark.
 * Click the tool again (or press Esc) to put it down.
 *
 * A "clear" button appears beside the tool only while marks exist; clicking
 * it fades them all out and drops the stamp (cursor returns to normal).
 */
export default function StampStation() {
  const [active, setActive] = useState(false);
  const [stamps, setStamps] = useState([]);
  const [clearing, setClearing] = useState(false);
  const pointerRef = useRef(null);
  const heldRef = useRef(false);
  const seqRef = useRef([]);

  // frame 0 = resting (upright) · 1 = tilting · 2 = pressed flat
  const setFrame = (f) => pointerRef.current?.setAttribute("data-frame", String(f));
  const clearSeq = () => {
    seqRef.current.forEach(clearTimeout);
    seqRef.current = [];
  };

  // press: roll the stamp down through the mid frame and hold it pressed.
  // also snap the floating stamp to the press point — a plain tap fires no
  // pointermove beforehand, so without this it'd stamp from off-screen.
  const press = useCallback((e) => {
    heldRef.current = true;
    clearSeq();
    const el = pointerRef.current;
    if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    setFrame(1);
    seqRef.current.push(window.setTimeout(() => setFrame(2), 70));
  }, []);

  // release: roll back up, then drop the mark where the pointer lifts
  const release = useCallback((e) => {
    if (!heldRef.current) return;
    heldRef.current = false;
    clearSeq();
    setFrame(1);
    seqRef.current.push(window.setTimeout(() => setFrame(0), 70));
    const id = Date.now() + Math.random();
    setStamps((prev) => [
      ...prev,
      { id, x: e.clientX, y: e.clientY, rot: Math.random() * 16 - 8, src: randomStamp() },
    ]);
  }, []);

  const clearAll = useCallback(() => {
    setActive(false); // drop the stamp → cursor returns to normal immediately
    setClearing(true);
    window.setTimeout(() => {
      setStamps([]);
      setClearing(false);
    }, 300);
  }, []);

  // the floating stamp follows the pointer; release / cancel finish the press
  useEffect(() => {
    if (!active) return;
    const el = pointerRef.current;
    if (el) {
      el.style.transform = "translate(-9999px, -9999px)"; // park off-screen until first move
      el.setAttribute("data-frame", "0");
    }
    const move = (e) => {
      if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const cancel = () => {
      heldRef.current = false;
      clearSeq();
      setFrame(0);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", cancel);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", cancel);
      cancel(); // reset hold state when leaving stamp mode
    };
  }, [active, release]);

  // Esc puts the stamp down.
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // while stamping, lock page scroll so a touch-drag stamps instead of
  // panning the page (and kill pull-to-refresh / rubber-banding on mobile).
  useEffect(() => {
    if (!active) return;
    const { overflow, overscrollBehavior } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.overscrollBehavior = overscrollBehavior;
    };
  }, [active]);

  const hasStamps = stamps.length > 0;

  return (
    <>
      {/* placed marks */}
      <div
        className={`${styles.stampLayer} ${clearing ? styles.isClearing : ""}`}
        aria-hidden="true"
      >
        {stamps.map((s) => (
          <img
            key={s.id}
            className={styles.stampMark}
            src={s.src}
            alt=""
            style={{ left: s.x, top: s.y, "--r": `${s.rot}deg` }}
          />
        ))}
      </div>

      {/* full-screen catcher while stamping: hold on press, stamp on release */}
      {active && <div className={styles.stampOverlay} onPointerDown={press} />}

      {/* floating stamp that follows the pointer + presses on click */}
      {active && (
        <div ref={pointerRef} className={styles.stampPointer} data-frame="0" aria-hidden="true">
          <span className={styles.stampPointerInner}>
            <img className={`${styles.stampFrame} ${styles.stampFrame1}`} src="/assets/stamp-cursor.png" alt="" />
            <img className={`${styles.stampFrame} ${styles.stampFrame2}`} src="/assets/stamp-click-2.png" alt="" />
            <img className={`${styles.stampFrame} ${styles.stampFrame3}`} src="/assets/stamp-clicked.png" alt="" />
          </span>
        </div>
      )}

      {/* top-right cluster: [clear] [tool] */}
      <div className={styles.stampCluster}>
        {hasStamps && !clearing && (
          <button
            type="button"
            className={styles.stampClear}
            onClick={clearAll}
            aria-label={`Clear all stamps (${stamps.length})`}
            title="Clear stamps"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
              <path
                d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <button
          type="button"
          className={`${styles.stampTool} ${active ? styles.isActive : ""}`}
          onClick={() => setActive((v) => !v)}
          aria-pressed={active}
          aria-label={
            active ? "Put the stamp down" : "Pick up the stamp to mark the page"
          }
          title={active ? "Stamping — Esc to stop" : "Pick up the stamp"}
        >
          <img src="/assets/stamp-cursor.png" alt="" width="38" height="33" />
        </button>
      </div>
    </>
  );
}
