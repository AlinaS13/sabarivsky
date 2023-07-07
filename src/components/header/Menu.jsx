import { NavLink } from "react-router-dom";
import CrossSVG from "../../assets/svg/header/Cross";
import style from "./Menu.module.scss";

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  return (
    <div
      className={`${style.backdrop} ${isMenuActive ? style.active : ""} ${
        style.containerTTTTTTT
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
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/categories/Beef"
              >
                Про нас
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/add"
              >
                Послуги СТО під ключ
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/my"
              >
                Виконані роботи
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/favorite"
              >
                Наші переваги
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/shopping-list"
              >
                Сертифікати та досягнення
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/shopping-list"
              >
                Наші партнери
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/shopping-list"
              >
                Відгуки клієнтів
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
