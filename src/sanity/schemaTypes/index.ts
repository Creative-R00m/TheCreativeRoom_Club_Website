import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { eventType } from "./eventType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, eventType],
};
