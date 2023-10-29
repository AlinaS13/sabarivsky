import { Parallax } from "react-parallax";
import chek from "../../assets/svg/chek.svg";
import style from "./Services.module.scss";
import { useEffect, useState } from "react";
// import bg from "../../assets/img/bg-car.png";
export const Services = () => {
  const [bgImage, setBgImage] = useState("/src/assets/img/bg-car-4.png");
  const [bgImageHeight, setBgImageHeight] = useState("100%");
  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setBgImage("/src/assets/img/bg-mob.png");
      setBgImageHeight("100%");
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
    <>
      <div className={style.servicesWrp}>
        <Parallax
          bgImage={bgImage}
          strength={400}
          bgImageStyle={{
            width: "100%",
            height: bgImageHeight,
            opacity: ".5",
          }}
        >
          <section className={style.servicesContainer} id="services">
            <p className={style.servicesPreTitle}>що ми пропонуємо/</p>
            <h2 className={style.servicesTitle}>Послуги СТО під ключ</h2>
            <div className={style.servicesListWrp}>
              <ul className={style.servicesList}>
                <li className={style.servicesItem}>
                  <img className={style.chekImg} src={chek}></img>
                  <div className={style.servicesTextWrp}>
                    <p className={style.servicesText}>Малярні роботи</p>
                    <p className={style.servicesDescription}>
                      повне або локальне фарбування авто
                    </p>
                  </div>
                </li>
                <li className={style.servicesItem}>
                  <img className={style.chekImg} src={chek}></img>
                  <div>
                    <p className={style.servicesText}>
                      Технічне обслуговування
                    </p>
                    <p className={style.servicesDescription}>
                      ходової частини рульового управління, гальмівної системи,
                      системи охолодження
                    </p>
                  </div>
                </li>
                <li className={style.servicesItem}>
                  <img className={style.chekImg} src={chek}></img>
                  <div>
                    <p className={style.servicesText}>Детейлінг авто</p>
                    <p className={style.servicesDescription}>
                      повне очищення автомобіля і його частин
                    </p>
                  </div>
                </li>
                <li className={style.servicesItem}>
                  <img className={style.chekImg} src={chek}></img>
                  <div>
                    <p className={style.servicesText}>Заміна технічних рідин</p>
                    <p className={style.servicesDescription}>
                      олива, моторне масло, гальмівна рідина, антифриз,
                      трансмісійне масло
                    </p>
                  </div>
                </li>
                <li className={style.servicesItem}>
                  <img className={style.chekImg} src={chek}></img>
                  <div>
                    <p className={style.servicesText}>
                      Пригон авто із США під ключ
                    </p>
                    <p className={style.servicesDescription}>
                      послуги евакуатора
                    </p>
                  </div>
                </li>
                <li className={style.servicesItem}>
                  <img className={style.chekImg} src={chek}></img>
                  <div>
                    <p className={style.servicesText}>
                      Відновлення геометрії кузова
                    </p>
                    <p className={style.servicesDescription}>
                      огляд, ремонт та діагностика
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </Parallax>
      </div>
    </>
  );
};
