"use client";

import * as React from "react";
import { cn } from "cn";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot='label'
      className={cn(
        "flex items-center gap-2 select-none font-sans text-body font-bold leading-5 tracking-[0.001rem] text-primary group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
