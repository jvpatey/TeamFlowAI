import { FaUser, FaBars, FaSignOutAlt } from "react-icons/fa";
import logoNoBg from "../../assets/logo_no_bg.png";
import { DarkModeToggle } from "../DarkModeToggle";
import { Link } from "react-router-dom";
import { NavbarDropdownMenu } from "./NavbarDropdownMenu";
import { useClerk } from "@clerk/clerk-react";
import { SignOutConfirmModal } from "../auth/SignOutConfirmModal";
import { useState } from "react";

// Navbar component for nav throughout the app
export function Navbar() {
  const { signOut } = useClerk();
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

  return (
    <>
      <div className="flex items-center justify-between w-full h-16 px-4 relative z-50">
        {/* Left side - Dropdown menu */}
        <div className="flex-none">
          <div className="dropdown relative z-50">
            <div
              tabIndex={1}
              role="button"
              className="p-2 text-brand-dark dark:text-brand-text bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-brand-primary/20 dark:hover:bg-brand-primary/30 hover:scale-110 transition-all duration-300 rounded-full border border-transparent hover:border-brand-primary/40 shadow-sm"
            >
              <FaBars size={20} color="currentColor" />
            </div>
            <NavbarDropdownMenu onSignOutClick={handleSignOutClick} />
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
          >
            <img
              src={logoNoBg}
              alt="TeamFlowAI Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-bold text-brand-dark dark:text-brand-text">
              TeamFlowAI
            </span>
          </Link>
        </div>

        {/* Right side - User, Sign Out, and Dark Mode */}
        <div className="flex-none flex items-center gap-3">
          <Link
            to="/account"
            className="p-2 text-brand-dark dark:text-brand-text bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-brand-primary/20 dark:hover:bg-brand-primary/30 hover:scale-110 transition-all duration-300 rounded-full border border-transparent hover:border-brand-primary/40 shadow-sm"
            aria-label="User menu"
          >
            <FaUser size={20} />
          </Link>
          <button
            onClick={handleSignOutClick}
            className="p-2 text-brand-dark dark:text-brand-text bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-feature-red-500/20 dark:hover:bg-feature-red-400/20 hover:scale-110 transition-all duration-300 rounded-full border border-transparent hover:border-feature-red-400/40 shadow-sm"
            aria-label="Sign out"
          >
            <FaSignOutAlt size={20} />
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
