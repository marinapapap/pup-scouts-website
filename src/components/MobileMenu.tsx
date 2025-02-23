"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import { ChevronRight } from "lucide-react";

type Props = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: Props) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const openServicesMenu = () => {
    setIsServicesOpen(true);
  };

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  const commonClasses = [
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-screen",
    "bg-[hsl(40,58%,84%)]",
    "text-[hsl(30,56%,49%)]",
    "flex",
    "justify-center",
    "items-center",
    "flex-col",
    "gap-4",
    "transition-all",
    "duration-300",
    "md:hidden",
    "z-20",
  ];

  const getMenuClasses = () => {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [...commonClasses, "opacity-100"];
    } else {
      menuClasses = [...commonClasses, "opacity-0", "pointer-events-none"];
    }
    return menuClasses.join(" ");
  };

  return (
    <div className={getMenuClasses()}>
      {!isServicesOpen && (
        <>
          <Link href="/" className="text-4xl hover:text-gray-300">
            HOME
          </Link>
          <Link href="/" className="text-4xl hover:text-gray-300">
            ABOUT
          </Link>
          <button
            className="text-4xl hover:text-gray-300 cursor-pointer relative"
            onClick={openServicesMenu}
          >
            SERVICES
            <ChevronRight className="w-7 h-7 absolute top-1/2 -translate-y-1/2 left-full ml-1" />
          </button>
          <Link href="/" className="text-4xl hover:text-gray-300">
            CONTACT
          </Link>
        </>
      )}

      {isServicesOpen && <ServicesMenu onClose={closeServicesMenu} />}
    </div>
  );
};

export default MobileMenu;
