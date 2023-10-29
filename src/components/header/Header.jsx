import logo from "../../assets/img/logo/logo-desk-2-x.png";
import style from "./Header.module.scss";

import BurgerSVG from "../../assets/svg/header/Burger";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import { FaMapLocationDot } from "react-icons/fa6";
import LocationSVG from "../../assets/svg/Location";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  return (
    <header className={style.headerContainer}>
      <img className={style.logo} src={logo} />
      <div className={style.headerContainerBox}>
        <Dropdown
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        />
        <div className={style.headerMobileContact}>
          <a href="tel:+38 098 749 70 66" className={style.headerMobileTel}>
            +38 098 749 70 66
          </a>

          <a href="tel:+38 096 556 50 00" className={style.headerMobileTel}>
            +38 096 556 50 00
          </a>
        </div>
        <a
          className={style.location}
          href="https://maps.app.goo.gl/3oj5fnEfjQmqMSfY8"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaMapLocationDot color="#DFFF00" className={style.svgLocation} />
          {/* <LocationSVG /> */}
        </a>
        <button
          type="button"
          className={style.burgerMenuBtn}
          onClick={() => setIsMenuActive(true)}
        >
          <BurgerSVG />
        </button>
        <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
      </div>

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
        <li>
          <FaMapLocationDot color="#DFFF00" className={style.svgLocationTab} />
        </li>
      </ul>
    </header>
  );
};
