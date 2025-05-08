import React from "react";
import Image from "next/image";
import styles from "./Badges.module.css";
import Divider from "./Divider";

type BadgesProps = {
  badges: string[];
  hasDivider?: boolean;
};

const Badges: React.FC<BadgesProps> = ({ badges, hasDivider = false }) => {
  return (
    <>
      {hasDivider && <Divider />}
      <div
        className={`${styles.badges} ${
          !hasDivider ? styles.badgesWithPadding : ""
        }`}
      >
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
      {hasDivider && <Divider />}
    </>
  );
};

export default Badges;
