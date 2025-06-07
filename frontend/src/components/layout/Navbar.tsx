import { FaUser, FaBars, FaSignOutAlt } from "react-icons/fa";
import logoNoBg from "../../assets/logo_no_bg.png";
import { DarkModeToggle } from "../DarkModeToggle";
import { Link } from "react-router-dom";
import { NavbarDropdownMenu } from "./NavbarDropdownMenu";
import { useClerk, useUser } from "@clerk/clerk-react";
import { SignOutConfirmModal } from "../auth/SignOutConfirmModal";
import { useState } from "react";

// Navbar component for nav throughout the app
export function Navbar() {
  const { signOut } = useClerk();
  const { user, isLoaded } = useUser();
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const handleSignOutClick = () => {
    setShowSignOutModal(true);
  };

  const handleSignOutConfirm = () => {
    setShowSignOutModal(false);
    signOut({ redirectUrl: "/" });
  };

  const handleSignOutCancel = () => {
    setShowSignOutModal(false);
  };

  // Get user's display name
  const getDisplayName = () => {
    if (!user) return "";
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    return (
      `${firstName} ${lastName}`.trim() ||
      user.primaryEmailAddress?.emailAddress?.split("@")[0] ||
      "User"
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-16 px-4 relative z-50">
        {/* Left side - Dropdown menu */}
        <div className="flex-none">
          <div className="dropdown relative z-50">
            <div
              tabIndex={1}
              role="button"
              className="p-1.5 sm:p-2 text-brand-dark dark:text-brand-text bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-brand-primary/20 dark:hover:bg-brand-primary/30 hover:scale-110 transition-all duration-300 rounded-full border border-transparent hover:border-brand-primary/40 shadow-sm"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5">
                <FaBars size="100%" color="currentColor" />
              </div>
            </div>
            <NavbarDropdownMenu onSignOutClick={handleSignOutClick} />
          </div>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 group"
          >
            <img
              src={logoNoBg}
              alt="TeamFlowAI Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-xl sm:text-3xl font-bold text-brand-dark dark:text-brand-text">
              TeamFlowAI
            </span>
          </Link>
        </div>

        {/* Right side - User, Sign Out, and Dark Mode */}
        <div className="flex-none flex items-center gap-2 sm:gap-3">
          {/* User Account Button with Avatar and Name */}
          <Link
            to="/account"
            className="flex items-center gap-2 px-3 py-1.5 text-brand-dark dark:text-brand-text bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-brand-primary/20 dark:hover:bg-brand-primary/30 hover:scale-105 transition-all duration-300 rounded-full border border-transparent hover:border-brand-primary/40 shadow-sm"
            aria-label="User account"
          >
            {/* User Avatar */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border border-brand-primary/20">
              {isLoaded && user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <FaUser size={12} />
                </div>
              )}
            </div>

            {/* User Name - Hidden on small screens */}
            <span className="hidden sm:block text-sm font-medium truncate max-w-24">
              {isLoaded ? getDisplayName() : "..."}
            </span>
          </Link>

          <button
            onClick={handleSignOutClick}
            className="group flex items-center gap-0 hover:gap-2 px-2 hover:px-3 py-1.5 text-brand-dark dark:text-brand-text bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-feature-red-500/20 dark:hover:bg-feature-red-400/20 hover:scale-105 transition-all duration-700 ease-out rounded-full border border-transparent hover:border-feature-red-400/40 shadow-sm overflow-hidden"
            aria-label="Sign out"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-700 ease-out">
              <FaSignOutAlt size="100%" />
            </div>

            {/* Sign Out Text - Smooth width and opacity transition */}
            <span className="w-0 group-hover:w-16 opacity-0 group-hover:opacity-100 text-sm font-medium whitespace-nowrap transition-all duration-700 ease-out overflow-hidden">
              Sign Out
            </span>
          </button>
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-transparent hover:border-brand-primary/40 transition-all duration-300">
            <DarkModeToggle />
          </div>
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      <SignOutConfirmModal
        isOpen={showSignOutModal}
        onConfirm={handleSignOutConfirm}
        onCancel={handleSignOutCancel}
      />
    </>
  );
}
