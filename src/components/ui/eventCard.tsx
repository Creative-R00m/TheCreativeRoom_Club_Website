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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='16'
              viewBox='0 0 14 16'
              fill='none'
            >
              <path
                d='M4.75 0.75C4.75 0.334375 4.41563 0 4 0C3.58437 0 3.25 0.334375 3.25 0.75V2H2C0.896875 2 0 2.89687 0 4V4.5V6V14C0 15.1031 0.896875 16 2 16H12C13.1031 16 14 15.1031 14 14V6V4.5V4C14 2.89687 13.1031 2 12 2H10.75V0.75C10.75 0.334375 10.4156 0 10 0C9.58438 0 9.25 0.334375 9.25 0.75V2H4.75V0.75ZM1.5 6H12.5V14C12.5 14.275 12.275 14.5 12 14.5H2C1.725 14.5 1.5 14.275 1.5 14V6Z'
                fill='#19191B'
              />
            </svg>
            {event.startDate ? <p>{event.startDate}</p> : null}
          </div>
          <div className={styles["event-time"]}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8ZM0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8ZM7.25 3.75V8C7.25 8.25 7.375 8.48438 7.58437 8.625L10.5844 10.625C10.9281 10.8562 11.3938 10.7625 11.625 10.4156C11.8562 10.0687 11.7625 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41562 3 8 3C7.58437 3 7.25 3.33437 7.25 3.75Z'
                fill='#19191B'
              />
            </svg>
            <div className={styles["event-time-text"]}>
              {event.startTime ? <p>{event.startTime}</p> : null}
              <p>: </p>
              {event.endTime ? <p>{event.endTime}</p> : null}
              {/* time (am/pm) */}
            </div>
          </div>
          <div className={styles["event-location"]}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='16'
              viewBox='0 0 12 16'
              fill='none'
            >
              <path
                d='M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z'
                fill='#19191B'
              />
            </svg>
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
