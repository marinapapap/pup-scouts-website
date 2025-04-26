import NavBar from "@/components/Header";
import Badges from "@/components/shared/Badges";
import styles from "./DogWalking.module.css";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Group Dog Walks</h1>

        <p className="font-bold">
          Group dog walking is a brilliant way to give your dog some fun, social
          exercise with their fellow Scouts.
        </p>
        <p>
          We offer morning and lunchtime walks from Monday to Friday. Scout
          Leader Lucy covers Southwick to Worthing, and Scout Leader Polly
          covers Hove.
        </p>
        <p>
          We explore the beautiful South Downs and it&apos;s woodlands,
          providing a diverse and stimulating environment for the dogs. Our
          group walks are controlled and supervised, promoting socialisation and
          confidence building. Pup Scout Leaders have over eight years of
          experience and ensure the safety and well-being of all dogs in our
          care. Your dog will return home happy and tired after a day of fun and
          adventure.
        </p>
        <p>
          We offer convenient home pick-up and drop-off services, transporting
          the dogs in safe and well-equipped vans with cages. We have fans
          fitted for the summer and have plenty of blankets and towels for the
          winter.
        </p>
        <p>
          Our Scout Leaders are fully insured and canine first aid trained,
          including additional brachycephalic first aid training.
        </p>
        <p className="font-bold">
          Please see below for our prices and discounts.
        </p>
      </div>
      <Badges
        badges={[
          "jumping-jack",
          "master-of-tricks",
          "chase-master",
          "luscious-locks",
        ]}
      />
    </div>
  );
};

export default Services;
