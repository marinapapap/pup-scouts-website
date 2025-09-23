"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import styles from "./MobileMenu.module.css";

type Props = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: Props) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href === "/services" && pathname.startsWith("/services/"));
    return isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
  };

  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.visible : styles.hidden}`}
    >
      {!isServicesOpen && (
        <>
          <Link href="/" className={getLinkClassName("/")} aria-disabled={pathname === "/"}>
            HOME
          </Link>
          <Link href="/about" className={getLinkClassName("/about")} aria-disabled={pathname === "/about"}>
            ABOUT
          </Link>
          <button
            className={styles.servicesButton}
            onClick={() => setIsServicesOpen(true)}
            aria-label="Services option"
          >
            SERVICES →
          </button>
          <Link href="/contact" className={getLinkClassName("/contact")} aria-disabled={pathname === "/contact"}>
            CONTACT
          </Link>
        </>
      )}

      {isServicesOpen && (
        <ServicesMenu onClose={() => setIsServicesOpen(false)} />
      )}
    </div>
  );
};

export default MobileMenu;
