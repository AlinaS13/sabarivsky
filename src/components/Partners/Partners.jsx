import style from "./Partners.module.scss";
import logo1 from "../../assets/svg/partners/logo-1.svg";
import logo2 from "../../assets/svg/partners/logo-2.svg";
import logo3 from "../../assets/svg/partners/logo-3.svg";
import logo4 from "../../assets/svg/partners/logo-4.svg";
import logo5 from "../../assets/svg/partners/logo-5.svg";

import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";

export const Partners = () => {
  const [bgImage, setBgImage] = useState("/src/assets/img/bg-car-4.png");
  const [bgImageHeight, setBgImageHeight] = useState("100%");
  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setBgImage("/src/assets/img/bg-mob.png");
      setBgImageHeight("auto");
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setBgImage("/src/assets/img/bg-car-2.png");
      setBgImageHeight("auto");
    } else {
      setBgImage("/src/assets/img/bg-car-4.png");
      setBgImageHeight("auto");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Parallax
      bgImage={bgImage}
      strength={400}
      bgImageStyle={{
        width: "100%",
        height: bgImageHeight,
        opacity: ".5",
      }}
    >
      <section className={style.partnersContainer} id="partners">
        <p className={style.partnersPreTitle}>Співпраця/</p>
        <h2 className={style.partnersTitle}>Наші партнери</h2>
        <div className={style.partnersListWrp}>
          <ul className={style.partnersList}>
            <li className={style.partnersItem}>
              <img className={style.partnersItemImg} src={logo1}></img>
            </li>
            <li className={style.partnersItem}>
              <img className={style.partnersItemImg} src={logo2}></img>
            </li>
            <li className={style.partnersItem}>
              <img className={style.partnersItemImg} src={logo3}></img>
            </li>
            <li className={style.partnersItem}>
              <img className={style.partnersItemImg} src={logo4}></img>
            </li>
            <li className={style.partnersItem}>
              <img className={style.partnersItemImg} src={logo5}></img>
            </li>
          </ul>
        </div>
      </section>
    </Parallax>
  );
};
