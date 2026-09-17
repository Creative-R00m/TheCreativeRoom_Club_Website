// src/components/contact-form.tsx
"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/lib/actions/contact";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CONTACT_TYPES = [
  { value: "general", label: "General Inquiry" },
  { value: "events", label: "Events" },
  { value: "collaboration/partnership", label: "Collaboration / Partnership" },
  { value: "other ", label: "Something Else" },
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
    <form action={formAction} noValidate className='w-full max-w-xl'>
      <FieldSet>
        <FieldGroup>
          <Field data-invalid={Boolean(state.fieldErrors?.contactType)}>
            <FieldLabel htmlFor='contactType' className='type-label'>
              Type of Inquiry
            </FieldLabel>
            <Select name='contactType' defaultValue=''>
              <SelectTrigger
                id='contactType'
                aria-invalid={Boolean(state.fieldErrors?.contactType)}
                className='w-full'
              >
                <SelectValue placeholder='Select a topic'>
                  {(value) =>
                    CONTACT_TYPES.find((type) => type.value === value)?.label
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {CONTACT_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError>
              {state.fieldErrors?.contactType?.map((error) => (
                <span key={error}>{error}</span>
              ))}
            </FieldError>
          </Field>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <Field data-invalid={Boolean(state.fieldErrors?.name)}>
              <FieldLabel htmlFor='name'>Name</FieldLabel>
              <Input
                type='text'
                id='name'
                name='name'
                placeholder='Your full name'
                aria-invalid={Boolean(state.fieldErrors?.name)}
              />
              <FieldError>
                {state.fieldErrors?.name?.map((error) => (
                  <span key={error}>{error}</span>
                ))}
              </FieldError>
            </Field>

            <Field data-invalid={Boolean(state.fieldErrors?.email)}>
              <FieldLabel htmlFor='email'>Email</FieldLabel>
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='hello@example.com'
                aria-invalid={Boolean(state.fieldErrors?.email)}
              />
              <FieldError>
                {state.fieldErrors?.email?.map((error) => (
                  <span key={error}>{error}</span>
                ))}
              </FieldError>
            </Field>
          </div>

          <Field data-invalid={Boolean(state.fieldErrors?.message)}>
            <FieldLabel htmlFor='message'>Message</FieldLabel>
            <Textarea
              id='message'
              name='message'
              placeholder="Tell us what's on your mind..."
              aria-invalid={Boolean(state.fieldErrors?.message)}
            />
            <FieldError>
              {state.fieldErrors?.message?.map((error) => (
                <span key={error}>{error}</span>
              ))}
            </FieldError>
          </Field>
        </FieldGroup>

        <Input
          type='text'
          name='website'
          tabIndex={-1}
          autoComplete='off'
          className='sr-only'
          aria-hidden='true'
        />

        <Button type='submit' disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>

        {state.message && (
          <Alert variant={state.status === "error" ? "destructive" : "default"}>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </FieldSet>
    </form>
  );
}
