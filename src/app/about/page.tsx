import Image from "next/image";
import NavBar from "@/components/Header";
import styles from "./About.module.css";
import Divider from "@/components/shared/Divider";
import ContactForm from "@/components/shared/ContactForm";

const Services: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <h1>About Us</h1>
        <div className={styles.imageContainer}>
          <Image src="/polly.png" alt="Dog training" width={200} height={200} />
          <Image src="/lucy.png" alt="Dog training" width={200} height={200} />
        </div>
        <div className={styles.description}>
          <p>
            Pup Scouts was established in 2016 by Lucy and Polly. Having worked
            together previously, we knew we wanted to spend more time outside
            and with our dogs - and from that, Pup Scouts was born!
          </p>

          <p>
            We took on the role of Scout Leaders and spend our days with our dog
            friends in the great outdoors. Not only do we get to have a
            wonderful time in nature, but we are lucky enough to train our
            adorable Scout puppies. We help them learn everything they need to
            know to go out on their first explorations of the big wide world!
          </p>

          <p>
            With over eight years experience working with dogs, as Scout Leaders
            we take our jobs very seriously. We treat our Scouts with the love,
            kindness and respect that all dogs deserve. We are grateful to all
            our pawrents who trust us to walk and train their pups, and we can’t
            wait to start your dog’s new Scout adventure with us!
          </p>
        </div>
      </div>
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  );
};

export default Services;
