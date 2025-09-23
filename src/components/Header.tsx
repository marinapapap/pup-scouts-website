"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BurgerButton from "./BurgerButton";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href === "/services" && pathname.startsWith("/services"));
    return isActive ? `${styles.link} ${styles.hoverEffect} ${styles.activeLink}` : `${styles.link} ${styles.hoverEffect}`;
  };

  const getDropdownItemClassName = (href: string) => {
    const isActive = pathname === href;
    return isActive ? `${styles.dropdownItem} ${styles.activeDropdownItem}` : styles.dropdownItem;
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      // Close mobile menu if switching to desktop
      if (!newIsMobile && isOpen) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isOpen]);

  useEffect(() => {
    if (!isMobile || isOpen) return;
    const handleScroll = (() => {
      const scroll = Math.min(window.scrollY, 80);
      setScrollValue(scroll);

      return () => {
        const scroll = Math.min(window.scrollY, 80);
        setScrollValue(scroll);
      };
    })();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, isOpen]);

  const headerHeight = isMobile ? `${8 - scrollValue / 60}rem` : "8rem";
  const logoSize = isMobile && !isOpen ? `${7 - scrollValue / 70}rem` : "7rem";
  const logoMargin = isMobile && !isOpen ? `${2 - scrollValue / 100}rem` : "2rem";

  return (
    <>
      <nav className={styles.nav} style={{ height: headerHeight }}>
        <div className={styles.navContainer}>
          <div className={styles.navLinks}>
            <Link href="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClassName("/about")}>
              About
            </Link>
            <Link href="/" className={styles.logoContainer}>
              <Image
                src="/images/logo.png"
                alt="Pup Scouts Home"
                width={120}
                height={120}
                className={`${styles.logo} ${isOpen ? styles.logoMenuOpen : ''}`}
                style={{
                  width: logoSize,
                  height: logoSize,
                  margin: logoMargin,
                }}
              />
            </Link>
            <div className={styles.dropdownContainer}>
              <Link href="/services" className={getLinkClassName("/services")}>
                Services
              </Link>
              <div className={styles.dropdownMenu}>
                <Link href="/services/dog-walking" className={getDropdownItemClassName("/services/dog-walking")}>
                  Dog Walking
                </Link>
                <Link href="/services/dog-training" className={getDropdownItemClassName("/services/dog-training")}>
                  Puppy Training
                </Link>
              </div>
            </div>
            <Link href="/contact" className={getLinkClassName("/contact")}>
              Contact
            </Link>
          </div>
          <div className={styles.burgerMenu}>
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} />
    </>
  );
};

export default Header;
