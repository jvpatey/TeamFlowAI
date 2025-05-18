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
      className={`flex items-center justify-center gap-2 font-semibold rounded-lg py-2 shadow transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
