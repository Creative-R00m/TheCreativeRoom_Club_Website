// src/components/contact-form.tsx
"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/lib/actions/contact";

const CONTACT_TYPES = [
  { value: "general", label: "General question" },
  { value: "discord", label: "Discord / joining the club" },
  { value: "collaboration", label: "Collaboration or event" },
  { value: "sponsorship", label: "Sponsorship" },
] as const;

const initialState: ContactFormState = {
  status: "idle",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form action={formAction} noValidate>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          aria-invalid={Boolean(state.fieldErrors?.name)}
        />
        {state.fieldErrors?.name?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          aria-invalid={Boolean(state.fieldErrors?.email)}
        />
        {state.fieldErrors?.email?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <div>
        <label htmlFor='contactType'>Reason for contact</label>
        <select
          id='contactType'
          name='contactType'
          aria-invalid={Boolean(state.fieldErrors?.contactType)}
        >
          <option value=''>Select a topic</option>
          {CONTACT_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {state.fieldErrors?.contactType?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          aria-invalid={Boolean(state.fieldErrors?.message)}
        />
        {state.fieldErrors?.message?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <input
        type='text'
        name='website'
        tabIndex={-1}
        autoComplete='off'
        style={{ display: "none" }}
      />

      <button type='submit' disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </button>

      {state.message && <p>{state.message}</p>}
    </form>
  );
}
