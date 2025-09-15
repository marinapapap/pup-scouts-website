import Image from "next/image";
import Carousell from "@/components/Carousell";
import NavBar from "@/components/Header";
import styles from "./Home.module.css";
import Badges from "@/components/shared/Badges";
import ContactForm from "@/components/shared/ContactForm";
import Divider from "@/components/shared/Divider";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Welcome to Pup Scouts</h1>

        <h3>
          We are a professional dog walking and training company located in
          Sussex
        </h3>

        <div className={styles.block}>
          <div className={styles.carousellWrapper}>
            <Carousell />
          </div>

          <div className={styles.textContent}>
            <p>
              <span>
                Pup Scouts offer fantastic group walks across the South Downs
                and surrounding areas{" "}
              </span>
              providing a safe and friendly environment for dogs to socialise,
              exercise and explore. We cover the areas between Hove and
              Worthing, transporting our dogs in comfortable, safe and fully
              fitted vans.
            </p>

            <p>
              <span>With over eight years experience working with dogs</span>,
              as Scout Leaders we take our jobs very seriously. We treat our
              Scouts with the love, kindness and respect that all dogs deserve.
              We are grateful to all our pawrents who trust us to walk and train
              their pups, and we can&apos;t wait to start your dog&apos;s new
              Scout adventure with us!
            </p>
          </div>
        </div>

        <Badges
          badges={[
            "jumping-jack",
            "master-of-tricks",
            "chase-master",
            "luscious-locks",
          ]}
        />

        <div className={`${styles.block} ${styles.blockReverse}`}>
          <div className={styles.carousellWrapper}>
            <Carousell />
          </div>

          <div className={styles.textContent}>
            <p>
              <span>
                From the &apos;Good Listener badge&apos; to the &apos;Tree
                Climber badge&apos;, there&apos;s an award for every Scout to
                earn.{" "}
              </span>
              We treat our Scouts with the love, kindness and respect that all
              dogs deserve. We are grateful to all our pawrents who trust us to
              walk and train their pups, and we can&apos;t wait to start your
              dog&apos;s new Scout adventure with us!
            </p>

            <p>
              <span>
                Within our training program, our puppies also earn weekly
                badges{" "}
              </span>
              as they move through each step of their learning. All badges are
              recorded on our Scout Report Cards that owners can view on our
              website and social media.
            </p>
          </div>
        </div>
        <div className={styles.callToAction}>
          <h3>
            <Link className={styles.link} href="/contact">
              Contact us
            </Link>{" "}
            to have a chat and arrange a free consultation
          </h3>

          <p>
            Why not check out our Instagram to see which badges our Scouts have
            been awarded so far?
          </p>

          <p>
            If you&apos;re interested in learning more about our services,
            please don&apos;t hesitate to reach out. We&apos;d love to hear from
            you!
          </p>

          <h3>You can start your Pup Scouts adventure today!</h3>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/paws-horizontal.png"
            alt="Pup Scouts Logo"
            fill
            className={`${styles.image}`}
          />
        </div>
      </div>
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  );
};

export default Home;
