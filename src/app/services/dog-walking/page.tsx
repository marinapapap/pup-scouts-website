import NavBar from "@/components/Header";
import Badges from "@/components/shared/Badges";
import Highlight from "@/components/shared/Highlight";
import styles from "./DogWalking.module.css";
import ContactForm from "@/components/shared/ContactForm";
import Divider from "@/components/shared/Divider";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Group Dog Walks</h1>

        <h3>
          Group dog walking is a brilliant way to give your dog some fun, social
          exercise with their fellow Scouts.
        </h3>

        <div className={styles.block}>
          <div className={styles.textContent}>
            <p>
              <span>
                Morning and lunchtime walks available Monday to Friday.
              </span>{" "}
              Scout Leader Lucy covers Southwick to Worthing, and Scout Leader
              Polly covers Hove.
            </p>
            <p>
              <span>
                Our group walks are controlled and supervised, promoting
                socialisation and confidence building.
              </span>{" "}
              We explore the beautiful South Downs and its woodlands, providing
              a diverse and stimulating environment for the dogs.
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

        <div className={styles.block}>
          <div className={styles.textContent}>
            <p>
              <span>Over eight years of experience</span> with dogs means our
              Pup Scout Leaders ensure the safety and well-being of all dogs in
              our care. Your dog will return home happy and tired after a day of
              fun and adventure.
            </p>
            <p>
              <span>Convenient home pick-up and drop-off services</span>,
              transporting the dogs in safe and well-equipped vans with cages.
              We have fans fitted for the summer and have plenty of blankets and
              towels for the winter.
            </p>
          </div>
        </div>

        <div className={styles.callToAction}>
          <h3>
            Our Scout Leaders are fully insured and canine first aid trained,
            including additional brachycephalic first aid training.
          </h3>
          <p>Please see below for our prices and discounts.</p>
        </div>

        <Highlight>
          <p>Group walk - £14.00</p> <p>Two walks a day - £26.00</p>{" "}
          <p>Two dogs same household - £26.00</p>
        </Highlight>
      </div>
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  );
};

export default Services;
