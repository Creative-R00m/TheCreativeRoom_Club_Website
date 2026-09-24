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
  price?: number | null;
  shortDescription?: string | null;
};

export type GalleryImage = {
  _key: string;
  alt?: string | null;
};

export type GalleryAlbum = {
  _id: string;
  title: string;
  date?: string | null;
  eventTitle?: string | null;
  images: GalleryImage[];
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
        price,
        shortDescription,
    }
`);

export const GALLERY_ALBUMS_QUERY =
  defineQuery(`*[_type == "galleryAlbum" && count(images) > 0]
    | order(date desc) {
        _id,
        title,
        date,
        "eventTitle": event->title,
        images,
    }`);

export async function fetchUpcomingEvents(limit: number) {
  const events = await client.fetch<EventCard[]>(EVENTS_QUERY);
  const today = new Date().toISOString().slice(0, 10);

  return events.filter((event) => event.startDate >= today).slice(0, limit);
}

export async function fetchGalleryAlbums() {
  return client.fetch<GalleryAlbum[]>(GALLERY_ALBUMS_QUERY);
}
