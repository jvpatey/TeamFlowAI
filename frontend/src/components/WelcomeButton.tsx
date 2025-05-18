import React from "react";

interface WelcomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// WelcomeButton is a button component that is used in the WelcomeCard component
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
