import { ContactUsForm } from "../contactUsForm/ContactUsForm";
import styles from "./Location.module.scss";
import { Map } from "./map/Map";

export const Location = () => {
  return (
    <section className={styles.locationContainer}>
      <Map />
      <div>
        <h2 className={styles.locationTitle}>Є запитання? </h2>
        <p className={styles.locationText}>
          Залиште контакти - ми зв'яжемося з Вами протягом 5 хвилин!
        </p>
        <ContactUsForm />
      </div>
    </section>
  );
};
