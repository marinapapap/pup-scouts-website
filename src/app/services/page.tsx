import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Header";
import Badges from "@/components/shared/Badges";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Our Services</h1>
        <div className={styles.description}>
          <p>
            We offer group dog walking and puppy training classes. Please click
            below to find out more information!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Link href="/services/dog-walking" className={styles.imageWrapper}>
            <Image
              src="/images/tree.png"
              alt="Dog walking"
              width={600}
              height={600}
            />
            <h2>
              Dog
              <br /> Walking
            </h2>
          </Link>
          <Link href="/services/dog-training" className={styles.imageWrapper}>
            <Image
              src="/images/dog.png"
              alt="Dog training"
              width={600}
              height={600}
            />
            <h2>Puppy Training</h2>
          </Link>
        </div>
      </div>
      <Badges
        badges={[
          "jumping-jack",
          "master-of-tricks",
          "chase-master",
          "luscious-locks",
        ]}
        hasDivider
      />
    </div>
  );
};

export default Services;
