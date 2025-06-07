import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

interface AccountActionsProps {
  canEditProfile: boolean;
  isEditingProfile: boolean;
  onEditProfile: () => void;
  onSaveProfile: () => void;
  onCancelEdit: () => void;
}

export const AccountActions = ({
  canEditProfile,
  isEditingProfile,
  onEditProfile,
  onSaveProfile,
  onCancelEdit,
}: AccountActionsProps) => {
  return (
    <>
      {/* Edit Profile Button */}
      {canEditProfile && !isEditingProfile && (
        <div className="flex justify-center mb-4">
          <button
            onClick={onEditProfile}
            className="bg-brand-primary hover:bg-brand-secondary text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaEdit />
            Edit Profile
          </button>
        </div>
      )}

      {/* Save/Cancel Buttons */}
      {isEditingProfile && (
        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={onSaveProfile}
            className="bg-feature-green-500 hover:bg-feature-green-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaSave />
            Save Changes
          </button>
          <button
            onClick={onCancelEdit}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaTimes />
            Cancel
          </button>
        </div>
      )}
    </>
  );
};
