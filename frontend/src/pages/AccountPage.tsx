import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { Navbar } from "../components/layout/Navbar";
import { useUser } from "@clerk/clerk-react";
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function AccountPage() {
  const { user, isLoaded } = useUser();
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

      <div className="flex flex-col flex-1 justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10 pt-8">
        {/* Account Details Card */}
        <div className="w-full max-w-xl lg:max-w-2xl">
          <div className="bg-white/60 dark:bg-gray-800/60 hover:bg-white/70 dark:hover:bg-gray-800/70 backdrop-blur-md shadow-xl border-2 border-transparent hover:border-brand-primary/30 dark:hover:border-brand-primary/40 transition-all duration-300 rounded-2xl p-6 lg:p-8 transform hover:scale-[1.02]">
            {/* Card Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-brand-dark dark:text-brand-text mb-2">
                Account
              </h1>
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
                Manage your profile and preferences
              </p>
            </div>

            {/* Profile Picture Section */}
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

            {/* Edit Profile Button */}
            {canEditProfile && !isEditingProfile && (
              <div className="flex justify-center mb-4">
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
              <div className="flex justify-center gap-3 mb-4">
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
                  value={
                    isEditingProfile ? editedFirstName : user?.firstName || ""
                  }
                  onChange={(e) => setEditedFirstName(e.target.value)}
                  readOnly={!isEditingProfile}
                  className={`w-full px-4 py-2.5 border-2 rounded-lg transition-all duration-300 ${
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
                  className={`w-full px-4 py-2.5 border-2 rounded-lg transition-all duration-300 ${
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
                  className={`w-full px-4 py-2.5 border-2 rounded-lg transition-all duration-300 ${
                    isEditingProfile
                      ? "bg-white/80 dark:bg-gray-700/60 border-brand-primary/60 hover:border-feature-green-500 focus:border-feature-green-400 dark:hover:border-feature-green-400 dark:focus:border-feature-green-400 text-brand-dark dark:text-brand-text focus:outline-none"
                      : "bg-white/50 dark:bg-gray-700/50 border-gray-300/60 dark:border-gray-600/60 text-brand-dark dark:text-brand-text cursor-not-allowed"
                  }`}
                />
              </div>
            </div>

            {/* Account Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
              <div className="text-center">
                {!canEditProfile ? (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    To edit your personal information, please visit your{" "}
                    <span className="text-brand-primary font-semibold">
                      authentication provider
                    </span>{" "}
                    settings.
                  </p>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
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
