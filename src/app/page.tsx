import Carousell from "@/components/Carousell";
import NavBar from "@/components/Header";
import styles from "./Home.module.css";
import Badges from "@/components/shared/Badges";
import ContactForm from "@/components/shared/ContactForm";
import Divider from "@/components/shared/Divider";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>Welcome to Pup Scouts</h1>

        <div className={styles.description}>
          <p className="font-bold">
            We are a professional dog walking and training company located in
            Sussex
          </p>

          <p>
            Pup Scouts offer fantastic group walks across the South Downs and
            surrounding areas, providing a safe and friendly environment for
            dogs to socialise, exercise and explore. We cover the areas between
            Hove and Worthing, transporting our dogs in comfortable, safe and
            fully fitted vans.
          </p>

          <p>
            With over eight years experience working with dogs, as Scout Leaders
            we take our jobs very seriously. We treat our Scouts with the love,
            kindness and respect that all dogs deserve. We are grateful to all
            our pawrents who trust us to walk and train their pups, and we can’t
            wait to start your dog’s new Scout adventure with us!
          </p>

          <p>
            When your dog joins us through either walking or training, they
            become a Pup Scout and have the opportunity to earn Scout badges
            through good behaviour, exploration and socialising!
          </p>

          <p className="font-bold">
            Contact us to have a chat and arrange a free consultation
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
        <div className={styles.description}>
          <p>
            From the &apos;Good Listener badge&apos; to the &apos;Tree Climber
            badge&apos;, there&apos;s an award for every Scout to earn.
          </p>

          <p>
            Within our training program, our puppies also earn weekly badges as
            they move through each step of their learning. All badges are
            recorded on our Scout Report Cards that owners can view on our
            website and social media.
          </p>

          <p>
            Why not check out our Instagram to see which badges our Scouts have
            been awarded so far?
          </p>

          <p>
            If you&apos;re interested in learning more about our services,
            please don&apos;t hesitate to reach out. We&apos;d love to hear from
            you!
          </p>
        </div>
        <h3>Start your Pup Scouts adventure today!</h3>
        <Carousell />
      </div>
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  );
};

export default Home;
