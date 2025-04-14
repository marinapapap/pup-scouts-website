import Image from "next/image";
import NavBar from "@/components/Header";
import Badges from "@/components/services/Badges";
import styles from "./Services.module.css";
import Divider from "@/components/shared/Divider";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>Our Services</h1>
          <p>
            We offer group dog walking and puppy training classes. Please click
            below to find out more information!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/tree.png"
              alt="Dog walking"
              width={600}
              height={600}
              className={styles.image}
            />
            <h1>Dog Walking</h1>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/dog.png"
              alt="Dog training"
              width={600}
              height={600}
              className={styles.image}
            />
            <h1>Puppy Training</h1>
          </div>
        </div>
      </div>
      <Divider />
      <Badges
        badges={[
          "jumping-jack",
          "master-of-tricks",
          "chase-master",
          "luscious-locks",
        ]}
      />
      <Divider />
    </div>
  );
};

export default Services;
