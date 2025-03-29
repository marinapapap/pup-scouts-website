"use client";

import styles from "./BurgerButton.module.css";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ isOpen, onClick }: Props) => (
  <button
    className={`${styles.button} ${isOpen ? styles.open : ""}`}
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <div className={`${styles.line} ${styles.line1}`} />
    <div className={`${styles.line} ${styles.line2}`} />
    <div className={`${styles.line} ${styles.line3}`} />
  </button>
);

export default BurgerButton;
