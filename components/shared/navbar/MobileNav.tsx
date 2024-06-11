import React from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="size-6" />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <nav className="flex flex-col grow gap-8 justify-center text-3xl mt-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="link-neutral600_dark200 transition-transform transform hover:scale-110 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
