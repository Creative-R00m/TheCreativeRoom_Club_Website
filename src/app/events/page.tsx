import { fetchUpcomingEvents } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { EventCard } from "@/components/ui/eventCard";

export default async function Events() {
  const events = await fetchUpcomingEvents(2);

  return (
    <div>
      <h1>Events</h1>
      {events.length === 0 ? (
        <p>No published events yet.</p>
      ) : (
        events.map((event, index) => (
          <div key={event._id}>
            <EventCard event={event} index={index} />
          </div>
        ))
      )}
    </div>
  );
}
