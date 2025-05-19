import React from "react";

interface WelcomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// WelcomeButton component for the welcome card
export function WelcomeButton({
  children,
  className = "",
  ...props
}: WelcomeButtonProps) {
  return (
    <button
      className={`btn btn-lg w-full flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
