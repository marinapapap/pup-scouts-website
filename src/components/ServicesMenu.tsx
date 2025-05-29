import Link from "next/link";
import styles from "./ServicesMenu.module.css";
import { ChevronLeft } from "lucide-react";

type Props = {
  onClose: () => void;
};

const ServicesMenu = ({ onClose }: Props) => {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.backButton}>
          <ChevronLeft className={styles.chevron} /> BACK
        </button>
        <div className={styles.linkContainer}>
          <Link href="/service-1" className={styles.link}>
            WALKING
          </Link>
          <Link href="/service-2" className={styles.link}>
            TRAINING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
