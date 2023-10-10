"use client" ;

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidBugAlt } from "react-icons/bi";
import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex space-x-12 pl-8 border-b mb-5 px-5 h-16 items-center">
      <Link className="text-3xl text-emerald-700" href="/">
        <BiSolidBugAlt />
      </Link>
      <ul className="flex space-x-2">
        {links?.map((link) => (
          <li key={link.href} className="flex items-center">
          <Link
            className={classNames({
              'text-emerald-900': link.href === currentPath ,
              'text-emerald-600': link.href !== currentPath ,
              'font-semibold hover:text-emerald-800 transition-colors' : true
            })}
            href={link.href}
          >
            {link.label}
          </Link>
          { link.href !== "/contact" && (
              <svg
                className="w-4 h-6 current-fill ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ad9e9e"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
           )}
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
