import Image from "next/image";
import NavBar from "@/components/Header";
import styles from "./services.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/walking.png"
            alt="Dog walking"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/training.png"
            alt="Dog training"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
