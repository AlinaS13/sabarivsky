import style from "./Footer.module.scss";
import logo from "../../assets/img/logo/logo-desk-2-x.png";
import YouTubeSVG from "../../assets/svg/footer/YouTube";
import InstagramSvg from "../../assets/svg/footer/Instagram";
import FaceBookSvg from "../../assets/svg/footer/Facebook";

export const Footer = () => {
  return (
    <footer className={style.footerContainer} id="contacts">
      <img className={style.logo} src={logo} />
      <div className={style.contentContainer}>
        <div>
          <div>
            <ul className={style.navList}>
              <li>
                <a href="#about">Про нас</a>
              </li>
              <li>
                <a href="#services">Послуги СТО </a>
              </li>
              <li>
                <a href="#gallery">Виконані роботи</a>
              </li>
              <li>
                <a href="#advantages">Наші переваги</a>
              </li>
              <li>
                <a href="#certificates">Сертифікати та досягнення</a>
              </li>
              <li>
                <a href="#partners">Наші партнери</a>
              </li>
              <li>
                <a href="#review">Відгуки клієнтів</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.adressContainer}>
          <div>
            <p className={style.adressTitle}>Адреса:</p>
            <div className={style.adressData}>
              <p className={style.adress}>Вінниця, пров.Вишневий 5А</p>
              <a
                className={style.location}
                href="https://maps.app.goo.gl/3oj5fnEfjQmqMSfY8"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Дивитись на мапі
              </a>
            </div>
          </div>
          <div>
            <p className={style.adressTitle}>Контакти:</p>
            <ul className={style.footerContact}>
              <li>
                <a className={style.contact} href="tel:+38 098 749 70 66">
                  +38 098 749 70 66
                </a>
              </li>
              <li>
                <a href="tel:+38 096 556 50 00" className={style.contact}>
                  +38 096 556 50 00
                </a>
              </li>
            </ul>
            <div className={style.socialWrp}>
              <a
                href="https://instagram.com/sabariv.avto.service?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <InstagramSvg className={style.socialIcon} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066562909784"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaceBookSvg className={style.socialIcon} />
              </a>
              <a
                href="https://www.youtube.com/@STERNENKO"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <YouTubeSVG className={style.sociallIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
