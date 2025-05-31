import { Link } from "react-router-dom";
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
  return (
    <ul
      tabIndex={1}
      className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-timberwolf dark:bg-outerSpace rounded-box w-52"
    >
      <li>
        <Link
          to="/about"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaInfoCircle /> About
        </Link>
      </li>
      <li>
        <Link
          to="/account"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaUser /> Account
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaThLarge /> Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/smart-docs"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaFileAlt /> Smart Docs
        </Link>
      </li>
      <li>
        <Link
          to="/task-board"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaTrello /> Task Board
        </Link>
      </li>
      <li>
        <Link
          to="/meeting-summaries"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaMicrophone /> Meeting Summaries
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="flex items-center gap-2 text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          <FaSignOutAlt /> Sign out
        </Link>
      </li>
    </ul>
  );
}
