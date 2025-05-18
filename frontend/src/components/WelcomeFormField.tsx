import React from "react";

interface WelcomeFormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// WelcomeFormField is a form field component that is used in the WelcomeCard component
export function WelcomeFormField({
  className = "",
  ...props
}: WelcomeFormFieldProps) {
  return (
    <input
      className={`border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-keppel ${className}`}
      {...props}
    />
  );
}
