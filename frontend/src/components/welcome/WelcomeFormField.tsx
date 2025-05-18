import React from "react";

interface WelcomeFormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// WelcomeFormField component for the welcome page
export function WelcomeFormField({
  className = "",
  ...props
}: WelcomeFormFieldProps) {
  return (
    <input
      className={`border border-outerSpace dark:border-timberwolf rounded-lg px-3 py-2 w-full bg-timberwolf dark:bg-outerSpace focus:outline-none focus:ring-2 focus:ring-keppel ${className}`}
      {...props}
    />
  );
}
