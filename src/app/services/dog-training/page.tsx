import NavBar from "@/components/Header";
import Badges from "@/components/shared/Badges";
import Highlight from "@/components/shared/Highlight";
import ContactForm from "@/components/shared/ContactForm";
import Divider from "@/components/shared/Divider";
import styles from "./DogTraining.module.css";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Puppy Training Classes</h1>

        <h3>
          Here at Pup Scouts we offer a fantastic puppy training program,
          designed for puppies up to the age of 12 months old.
        </h3>

        <Badges badges={["lead-work", "recall", "master-of-tricks"]} />

        <div className={styles.block}>
          <div className={styles.textContent}>
            <p>
              <span>
                Our comprehensive six session course includes both in-home and
                outdoor sessions.
              </span>{" "}
              Focusing on essential skills such as basic commands, toilet
              training, recall, separation, lead work, and boundary setting.
            </p>
            <p>
              <span>Additional lead work and recall classes are available</span>{" "}
              for puppies that have graduated from the programme.
            </p>
          </div>
        </div>

        <Badges badges={["week-1", "week-2", "week-3", "week-4", "week-5"]} />

        <div className={styles.block}>
          <div className={styles.textContent}>
            <p>
              <span>
                Our training methods are rooted in positive reinforcement and
                reward-based techniques.
              </span>{" "}
              We believe in guiding new puppy owners on how to best understand,
              enjoy, and live harmoniously with their new furry family members.
            </p>
            <p>
              <span>Throughout the programme, your puppy will earn badges</span>{" "}
              as a fun way to acknowledge their progress and good work.
            </p>
          </div>
        </div>

        <div className={styles.callToAction}>
          <h3>
            Six session programme with additional recall and lead training add
            on packages available.
          </h3>
        </div>

        <Highlight>
          <p>Six session programme - £190</p>
          <p>Additional add on per course - £50*</p>
          <p>
            *Subject to session quantity. Please contact us for more
            information.
          </p>
        </Highlight>
      </div>
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  );
};

export default Services;
