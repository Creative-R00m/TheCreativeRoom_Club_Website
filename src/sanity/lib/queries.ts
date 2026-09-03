import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { type SanityImageSource } from "@sanity/image-url";

export type EventCard = {
  _id: string;
  title: string;
  coverImage: SanityImageSource;
  lumaUrl: string;
  startDate: string;
  startTime: string;
  endTime: string;
  location?: string | null;
  shortDescription?: string | null;
};

export const EVENTS_QUERY = defineQuery(`
  *[_type == "event"]
    | order(startDate asc) {
        _id,
        title,
        coverImage,
        startDate,
        startTime,
        endTime,
        location,
        lumaUrl,
        shortDescription,
    }
`);

export async function fetchUpcomingEvents(limit: number) {
  const events = await client.fetch<EventCard[]>(EVENTS_QUERY);
  const today = new Date().toISOString().slice(0, 10);

  return events.filter((event) => event.startDate >= today).slice(0, limit);
}
