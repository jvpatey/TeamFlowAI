export function NavbarDropdownMenu() {
  return (
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
  );
}
