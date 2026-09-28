import { fetchGalleryAlbums, fetchUpcomingEvents } from "@/sanity/lib/queries";
import { EventCard } from "@/components/ui/eventCard";
import { GalleryCarousel } from "@/components/ui/galleryCarousel";

export const revalidate = 60;

export default async function Events() {
  const events = await fetchUpcomingEvents(2);
  const albums = await fetchGalleryAlbums();

  return (
    <div className='px-[var(--site-margin-x)]'>
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
      <div className='-mx-[var(--site-margin-x)]'>
        <GalleryCarousel albums={albums} />
      </div>
    </div>
  );
}
