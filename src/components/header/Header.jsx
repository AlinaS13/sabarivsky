import logo from "../../assets/logo.svg";
import style from "./Header.module.scss";
// import CrossSVG from "../../assets/svg/header/cross";
import BurgerSVG from "../../assets/svg/header/Burger";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  return (
    <header className={style.headerContainer}>
      <img className={style.logo} src={logo} />

      <Dropdown
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
      />
      <button
        type="button"
        className={style.burgerMenuBtn}
        onClick={() => setIsMenuActive(true)}
      >
        <BurgerSVG />
      </button>
      <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />

      <ul className={style.headerContact}>
        <li>
          <a href="tel:+38 098 749 70 66" className={style.headerTel}>
            +38 098 749 70 66
          </a>
        </li>
        <li>
          <a href="tel:+38 096 556 50 00" className={style.headerTel}>
            +38 096 556 50 00
          </a>
        </li>
      </ul>
    </header>
  );
};
