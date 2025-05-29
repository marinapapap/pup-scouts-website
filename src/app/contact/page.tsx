import Image from "next/image";
import NavBar from "@/components/Header";
import ContactForm from "@/components/shared/ContactForm";
import Highlight from "@/components/shared/Highlight";
import styles from "./Contact.module.css";
import Divider from "@/components/shared/Divider";

const Contact: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>Contact Us</h1>
          <p>
            Please use the form below to get in contact and book your free dog
            walking consultation, or to enquire about our puppy training
            classes.
          </p>
          <p>
            Follow us on Facebook and Instagram - we love uploading photos and
            videos of your pups on their adventures so you can see the fun
            they&apos;re having!
          </p>
          <p className="font-bold">
            Please do not hesitate to call or email us.
          </p>
        </div>
        <Highlight>
          <div className={styles.highlight}>
            <Image
              src="/squirrel.png"
              alt="Dog training"
              width={180}
              height={180}
            />

            <div>
              <p>
                <span className={`font-bold ${styles.title}`}>Phone</span> 01273
                282787
              </p>
              <p>
                <span className={`font-bold ${styles.title}`}>Email</span>
                info@pupscouts.co.uk
              </p>
              <p>
                <span className={`font-bold ${styles.title}`}>Instagram</span>
                @pupscoutsuk
              </p>
              <p>
                <span className={`font-bold ${styles.title}`}>Facebook</span>
                @pupscoutsuk
              </p>
            </div>
          </div>
        </Highlight>
      </div>
      <Divider />
      <ContactForm />
    </div>
  );
};

export default Contact;
