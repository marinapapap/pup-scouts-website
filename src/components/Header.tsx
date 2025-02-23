"use client";

import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[hsl(40,58%,84%)] p-5 md:p-10 md:justify-between md:items-center s-center fixed z-30 w-screen">
        <div className="flex flex-wrap items-center justify-between">
          <a className="text-2xl text-[hsl(12,78%,58%)] font-bold">
            Pup Scouts UK
          </a>
          <div className="hidden md:flex md:items-center md:gap-12">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/" className="hover:text-gray-300">
              About
            </Link>
            <div className="relative group">
              {/* Button and Dropdown Menu */}
              <div>
                <button className="hover:text-gray-300 focus:outline-none flex items-center gap-1">
                  Services
                </button>
                <div className="absolute bg-white shadow-lg opacity-0 invisible group-hover:opacity-80 group-hover:visible transition-opacity duration-300">
                  <Link
                    href="/service-1"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Walking
                  </Link>
                  <Link
                    href="/service-2"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Training
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} />
    </>
  );
};

export default Header;
