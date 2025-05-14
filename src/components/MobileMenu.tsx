"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import styles from "./MobileMenu.module.css";

type Props = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: Props) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.visible : styles.hidden}`}
    >
      {!isServicesOpen && (
        <>
          <Link href="/" className={styles.link}>
            HOME
          </Link>
          <Link href="/about" className={styles.link}>
            ABOUT
          </Link>
          {/* <button
            className={styles.servicesButton}
            onClick={() => setIsServicesOpen(true)}
            aria-label="Services option"
          >
            SERVICES <ChevronRight className={styles.chevron} />
          </button> */}
          <Link href="/services" className={styles.link}>
            SERVICES
          </Link>
          <Link href="/contact" className={styles.link}>
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
