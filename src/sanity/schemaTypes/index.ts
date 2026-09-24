import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { galleryAlbum } from "./galleryAlbum";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, galleryAlbum],
};
