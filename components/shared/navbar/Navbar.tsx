import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants/constants";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

const Navbar = () => {
  return (
    <header className="sticky z-50 container">
      <div className="flex justify-between items-center my-5 gap-5">
        <div>
          <Link href="/" className="font-chakraPetch text-4xl">
            Tech
            <span className="font-bold text-primary">Nest</span>
          </Link>
        </div>
        <Search customStyle={"hidden md:block"} />
        <div>
          Sign-up Sign-In
          <ThemeToggle />
        </div>
      </div>
      <Search customStyle={"md:hidden mx-auto"} />
      <nav className="flex gap-6 justify-center my-5">
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
