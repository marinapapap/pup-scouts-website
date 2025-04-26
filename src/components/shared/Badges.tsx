import React from "react";
import Image from "next/image";
import styles from "./Badges.module.css";
import Divider from "./Divider";

type BadgesProps = {
  badges: string[];
};

const Badges: React.FC<BadgesProps> = ({ badges }) => {
  return (
    <>
      <Divider />
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
      <Divider />
    </>
  );
};

export default Badges;
