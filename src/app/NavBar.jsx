"use client";

import Link from "next/link";
import { Skeleton } from "@/app/components"
import { usePathname } from "next/navigation";
import { BiSolidBugAlt } from "react-icons/bi";
import { useSession } from "next-auth/react";
import classNames from "classnames";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const NavBar = () => {
  return (
    <nav className=" border-b mb-5 px-4 py-4 items-center">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="8">
            <Link className="text-3xl text-emerald-700" href="/">
              <BiSolidBugAlt />
            </Link>
            {/* Navbar links */}
            <NavLinks />
          </Flex>
          {/* authentication */}
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

// Navbar links
const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ul className="flex space-x-2">
      {links?.map((link) => (
        <li key={link.href} className="flex items-center">
          <Link
            className={classNames({
              "!text-emerald-900 font-semibold": link.href === currentPath,
              "nav-link":true
            })}
            href={link.href}
          >
            {link.label}
          </Link>
          {link.href !== "/contact" && (
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
  );
};

// authentication
const AuthStatus = () => {
  const { status, data: session } = useSession();

  // decide what to render
  if (status === "loading") return <Skeleton width="3rem" height="2rem" /> ;
  if (status === "unauthenticated")
    return <Link className="nav-link border rounded-md py-2 px-4 bg-gray-200" href="/api/auth/signin">Login</Link>;

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user?.image}
            fallback="?"
            size="2"
            radius="full"
            referrerPolicy="no-referrer"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session?.user?.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
