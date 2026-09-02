import { defineField, defineType } from "sanity";

function ALLOWED_TIMES() {
  const times: { title: string; value: string }[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      // Change the m += 15 to adjust the interval (e.g., 30 for half-hour intervals)
      const value = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
      const period = h < 12 ? "AM" : "PM";
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const title = `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
      times.push({ title, value });
    }
  }
  return times;
}

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "string",
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endTime",
      title: "End Time",
      type: "string",
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "BCIT Downtown Campus"',
    }),
    defineField({
      name: "lumaUrl",
      title: "Luma URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description:
        "A short 1-2 sentence blurb about the event. This will be shown on the event card",
    }),
  ],
});
