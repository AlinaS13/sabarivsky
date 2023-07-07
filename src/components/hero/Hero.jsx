import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.containerHero}>
      <h1 className={style.heroTitle}>Досвід та інновації для Вашого авто</h1>
      <p className={style.heroText}>
        Професійний сервіс автомобілів у місті Вінниці, що забезпечує
        високоякісні послуги з ремонту кузова та фарбування в автомобільних
        стандартах.
      </p>
      <div className={style.heroBtnWrp}>
        <button type="button" className={style.heroBtn}>
          Зв’язатися з нами
        </button>
      </div>
    </section>
  );
};
