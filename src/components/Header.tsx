"use client";

import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getMenuClasses = () => {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "h-screen",
        "bg-white",
        "flex",
        "justify-center",
        "items-center",
        "flex-col",
        "gap-4",
        "z-20",
        "transition-all",
        "duration-300",
        "opacity-100",
        "md:hidden",
      ];
    } else {
      menuClasses = [
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "h-screen",
        "bg-white",
        "flex",
        "justify-center",
        "items-center",
        "flex-col",
        "gap-4",
        "z-20",
        "transition-all",
        "duration-300",
        "opacity-0",
        "pointer-events-none",
        "md:hidden",
      ];
    }
    return menuClasses.join(" ");
  };

  return (
    <>
      <nav className="bg-white p-5 md:p-7 md:justify-between md:items-center s-center fixed z-30 w-screen">
        <div className="flex flex-wrap items-center justify-between">
          <a className="text-2xl font-bold">Pup Scouts UK</a>
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="/" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
      </nav>

      <div className={getMenuClasses()}>
        <Link href="/" className="text-4xl hover:text-gray-300">
          Home
        </Link>
        <Link href="/" className="text-4xl hover:text-gray-300">
          About
        </Link>
        <Link href="/" className="text-4xl hover:text-gray-300">
          Services
        </Link>
        <Link href="/" className="text-4xl hover:text-gray-300">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Header;
