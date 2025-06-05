import { Link } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import {
  FaUser,
  FaThLarge,
  FaFileAlt,
  FaTrello,
  FaMicrophone,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export function NavbarDropdownMenu() {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut({ redirectUrl: "/" });
  };

  return (
    <ul
      tabIndex={1}
      className="menu menu-md dropdown-content mt-3 z-[50] p-3 shadow-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/10 dark:border-gray-700/10 rounded-2xl w-56"
    >
      <li>
        <Link
          to="/about"
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
            <FaInfoCircle size={16} />
          </div>
          About
        </Link>
      </li>
      <li>
        <Link
          to="/account"
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-green-500/20 dark:hover:bg-green-400/20 hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
            <FaUser size={16} />
          </div>
          Account
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-purple-500/20 dark:hover:bg-purple-400/20 hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
            <FaThLarge size={16} />
          </div>
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/smart-docs"
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
            <FaFileAlt size={16} />
          </div>
          Smart Docs
        </Link>
      </li>
      <li>
        <Link
          to="/task-board"
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-green-500/20 dark:hover:bg-green-400/20 hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
            <FaTrello size={16} />
          </div>
          Task Board
        </Link>
      </li>
      <li>
        <Link
          to="/meeting-summaries"
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-purple-500/20 dark:hover:bg-purple-400/20 hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
            <FaMicrophone size={16} />
          </div>
          Meeting Summaries
        </Link>
      </li>
      <div className="divider my-2 opacity-30"></div>
      <li>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 text-onyx dark:text-timberwolf rounded-lg p-3 transition-all duration-300 hover:bg-red-500/20 dark:hover:bg-red-400/20 hover:scale-105 hover:shadow-md w-full text-left"
        >
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
            <FaSignOutAlt size={16} />
          </div>
          Sign out
        </button>
      </li>
    </ul>
  );
}
