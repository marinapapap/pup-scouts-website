import React from "react";
import Image from "next/image";
import styles from "./Blurb.module.css"; // Import the CSS module

const Blurb: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/woodland.webp"
        alt="Dog walking"
        fill
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>WELCOME</h2>
          <h1 className={styles.subheading}>Pup Scouts UK</h1>
          <p className={styles.paragraph}>
            Your trusted dog walking and training service, based in East Sussex.
            We ensure your furry friends get the exercise and care they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blurb;
