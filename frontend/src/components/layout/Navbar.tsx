import { FaUser } from "react-icons/fa";
import logoNoBg from "../../assets/logo_no_bg.png";
import { DarkModeToggle } from "../DarkModeToggle";

// Navbar component for the navigation bar
export function Navbar() {
  return (
    <div className="navbar bg-timberwolf dark:bg-outerSpace shadow-lg">
      {/* Left side - Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-timberwolf dark:bg-outerSpace rounded-box w-52"
          >
            <li>
              <a className="text-onyx dark:text-timberwolf">Dashboard</a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf">Projects</a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf">Team</a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf">Settings</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Center - Logo */}
      <div className="navbar-center">
        <a className="flex items-center gap-2">
          <img
            src={logoNoBg}
            alt="TeamFlowAI Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold text-onyx dark:text-timberwolf">
            TeamFlowAI
          </span>
        </a>
      </div>

      {/* Right side - Icons */}
      <div className="navbar-end flex items-center gap-4">
        <DarkModeToggle />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar text-onyx dark:text-timberwolf"
          >
            <FaUser size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-timberwolf dark:bg-outerSpace rounded-box w-52"
          >
            <li>
              <a className="text-onyx dark:text-timberwolf">Profile</a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf">Settings</a>
            </li>
            <li>
              <a className="text-onyx dark:text-timberwolf">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
