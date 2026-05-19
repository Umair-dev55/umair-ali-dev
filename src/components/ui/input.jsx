import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 selection:bg-accent rounded-lg border border-white/40 bg-tertiary/50 px-6 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-white/50 focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-accent/50 aria-invalid:ring-3 aria-invalid:ring-accent/50 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-accent/50 dark:aria-invalid:ring-accent/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
