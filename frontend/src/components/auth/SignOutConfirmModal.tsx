import { FaSignOutAlt, FaTimes } from "react-icons/fa";

interface SignOutConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function SignOutConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
}: SignOutConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-brand-primary/30 max-w-sm w-full transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-feature-red-100 dark:bg-feature-red-900 rounded-lg flex items-center justify-center">
              <span className="text-feature-red-600 dark:text-feature-red-400">
                <FaSignOutAlt size={16} />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-text">
              Sign Out
            </h3>
          </div>
          <button
            onClick={onCancel}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="Close"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Content */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to sign out? You'll need to sign in again to
          access your account.
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 bg-white/80 dark:bg-gray-700/60 hover:bg-gray-50/90 dark:hover:bg-gray-600/80 backdrop-blur-md text-brand-dark dark:text-brand-text border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-white/80 dark:bg-gray-700/60 hover:bg-feature-red-50/90 dark:hover:bg-feature-red-900/80 backdrop-blur-md text-feature-red-600 dark:text-feature-red-400 hover:text-feature-red-700 dark:hover:text-feature-red-300 border-2 border-feature-red-500 hover:border-feature-red-600 dark:hover:border-feature-red-400 font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
