import Image from "next/image";
import NavBar from "@/components/Header";
import styles from "./About.module.css";
import Divider from "@/components/shared/Divider";
import ContactForm from "@/components/shared/ContactForm";

const AboutPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>About Us</h1>
          <div className={styles.teamImages}>
            <Image
              src="/images/polly.webp"
              alt="Polly - Scout Leader"
              width={200}
              height={200}
              className={styles.teamImage}
            />
            <Image
              src="/images/lucy.webp"
              alt="Lucy - Scout Leader"
              width={200}
              height={200}
              className={styles.teamImage}
            />
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2>Our Story</h2>
            <p>
              Pup Scouts was established in 2016 by Lucy and Polly. Having
              worked together previously, we knew we wanted to spend more time
              outside and with our dogs - and from that, Pup Scouts was born!
            </p>
          </div>
          <div className={styles.decorativeIcon}>
            <Image
              src="/images/squirrel.webp"
              alt="Decorative squirrel"
              width={160}
              height={160}
            />
          </div>
        </section>

        <section className={styles.contentSectionRight}>
          <div className={styles.decorativeIcon}>
            <Image
              src="/images/stick.webp"
              alt="Decorative stick"
              width={160}
              height={160}
            />
          </div>
          <div className={styles.textContent}>
            <h2>What We Do</h2>
            <p>
              We took on the role of Scout Leaders and spend our days with our
              dog friends in the great outdoors. Not only do we get to have a
              wonderful time in nature, but we are lucky enough to train our
              adorable Scout puppies. We help them learn everything they need to
              know to go out on their first explorations of the big wide world!
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2>Our Experience</h2>
            <p>
              With over eight years experience working with dogs, as Scout
              Leaders we take our jobs very seriously. We treat our Scouts with
              the love, kindness and respect that all dogs deserve. We are
              grateful to all our pawrents who trust us to walk and train their
              pups, and we can&apos;t wait to start your dog&apos;s new Scout
              adventure with us!
            </p>
          </div>
          <div className={styles.decorativeIcon}>
            <Image
              src="/images/tree.webp"
              alt="Decorative tree"
              width={160}
              height={160}
            />
          </div>
        </section>
      </main>
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  );
};

export default AboutPage;
