import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ServicesMenu.module.css";
import { ChevronLeft } from "lucide-react";

type Props = {
  onClose: () => void;
};

const ServicesMenu = ({ onClose }: Props) => {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
  };

  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.backButton}>
          <ChevronLeft className={styles.chevron} /> BACK
        </button>
        <div className={styles.linkContainer}>
          <Link href="/services/dog-walking" className={getLinkClassName("/services/dog-walking")} aria-disabled={pathname === "/services/dog-walking"}>
            DOG WALKING
          </Link>
          <Link href="/services/dog-training" className={getLinkClassName("/services/dog-training")} aria-disabled={pathname === "/services/dog-training"}>
            PUPPY TRAINING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
