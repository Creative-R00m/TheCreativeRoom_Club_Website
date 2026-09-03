import { fetchUpcomingEvents } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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
            <h3>{event.title}</h3>
            <Image
              src={urlFor(event.coverImage).url()}
              alt={event.title}
              width={100}
              height={100}
              className='w-[100px] h-[100px]'
              priority={index === 0}
            />
            {event.location ? <p>{event.location}</p> : null}
            {event.shortDescription ? <p>{event.shortDescription}</p> : null}
            {event.lumaUrl ? (
              <p>
                <a
                  href={event.lumaUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Join the event
                </a>
              </p>
            ) : null}
            {event.startDate ? <p>{event.startDate}</p> : null}
            {event.startTime ? <p>{event.startTime}</p> : null}
            {event.endTime ? <p>{event.endTime}</p> : null}
          </div>
        ))
      )}
    </div>
  );
}
