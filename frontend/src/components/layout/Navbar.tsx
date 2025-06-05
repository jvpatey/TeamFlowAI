import { FaUser, FaBars } from "react-icons/fa";
import logoNoBg from "../../assets/logo_no_bg.png";
import { DarkModeToggle } from "../DarkModeToggle";
import { Link } from "react-router-dom";
import { NavbarDropdownMenu } from "./NavbarDropdownMenu";

// Navbar component for nav throughout the app
export function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 relative z-10">
      {/* Left side - Dropdown menu */}
      <div className="flex-none">
        <div className="dropdown">
          <div
            tabIndex={1}
            role="button"
            className="p-2 text-onyx dark:text-timberwolf bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-keppel/20 dark:hover:bg-keppel/30 hover:scale-110 transition-all duration-300 rounded-full border border-transparent hover:border-keppel/40 shadow-sm"
          >
            <FaBars size={20} color="currentColor" />
          </div>
          <NavbarDropdownMenu />
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
          <span className="text-2xl font-bold text-onyx dark:text-timberwolf">
            TeamFlowAI
          </span>
        </Link>
      </div>

      {/* Right side - User and Dark Mode */}
      <div className="flex-none flex items-center gap-3">
        <Link
          to="/account"
          className="p-2 text-onyx dark:text-timberwolf bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-keppel/20 dark:hover:bg-keppel/30 hover:scale-110 transition-all duration-300 rounded-full border border-transparent hover:border-keppel/40 shadow-sm"
          aria-label="User menu"
        >
          <FaUser size={20} />
        </Link>
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-transparent hover:border-keppel/40 transition-all duration-300">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
