import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: "ee2tq917",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
