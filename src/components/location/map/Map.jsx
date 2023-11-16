import React from "react";
import styles from "./Map.module.scss";

export const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.5093228844435!2d28.43558447648471!3d49.209867171381894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b30bcfb94bf%3A0x1687fc85abe6dd76!2z0KDQuNGF0YLQvtCy0L7Rh9C90LjQuSDQvNCw0LvRj9GA0L3QuNC5INGG0LXRhSDQodCw0LHQsNGA0ZbQstGB0YzQutC40Lk!5e0!3m2!1sru!2sua!4v1697646539897!5m2!1sru!2sua"
        className={styles.mapIframe}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};
