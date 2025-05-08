import NavBar from "@/components/Header";
import Badges from "@/components/shared/Badges";
import Highlight from "@/components/shared/Highlight";
import styles from "./DogTraining.module.css";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Puppy Training Classes</h1>
        <Badges badges={["lead-work", "recall", "master-of-tricks"]} />
        <p>
          Here at Pup Scouts we offer a fantastic puppy training program,
          designed for puppies up to the age of 12 months old. Our comprehensive
          six session course includes both in-home and outdoor sessions,
          focusing on essential skills such as basic commands, toilet training,
          recall, separation, lead work, and boundary setting.
        </p>

        <p>
          Additional lead work and recall classes are available for puppies that
          have graduated from the programme.
        </p>

        <p>
          Our training methods are rooted in positive reinforcement and
          reward-based techniques. We believe in guiding new puppy owners on how
          to best understand, enjoy, and live harmoniously with their new furry
          family members.
        </p>

        <p>
          Throughout the programme, your puppy will have the opportunity to earn
          badges as a fun way to acknowledge their progress and good work.
        </p>

        <p className="font-bold">
          Throughout the programme, your puppy will have the opportunity to earn
          badges as a fun way to acknowledge their progress and good work.
        </p>
      </div>
      <Badges badges={["week-1", "week-2", "week-3", "week-4", "week-5"]} />
      <Highlight>
        <p className="font-bold">
          Six session programme with additional recall and lead training add on
          ﻿packages available .
        </p>

        <p className="font-bold">
          Six session programme - £190 Additional add on per course - £50*
        </p>

        <p>
          *Subject to session quantity. Please contact us for more information.
        </p>
      </Highlight>
    </div>
  );
};

export default Services;
