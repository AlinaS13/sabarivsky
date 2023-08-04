import style from "./Location.module.scss";
import { Map } from "./map/Map";

export const Location = () => {
  return (
    <section className={style.locationContainer}>
      <p className={style.locationtest}>Location</p>
      <Map />
    </section>
  );
};
