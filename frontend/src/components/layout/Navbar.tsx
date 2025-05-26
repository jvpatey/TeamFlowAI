import { FaUser, FaBars } from "react-icons/fa";
import logoNoBg from "../../assets/logo_no_bg.png";
import { DarkModeToggle } from "../DarkModeToggle";
import { Link } from "react-router-dom";
import { NavbarDropdownMenu } from "./NavbarDropdownMenu";

// Navbar component for nav throughout the app
export function Navbar() {
  return (
    <div className="navbar bg-timberwolf dark:bg-outerSpace shadow-lg">
      {/* Left side - Dropdown menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={1}
            role="button"
            className="p-2 text-onyx dark:text-timberwolf hover:bg-keppel/20 dark:hover:bg-keppel/30 hover:scale-110 transition duration-150 rounded-full border-none outline-none"
          >
            <FaBars size={20} color="currentColor" />
          </div>
          <NavbarDropdownMenu />
        </div>
      </div>

      {/* Center - Logo */}
      <div className="navbar-center">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 transition-transform duration-150 hover:scale-105 group"
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
      <div className="navbar-end flex items-center gap-4">
        <Link
          to="/account"
          className="p-2 avatar text-onyx dark:text-timberwolf hover:bg-keppel/20 dark:hover:bg-keppel/30 hover:scale-110 transition duration-150 rounded-full border-none outline-none"
          aria-label="User menu"
        >
          <FaUser size={20} />
        </Link>
        <DarkModeToggle />
      </div>
    </div>
  );
}
