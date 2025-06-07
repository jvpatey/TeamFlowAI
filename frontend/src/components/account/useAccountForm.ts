import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const useAccountForm = () => {
  const { user } = useUser();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  // Check if user signed up with OAuth (external account) or username/password
  const isOAuthUser =
    user?.externalAccounts && user.externalAccounts.length > 0;
  const canEditProfile = !isOAuthUser;

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

  return {
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
  };
};
