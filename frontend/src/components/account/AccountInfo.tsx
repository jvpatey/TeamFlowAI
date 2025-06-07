interface AccountInfoProps {
  canEditProfile: boolean;
}

export const AccountInfo = ({ canEditProfile }: AccountInfoProps) => {
  return (
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
  );
};
