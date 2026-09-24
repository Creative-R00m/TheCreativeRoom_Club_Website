import { defineType, defineField, defineArrayMember } from "sanity";

export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "event",
      title: "Related event (optional)",
      type: "reference",
      to: [{ type: "event" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
          ],
        }),
      ],
      options: { layout: "grid" },
    }),
  ],
});
