import style from "./About.module.scss";

export const About = () => {
  return (
    <section className={style.aboutContainer}>
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
      <img
        className={style.aboutImg}
        srcSet="../../../src/assets/img/about/about-300.jpg 300w, 
        ../../../src/assets/img/about/about-600.jpg 600w, 
        ../../src/assets/img/about/about-1200.jpg 1200w"
        sizes=" (min-width: 1200px) 900px,(min-width: 900px) 600px, (min-width: 600px) 300px, 100vw"
        src="../../assets/img/about/about-300.jpg"
        alt="car"
      />
    </section>
  );
};
