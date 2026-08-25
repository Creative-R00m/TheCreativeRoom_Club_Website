// needs:
// - title (string)
// - slug (Slug)
// - startDate and time (Datetime)
// - endDate and time (Datetime)
// - location (Geopoint?)
// - short description (string)
// - image (Image)
// - body (array of blocks?)

import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "url slug",
      type: "slug",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "geopoint",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
