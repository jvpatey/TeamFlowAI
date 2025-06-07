import { FaUser } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

export const ProfilePicture = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-brand-primary/20 dark:border-brand-primary/30 shadow-lg">
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            <FaUser size={40} />
          </div>
        )}
      </div>
    </div>
  );
};
