import style from "./Advantages.module.scss";
import acc from "../../assets/svg/acc.svg";
import wheel from "../../assets/svg/wheel.svg";
import inst from "../../assets/svg/inst.svg";
import speed from "../../assets/svg/speed.svg";
import tire from "../../assets/svg/tire.svg";
import gears from "../../assets/svg/two-gears.svg";
import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";

export const Advantages = () => {
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
    <Parallax
      bgImage={bgImage}
      strength={400}
      bgImageStyle={{
        width: "100%",
        height: bgImageHeight,
        opacity: ".5",
      }}
    >
      <section className={style.advantagesContainer} id="advantages">
        <p className={style.advantagesPreTitle}>чому ми/</p>
        <h2 className={style.advantagesTitle}>Наші переваги</h2>
        <div className={style.advantagesListWrp}>
          <ul className={style.advantagesList}>
            <li className={style.advantagesItem}>
              <img className={style.advantagesItemImg} src={acc}></img>
              <div>
                <p className={style.advantagesText}>досвід та професіоналізм</p>
                <p className={style.advantagesDescription}>
                  Наша команда має багаторічний досвід у сфері обслуговування
                  автомобілів і здатна вирішити будь-яку проблему з вашим авто
                </p>
              </div>
            </li>
            <li className={style.advantagesItem}>
              <img className={style.advantagesItemImg} src={tire}></img>
              <div>
                <p className={style.advantagesText}>широкий спектр послуг</p>
                <p className={style.advantagesDescription}>
                  Повний спектр послуг з технічного обслуговування, ремонту
                  автомобілів, діагностика, заміна запчастин та інше
                </p>
              </div>
            </li>
            <li className={style.advantagesItem}>
              <img className={style.advantagesItemImg} src={gears}></img>
              <div>
                <p className={style.advantagesText}>сучасне обладнання</p>
                <p className={style.advantagesDescription}>
                  Ми використовуємо сучасне та високоякісне обладнання, що
                  дозволяє проводити ремонтні роботи швидко та якісно
                </p>
              </div>
            </li>
            <li className={style.advantagesItem}>
              <img className={style.advantagesItemImg} src={wheel}></img>
              <div>
                <p className={style.advantagesText}>Індивідуальний підхід</p>
                <p className={style.advantagesDescription}>
                  Пропонуємо індивідуальні рішення, що відповідають потребам
                  клієнта з урахуванням особливостей конкретного авто
                </p>
              </div>
            </li>
            <li className={style.advantagesItem}>
              <img className={style.advantagesItemImg} src={inst}></img>
              <div>
                <p className={style.advantagesText}>гарантія на роботу</p>
                <p className={style.advantagesDescription}>
                  Ми надаємо гарантію на всі виконані роботи, що дозволяє нашим
                  клієнтам бути впевненими у якості нашої роботи
                </p>
              </div>
            </li>
            <li className={style.advantagesItem}>
              <img className={style.advantagesItemImg} src={speed}></img>
              <div>
                <p className={style.advantagesText}>швидко та ефективно</p>
                <p className={style.advantagesDescription}>
                  Ми розуміємо, що час для клієнта є важливим, тому ставимо
                  пріоритет на ефективність та швидкість обслуговування авто
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Parallax>
  );
};
