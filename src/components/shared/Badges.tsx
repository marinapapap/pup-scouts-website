import React from "react";
import Image from "next/image";
import styles from "./Badges.module.css";
import Divider from "./Divider";

type BadgesProps = {
  badges: string[];
  hasDivider?: boolean;
};

const Badges: React.FC<BadgesProps> = ({ badges, hasDivider = false }) => {
  const className = (() => {
    const classes = [styles.badges];
    if (!hasDivider) classes.push(styles.badgesWithPadding);
    if (badges.length >= 5 && badges.length <= 6)
      classes.push(styles.doubleRow);
    return classes.join(" ");
  })();

  return (
    <>
      {hasDivider && <Divider />}
      <div className={className}>
        {badges.map((badge, index) => {
          const pathToBadge = `/images/badges/${badge}.webp`;
          const altText = `${badge.split("-").join(" ")} badge`;

          return (
            <Image
              key={index}
              src={pathToBadge}
              alt={altText}
              width={180}
              height={180}
              sizes="(max-width: 768px) 120px, 180px"
              loading="lazy"
            />
          );
        })}
      </div>
      {hasDivider && <Divider />}
    </>
  );
};

export default Badges;
