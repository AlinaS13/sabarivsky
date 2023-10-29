import CrossSVG from "../../assets/svg/header/Cross";
import style from "./Menu.module.scss";

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  return (
    <div
      className={`${style.backdrop} ${isMenuActive ? style.active : ""} ${
        style.contain
      }`}
    >
      <div className={style.navWrapper}>
        <div className={style.crossWrapper}>
          <button
            className={style.cross}
            type="button"
            onClick={() => setIsMenuActive(false)}
          >
            <CrossSVG />
          </button>
        </div>
        <nav>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#about"
              >
                Про нас
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#services"
              >
                Послуги СТО під ключ
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#gallery"
              >
                Виконані роботи
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#advantages"
              >
                Наші переваги
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#certificates"
              >
                Сертифікати та досягнення
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#partners"
              >
                Наші партнери
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#review"
              >
                Відгуки клієнтів
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#contacts"
              >
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
