import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { Navbar } from "../components/layout/Navbar";
import { useUser } from "@clerk/clerk-react";
import {
  ProfilePicture,
  ProfileForm,
  AccountActions,
  AccountInfo,
  useAccountForm,
} from "../components/account";

// Account page
export default function AccountPage() {
  const { isLoaded } = useUser();
  const {
    isEditingProfile,
    editedFirstName,
    editedLastName,
    editedEmail,
    canEditProfile,
    setEditedFirstName,
    setEditedLastName,
    setEditedEmail,
    handleEditProfile,
    handleSaveProfile,
    handleCancelEdit,
  } = useAccountForm();

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
            <ProfilePicture />

            {/* Account Actions */}
            <AccountActions
              canEditProfile={canEditProfile}
              isEditingProfile={isEditingProfile}
              onEditProfile={handleEditProfile}
              onSaveProfile={handleSaveProfile}
              onCancelEdit={handleCancelEdit}
            />

            {/* User Information Form */}
            <ProfileForm
              isEditingProfile={isEditingProfile}
              editedFirstName={editedFirstName}
              editedLastName={editedLastName}
              editedEmail={editedEmail}
              onFirstNameChange={setEditedFirstName}
              onLastNameChange={setEditedLastName}
              onEmailChange={setEditedEmail}
            />

            {/* Account Information */}
            <AccountInfo canEditProfile={canEditProfile} />
          </div>
        </div>
      </div>
    </PageBackground>
  );
}
