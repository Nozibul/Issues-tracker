"use client";

import Link from "next/link";
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
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className=" border-b mb-5 px-4 py-4 items-center">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="8">
            <Link className="text-3xl text-emerald-700" href="/">
              <BiSolidBugAlt />
            </Link>
            <ul className="flex space-x-2">
              {links?.map((link) => (
                <li key={link.href} className="flex items-center">
                  <Link
                    className={classNames({
                      "text-emerald-900": link.href === currentPath,
                      "text-emerald-600": link.href !== currentPath,
                      "font-semibold hover:text-emerald-800 transition-colors": true,
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
          </Flex>

          {/* authentication */}
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user?.image}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
