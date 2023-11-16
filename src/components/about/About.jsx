import style from "./About.module.scss";

import about from "../../assets/img/photo-team.jpg";
export const About = () => {
  return (
    <section className={style.aboutContainer} id="about">
      <div>
        <p className={style.aboutPreTitle}>Хто ми є/</p>
        <h2 className={style.aboutTitle}>Про нас</h2>
        <div>
          <p className={style.aboutText}>
            СТО "Сабарівський малярний цех"- це надійний професійний сервіс
            автомобілів, розташований у місті Вінниці, спеціалізується на
            наданні високоякісних послуг з ремонту автомобілів. У нас ремонтні
            роботи проводяться з урахуванням найвищих стандартів якості.
          </p>
          <p className={style.aboutText}>
            Команда професіоналів забезпечує точність і дбайливість при кожному
            етапі ремонтних робіт Вашого авто.
          </p>
        </div>
      </div>
      <div>
        <img className={style.aboutImg} src={about} alt="car" />
      </div>
    </section>
  );
};
