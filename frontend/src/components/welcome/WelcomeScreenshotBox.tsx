import React from "react";

interface WelcomeScreenshotBoxProps {
  children?: React.ReactNode;
  className?: string;
}

// WelcomeScreenshotBox component for the welcome page
export function WelcomeScreenshotBox({
  children,
  className = "",
}: WelcomeScreenshotBoxProps) {
  return (
    <div
      className={`card card-bordered w-full h-40 md:h-56 bg-saffron rounded-xl flex items-center justify-center shadow-inner ${className}`}
    >
      {children}
    </div>
  );
}
