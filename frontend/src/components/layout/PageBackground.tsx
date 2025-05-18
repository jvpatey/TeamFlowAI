import React from "react";

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

// PageBackground component for the page background throughout the app
export function PageBackground({
  children,
  className = "",
}: PageBackgroundProps) {
  return (
    <div
      className={`relative overflow-hidden min-h-screen w-full bg-platinum text-onyx flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
