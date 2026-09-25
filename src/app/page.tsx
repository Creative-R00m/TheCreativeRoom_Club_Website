import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { fetchUpcomingEvents } from "@/sanity/lib/queries";
import { EventCard } from "@/components/ui/eventCard";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const events = await fetchUpcomingEvents(4);

  return (
    <div className='px-[var(--site-margin-x)]'>
      <div className={styles.hero}>
        <h1>The Creative Room</h1>
      </div>
      <div className={styles.events}>
        <div className={styles.eventsHeader}>
          <div>
            <h3 className='type-eyebrow'>Come Hang Out</h3>
            <h2 className='type-h2'>Upcoming Events</h2>
          </div>
          <div className={styles.eventsButton}>
            <Button size='sm'>
              <a href='/events' className='flex items-center gap-2'>
                See more on luma
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
            </Button>
          </div>
        </div>

        {events.length === 0 ? (
          <p>No upcoming events yet.</p>
        ) : (
          events.map((event, index) => (
            <div key={event._id}>
              <EventCard event={event} index={index} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
