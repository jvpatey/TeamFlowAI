import { FaUser, FaEnvelope } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

interface ProfileFormProps {
  isEditingProfile: boolean;
  editedFirstName: string;
  editedLastName: string;
  editedEmail: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

export const ProfileForm = ({
  isEditingProfile,
  editedFirstName,
  editedLastName,
  editedEmail,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
}: ProfileFormProps) => {
  const { user } = useUser();

  const inputClassName = (isEditing: boolean) =>
    `w-full px-4 py-2.5 border-2 rounded-lg transition-all duration-300 ${
      isEditing
        ? "bg-white/80 dark:bg-gray-700/60 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 text-brand-dark dark:text-brand-text focus:outline-none"
        : "bg-white/50 dark:bg-gray-700/50 border-gray-300/60 dark:border-gray-600/60 text-brand-dark dark:text-brand-text cursor-not-allowed"
    }`;

  return (
    <div className="space-y-4">
      {/* First Name */}
      <div className="group">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <span className="text-brand-primary">
            <FaUser />
          </span>
          First Name
        </label>
        <input
          type="text"
          value={isEditingProfile ? editedFirstName : user?.firstName || ""}
          onChange={(e) => onFirstNameChange(e.target.value)}
          readOnly={!isEditingProfile}
          className={inputClassName(isEditingProfile)}
        />
      </div>

      {/* Last Name */}
      <div className="group">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <span className="text-brand-primary">
            <FaUser />
          </span>
          Last Name
        </label>
        <input
          type="text"
          value={isEditingProfile ? editedLastName : user?.lastName || ""}
          onChange={(e) => onLastNameChange(e.target.value)}
          readOnly={!isEditingProfile}
          className={inputClassName(isEditingProfile)}
        />
      </div>

      {/* Email */}
      <div className="group">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2">
          <span className="text-brand-primary">
            <FaEnvelope />
          </span>
          Email
        </label>
        <input
          type="email"
          value={
            isEditingProfile
              ? editedEmail
              : user?.primaryEmailAddress?.emailAddress || ""
          }
          onChange={(e) => onEmailChange(e.target.value)}
          readOnly={!isEditingProfile}
          className={inputClassName(isEditingProfile)}
        />
      </div>
    </div>
  );
};
