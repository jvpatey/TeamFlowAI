import { FaUser, FaBars } from "react-icons/fa";
import logoNoBg from "../../assets/logo_no_bg.png";
import { DarkModeToggle } from "../DarkModeToggle";
import { Link } from "react-router-dom";

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
          <ul
            tabIndex={1}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-timberwolf dark:bg-outerSpace rounded-box w-52"
          >
            <li>
              <a className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx">
                Dashboard
              </a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx">
                Account
              </a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx">
                Sign out
              </a>
            </li>
          </ul>
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
          <span className="text-xl font-bold text-onyx dark:text-timberwolf">
            TeamFlowAI
          </span>
        </Link>
      </div>

      {/* Right side - User and Dark Mode */}
      <div className="navbar-end flex items-center gap-4">
        <button
          className="p-2 avatar text-onyx dark:text-timberwolf hover:bg-keppel/20 dark:hover:bg-keppel/30 hover:scale-110 transition duration-150 rounded-full border-none outline-none"
          aria-label="User menu"
          type="button"
        >
          <FaUser size={20} />
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
}
