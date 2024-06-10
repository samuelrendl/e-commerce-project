import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants/constants";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="sticky z-50 container px-4">
      <div className="flex justify-between items-center my-5 gap-5">
        <div>
          <Link href="/" className="font-chakraPetch text-4xl">
            Tech
            <span className="font-bold text-primary">Nest</span>
          </Link>
        </div>
        <Search customStyle={"hidden md:block"} />
        <div className="flex justify-center md:items-center">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ThemeToggle />
          <div className="md:hidden flex items-center justify-center">
            <MobileNav />
          </div>
        </div>
      </div>
      <Search customStyle={"md:hidden mx-auto"} />
      <nav className="flex grow flex-wrap gap-8 justify-center my-5">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="link-dark transition-transform transform hover:scale-110 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
