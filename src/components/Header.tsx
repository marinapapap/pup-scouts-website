"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BurgerButton from "./BurgerButton";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    if (!isMobile) return;
    const handleScroll = () => {
      const scroll = Math.min(window.scrollY, 80);
      setScrollValue(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const headerHeight = isMobile ? `${8 - scrollValue / 60}rem` : "8rem";
  const logoSize = isMobile ? `${7 - scrollValue / 70}rem` : "7rem";
  const logoMargin = isMobile ? `${2 - scrollValue / 100}rem` : "2rem";

  return (
    <>
      <nav className={styles.nav} style={{ height: headerHeight }}>
        <div className={styles.navContainer}>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.link} ${styles.hoverEffect}`}
            >
              About
            </Link>
            <Link href="/" className={styles.logoContainer}>
              <Image
                src="/images/logo.png"
                alt="Pup Scouts Home"
                width={120}
                height={120}
                className={styles.logo}
                style={{
                  width: logoSize,
                  height: logoSize,
                  margin: logoMargin,
                }}
              />
            </Link>
            {/* <div className={styles.dropdownContainer}>
              <button className={styles.dropdownButton}>Services</button>
              <div className={styles.dropdownMenu}>
                <Link href="/service-1" className={styles.dropdownItem}>
                  Walking
                </Link>
                <Link href="/service-2" className={styles.dropdownItem}>
                  Training
                </Link>
              </div>
            </div> */}
            <Link
              href="/services"
              className={`${styles.link} ${styles.hoverEffect}`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`${styles.link} ${styles.hoverEffect}`}
            >
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
