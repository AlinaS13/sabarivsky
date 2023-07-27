import style from "./Certificates.module.scss";
import certificate1 from "../../assets/img/certificates/certificate-1-2-x.png";
import certificate2 from "../../assets/img/certificates/certificate-2-2-x.png";
import certificate3 from "../../assets/img/certificates/certificate-3-2-x.png";
import certificate4 from "../../assets/img/certificates/certificate-4-2-x.png";

export const Certificates = () => {
  return (
    <section className={style.certificatesContainer}>
      <p className={style.certificatesPreTitle}>Шлях до успіху/</p>
      <h2 className={style.certificatesTitle}>Сертифікати та досягнення</h2>
      <div className={style.certificatesListWrp}>
        <ul className={style.certificatesList}>
          <li className={style.certificatesItem}>
            <div className={style.certificatesImgmWrp}>
              <img
                className={style.certificatesItemImg}
                src={certificate1}
              ></img>
            </div>
          </li>
          <li className={style.certificatesItem}>
            <div className={style.certificatesImgmWrp}>
              <img
                className={style.certificatesItemImg}
                src={certificate2}
              ></img>
            </div>
          </li>
          <li className={style.certificatesItem}>
            <div className={style.certificatesImgmWrp}>
              <img
                className={style.certificatesItemImg}
                src={certificate3}
              ></img>
            </div>
          </li>
          <li className={style.certificatesItem}>
            <div className={style.certificatesImgmWrp}>
              <img
                className={style.certificatesItemImg}
                src={certificate4}
              ></img>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
