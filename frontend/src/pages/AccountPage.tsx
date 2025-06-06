import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { Navbar } from "../components/layout/Navbar";
import { useUser } from "@clerk/clerk-react";
import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export default function AccountPage() {
  const { user, isLoaded } = useUser();
  const [isEditingPicture, setIsEditingPicture] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState("");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  // Check if user signed up with OAuth (external account) or username/password
  const isOAuthUser =
    user?.externalAccounts && user.externalAccounts.length > 0;
  const canEditProfile = !isOAuthUser;

  if (!isLoaded) {
    return (
      <PageBackground className="py-0 relative overflow-hidden min-h-screen">
        <FlowingBackground />
        <Navbar />
        <div className="flex flex-col flex-1 justify-center items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
          <div className="loading loading-spinner loading-lg text-brand-primary"></div>
        </div>
      </PageBackground>
    );
  }

  const handleCustomImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (customImageUrl && user) {
      try {
        await user.setProfileImage({ file: customImageUrl });
        setIsEditingPicture(false);
        setCustomImageUrl("");
      } catch (error) {
        console.error("Error updating profile image:", error);
      }
    }
  };

  const handleRemoveImage = async () => {
    if (user) {
      try {
        await user.setProfileImage({ file: null });
      } catch (error) {
        console.error("Error removing profile image:", error);
      }
    }
  };

  const handleEditProfile = () => {
    setEditedFirstName(user?.firstName || "");
    setEditedLastName(user?.lastName || "");
    setEditedEmail(user?.primaryEmailAddress?.emailAddress || "");
    setIsEditingProfile(true);
  };

  const handleSaveProfile = async () => {
    if (user) {
      try {
        await user.update({
          firstName: editedFirstName,
          lastName: editedLastName,
        });

        // Update email if it changed
        if (editedEmail !== user.primaryEmailAddress?.emailAddress) {
          await user.createEmailAddress({ email: editedEmail });
        }

        setIsEditingProfile(false);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    setEditedFirstName("");
    setEditedLastName("");
    setEditedEmail("");
  };

  return (
    <PageBackground className="py-0 relative overflow-hidden min-h-screen">
      {/* Dynamic Flowing Background */}
      <FlowingBackground />

      {/* Navbar inside the flowing background */}
      <Navbar />

      <div className="flex flex-col flex-1 justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-text mb-4">
            Account Details
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Manage your account preferences and settings.
          </p>
        </div>

        {/* Account Details Card */}
        <div className="w-full max-w-2xl">
          <div className="bg-white/60 dark:bg-gray-800/60 hover:bg-white/70 dark:hover:bg-gray-800/70 backdrop-blur-md shadow-xl border-2 border-transparent hover:border-brand-primary/30 dark:hover:border-brand-primary/40 transition-all duration-300 rounded-2xl p-8 transform hover:scale-[1.02]">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-brand-primary/20 dark:border-brand-primary/30 shadow-lg">
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                      <FaUser size={48} />
                    </div>
                  )}
                </div>

                {/* Change Picture Button */}
                <button
                  onClick={() => setIsEditingPicture(!isEditingPicture)}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-brand-primary hover:bg-brand-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg border-2 border-white dark:border-gray-800"
                >
                  <FaCamera size={16} />
                </button>
              </div>

              {/* Custom Image Upload Form */}
              {isEditingPicture && (
                <div className="mt-6 w-full max-w-md animate-fade-in">
                  <div className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl p-4 border border-brand-primary/20">
                    <form
                      onSubmit={handleCustomImageSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-brand-dark dark:text-brand-text mb-2">
                          Custom Image URL
                        </label>
                        <input
                          type="url"
                          value={customImageUrl}
                          onChange={(e) => setCustomImageUrl(e.target.value)}
                          placeholder="https://example.com/your-image.jpg"
                          className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/60 backdrop-blur-md border-2 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 rounded-lg text-gray-900 dark:text-brand-text placeholder-gray-600 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 bg-brand-primary hover:bg-brand-secondary text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Update Picture
                        </button>
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="px-4 py-2 bg-feature-red-500 hover:bg-feature-red-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Remove
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Edit Profile Button */}
            {canEditProfile && !isEditingProfile && (
              <div className="flex justify-center mb-6">
                <button
                  onClick={handleEditProfile}
                  className="bg-brand-primary hover:bg-brand-secondary text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <FaEdit />
                  Edit Profile
                </button>
              </div>
            )}

            {/* Save/Cancel Buttons */}
            {isEditingProfile && (
              <div className="flex justify-center gap-3 mb-6">
                <button
                  onClick={handleSaveProfile}
                  className="bg-feature-green-500 hover:bg-feature-green-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <FaSave />
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <FaTimes />
                  Cancel
                </button>
              </div>
            )}

            {/* User Information */}
            <div className="space-y-6">
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
                  value={
                    isEditingProfile ? editedFirstName : user?.firstName || ""
                  }
                  onChange={(e) => setEditedFirstName(e.target.value)}
                  readOnly={!isEditingProfile}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 ${
                    isEditingProfile
                      ? "bg-white/80 dark:bg-gray-700/60 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 text-brand-dark dark:text-brand-text focus:outline-none"
                      : "bg-white/50 dark:bg-gray-700/50 border-gray-300/60 dark:border-gray-600/60 text-brand-dark dark:text-brand-text cursor-not-allowed"
                  }`}
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
                  value={
                    isEditingProfile ? editedLastName : user?.lastName || ""
                  }
                  onChange={(e) => setEditedLastName(e.target.value)}
                  readOnly={!isEditingProfile}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 ${
                    isEditingProfile
                      ? "bg-white/80 dark:bg-gray-700/60 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 text-brand-dark dark:text-brand-text focus:outline-none"
                      : "bg-white/50 dark:bg-gray-700/50 border-gray-300/60 dark:border-gray-600/60 text-brand-dark dark:text-brand-text cursor-not-allowed"
                  }`}
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
                  onChange={(e) => setEditedEmail(e.target.value)}
                  readOnly={!isEditingProfile}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 ${
                    isEditingProfile
                      ? "bg-white/80 dark:bg-gray-700/60 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 text-brand-dark dark:text-brand-text focus:outline-none"
                      : "bg-white/50 dark:bg-gray-700/50 border-gray-300/60 dark:border-gray-600/60 text-brand-dark dark:text-brand-text cursor-not-allowed"
                  }`}
                />
              </div>
            </div>

            {/* Account Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
              <div className="text-center">
                {!canEditProfile ? (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    To edit your personal information, please visit your{" "}
                    <span className="text-brand-primary font-semibold">
                      authentication provider
                    </span>{" "}
                    settings.
                  </p>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    You can edit your profile information using the{" "}
                    <span className="text-brand-primary font-semibold">
                      Edit Profile
                    </span>{" "}
                    button above.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}
