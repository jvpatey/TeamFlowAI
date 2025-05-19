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
    <input className={`input input-bordered w-full ${className}`} {...props} />
  );
}
