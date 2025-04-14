import React from "react";
import styles from "./Badges.module.css";
import Image from "next/image";

type BadgesProps = {
  badges: string[];
};

const Badges: React.FC<BadgesProps> = ({ badges }) => {
  return (
    <div className={styles.badgesContainer}>
      {badges.map((badge, index) => {
        const pathToBadge = `/badges/${badge}.png`;
        const altText = `${badge.split("-").join(" ")} badge`;

        return (
          <Image
            key={index}
            src={pathToBadge}
            alt={altText}
            width={180}
            height={180}
          />
        );
      })}
    </div>
  );
};

export default Badges;
