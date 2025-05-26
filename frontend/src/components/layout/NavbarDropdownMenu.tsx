import { Link } from "react-router-dom";

export function NavbarDropdownMenu() {
  return (
    <ul
      tabIndex={1}
      className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-timberwolf dark:bg-outerSpace rounded-box w-52"
    >
      <li>
        <Link
          to="/account"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          Account
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/smart-docs"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          Smart Docs
        </Link>
      </li>
      <li>
        <Link
          to="/task-board"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          Task Board
        </Link>
      </li>
      <li>
        <Link
          to="/meeting-summaries"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          Meeting Summaries
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-onyx dark:text-timberwolf rounded-md transition-colors duration-150 hover:bg-keppel/80 hover:text-white dark:hover:bg-keppel/80 dark:hover:text-onyx"
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}
