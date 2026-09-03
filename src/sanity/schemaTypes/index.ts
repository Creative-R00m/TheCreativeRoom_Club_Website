import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType],
};
