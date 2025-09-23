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
          <h3>
            We offer group dog walking and puppy training classes. Please click
            below to find out more information!
          </h3>
        </div>
        <div className={styles.imageContainer}>
          <Link
            href="/services/dog-walking"
            className={styles.imageWrapper}
            aria-label="Learn more about our dog walking services"
          >
            <h2>Dog Walking</h2>
            <Image
              src="/images/tree.png"
              alt="Illustration of a tree representing outdoor dog walking services"
              width={600}
              height={600}
              priority
            />
          </Link>
          <Link
            href="/services/dog-training"
            className={styles.imageWrapper}
            aria-label="Learn more about our puppy training classes"
          >
            <h2>Puppy Training</h2>
            <Image
              src="/images/dog.png"
              alt="Illustration of a dog representing puppy training services"
              width={600}
              height={600}
              priority
            />
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
