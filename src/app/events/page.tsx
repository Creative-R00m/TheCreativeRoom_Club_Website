import { fetchUpcomingEvents } from "@/sanity/lib/queries";
import { EventCard } from "@/components/ui/eventCard";

export const revalidate = 60;

export default async function Events() {
  const events = await fetchUpcomingEvents(2);

  return (
    <div>
      <h1>Events</h1>
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
  );
}
