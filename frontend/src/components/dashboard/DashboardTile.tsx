import React from "react";

// DashboardTile component props
export interface DashboardTileProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  bgColor?: string;
  iconBgColor?: string;
  iconColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

// DashboardTile component for the dashboard page
export function DashboardTile({
  icon,
  title,
  subtitle,
  iconBgColor = "bg-blue-100 dark:bg-blue-900",
  iconColor = "text-blue-600 dark:text-blue-400",
  borderColor = "hover:border-blue-500 dark:hover:border-blue-400",
  onClick,
}: DashboardTileProps) {
  return (
    <button
      className={`group bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-xl border-2 border-transparent ${borderColor} transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center aspect-square max-w-xs w-full p-6 rounded-2xl focus:outline-none`}
      onClick={onClick}
      type="button"
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 ${iconBgColor} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4`}
      >
        <div className={`text-2xl sm:text-3xl ${iconColor}`}>{icon}</div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-xl font-bold text-onyx dark:text-timberwolf mb-1 sm:mb-2">
          {title}
        </div>
        {subtitle && (
          <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
            {subtitle}
          </div>
        )}
      </div>
    </button>
  );
}
