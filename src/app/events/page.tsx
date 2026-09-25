import { fetchGalleryAlbums, fetchUpcomingEvents } from "@/sanity/lib/queries";
import { EventCard } from "@/components/ui/eventCard";
import { GalleryCarousel } from "@/components/ui/galleryCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const revalidate = 60;

export default async function Events() {
  const events = await fetchUpcomingEvents(2);
  const albums = await fetchGalleryAlbums();

  return (
    <div className='px-[var(--site-margin-x)]'>
      {/* Hero */}
      <div>
        <h1>Events</h1>
      </div>

      <div className='mt-[var(--space-section-sm)]'>
        <div className='flex items-center justify-between mb-12'>
          <div>
            <h3 className='type-eyebrow'>Come Hang Out</h3>
            <h2 className='type-h2'>Upcoming Events</h2>
          </div>
          <div>
            <Button size='sm'>
              <a
                href='https://luma.com/user/usr-REFSBx4C5vAJZM5'
                className='flex items-center gap-2'
              >
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
      <div className='mt-[var(--space-section)]'>
        <div className='flex items-center justify-between mb-12'>
          <div>
            <h3 className='type-eyebrow'>Check out our photos</h3>
            <h2 className='type-h2'>Gallery Archive</h2>
          </div>
          <div>
            <Button size='sm'>
              <a href='/events' className='flex items-center gap-2'>
                See more on insta
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
            </Button>
          </div>
        </div>
        <GalleryCarousel albums={albums} />
      </div>
    </div>
  );
}
