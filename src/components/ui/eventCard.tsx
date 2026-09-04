import styles from "./eventCard.module.css";
import { Button } from "./button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export function EventCard({ event, index }: { event: any; index: number }) {
  return (
    <div className={styles["event-card"]}>
      <div className={styles["event-image"]}>
        <div className={styles["event-image-inner"]}>
          <Image
            src={
              event.coverImage
                ? urlFor(event.coverImage).url()
                : "/placeholder-image.jpg"
            }
            alt={event.title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={styles["event-image-content"]}
          />
        </div>
      </div>
      <div className={styles["event-details"]}>
        <h3 className={styles["event-title"]}>{event.title}</h3>
        <div className={styles["event-info"]}>
          <div className={styles["event-date"]}>
            {/* date icon */}
            {event.startDate ? <p>{event.startDate}</p> : null}
          </div>
          <div className={styles["event-time"]}>
            {/* time icon */}
            {event.startTime ? <p>{event.startTime}</p> : null}
            <p>: </p>
            {event.endTime ? <p>{event.endTime}</p> : null}
            {/* time (am/pm) */}
          </div>
          <div className={styles["event-location"]}>
            {/* location icon */}
            {event.location ? <p>{event.location}</p> : null}
          </div>
        </div>
        {event.shortDescription ? (
          <p className={styles["event-short-description"]}>
            {event.shortDescription}
          </p>
        ) : null}
        <div className={styles["event-register"]}>
          {event.lumaUrl ? (
            <Button variant='default' size='default' radius='default'>
              <a href={event.lumaUrl} target='_blank' rel='noopener noreferrer'>
                Register Now
                {/* icon */}
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
