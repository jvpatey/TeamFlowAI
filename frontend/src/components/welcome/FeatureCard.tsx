interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  hasScaleEffect?: boolean;
}

// FeatureCard component for the welcome page
export function FeatureCard({
  icon,
  title,
  description,
  borderColor,
  iconBgColor,
  iconColor,
  hasScaleEffect = false,
}: FeatureCardProps) {
  return (
    <div
      className={`card bg-white dark:bg-gray-800 shadow-xl border-2 border-transparent ${borderColor} transition-all duration-300 ${
        hasScaleEffect ? "transform hover:scale-105" : ""
      }`}
    >
      <div className="card-body text-center p-5 sm:p-7">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 ${iconBgColor} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4`}
        >
          <div className={iconColor}>{icon}</div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-onyx dark:text-timberwolf mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
