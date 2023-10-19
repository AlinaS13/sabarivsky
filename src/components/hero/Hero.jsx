import { useState } from "react";
import style from "./Hero.module.scss";
import { ContactUsModal } from "../contactUsModal/ContactUsModal";

export const Hero = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  return (
    <section className={style.heroContainer}>
      <h1 className={style.heroTitle}>Досвід та інновації для Вашого авто</h1>
      <p className={style.heroText}>
        Професійний сервіс автомобілів у місті Вінниці, що забезпечує
        високоякісні послуги з ремонту кузова та фарбування в автомобільних
        стандартах.
      </p>
      <div className={style.heroBtnWrp}>
        <button
          onClick={() => openModal()}
          type="button"
          className={style.heroBtn}
        >
          Зв’язатися з нами
        </button>
      </div>
      {isOpenModal && (
        <ContactUsModal isOpen={isOpenModal} onClose={closeModal} />
      )}
    </section>
  );
};
