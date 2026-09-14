"use server";

import { z } from "zod";
import { resend } from "@/lib/resend";

const CONTACT_TYPES = [
  { value: "general", label: "General question" },
  { value: "discord", label: "Discord / joining the club" },
  { value: "collaboration", label: "Collaboration or event" },
  { value: "sponsorship", label: "Sponsorship" },
] as const;

const contactTypeValues = CONTACT_TYPES.map((t) => t.value) as [
  string,
  ...string[],
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email"),
  contactType: z.enum(contactTypeValues, {
    error: "Select a topic",
  }),
  message: z.string().trim().min(1, "Message is required").max(2000),
  website: z.string().max(0, "").optional(),
});

function sanitizeEmailHeaderValue(value: string, maxLength = 80) {
  return (
    value
      .replace(/[\r\n\u0000-\u001F\u007F]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, maxLength) || "Unknown"
  );
}

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const startTime = Number(formData.get("startTime"));
  const elapsed = Date.now() - startTime;

  if (!startTime || elapsed < 3000) {
    return { status: "success" };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    contactType: formData.get("contactType"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form for errors.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot tripped — pretend success, don't send anything.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const typeLabel =
    CONTACT_TYPES.find((t) => t.value === parsed.data.contactType)?.label ??
    parsed.data.contactType;

  const sanitizedName = sanitizeEmailHeaderValue(parsed.data.name, 60);
  const sanitizedTypeLabel = sanitizeEmailHeaderValue(typeLabel, 40);

  const { error } = await resend.emails.send({
    from: "TCR Contact <onboarding@resend.dev>", // swap once your domain is verified
    to: "thecreativeroom.damd@gmail.com",
    replyTo: parsed.data.email,
    subject: `[${sanitizedTypeLabel}] New message from ${sanitizedName}`,
    text: parsed.data.message,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Try again.",
    };
  }

  return { status: "success" };
}
