import chek from "../../assets/svg/chek.svg";
import style from "./Services.module.scss";

export const Services = () => {
  return (
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
              <p className={style.servicesText}>Технічне обслуговування</p>
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
                олива, моторне масло, гальмівна рідина, антифриз, трансмісійне
                масло
              </p>
            </div>
          </li>
          <li className={style.servicesItem}>
            <img className={style.chekImg} src={chek}></img>
            <div>
              <p className={style.servicesText}>Пригон авто із США під ключ</p>
              <p className={style.servicesDescription}>послуги евакуатора</p>
            </div>
          </li>
          <li className={style.servicesItem}>
            <img className={style.chekImg} src={chek}></img>
            <div>
              <p className={style.servicesText}>Відновлення геометрії кузова</p>
              <p className={style.servicesDescription}>
                огляд, ремонт та діагностика
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
