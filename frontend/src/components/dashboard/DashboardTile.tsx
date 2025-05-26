import React from "react";

// DashboardTile component props
export interface DashboardTileProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  bgColor?: string;
  onClick?: () => void;
}

// DashboardTile component for the dashboard page
export function DashboardTile({
  icon,
  title,
  subtitle,
  bgColor = "bg-keppel",
  onClick,
}: DashboardTileProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center aspect-square max-w-xs w-full p-6 rounded-2xl shadow-md transition-transform duration-150 hover:scale-105 hover:shadow-lg focus:outline-none ${bgColor}`}
      onClick={onClick}
      type="button"
    >
      <div className="mb-4 text-6xl text-white/90 dark:text-onyx">{icon}</div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white dark:text-onyx mb-1">
          {title}
        </div>
        {subtitle && (
          <div className="text-white/80 dark:text-onyx/80 text-md font-medium">
            {subtitle}
          </div>
        )}
      </div>
    </button>
  );
}
