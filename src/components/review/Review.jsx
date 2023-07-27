import style from "./Review.module.scss";
import raiting from "../../assets/svg/raiting.svg";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

export const Review = () => {
  return (
    <>
      <section className={style.reviewContainer}>
        <div>
          <p className={style.reviewPreTitle}>що про нас говорять/</p>
          <h2 className={style.reviewTitle}>Відгуки клієнтів</h2>
        </div>
        <Swiper
          freeMode={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          style={{
            "--swiper-pagination-color": "#DFFF00",
            "--swiper-pagination-bullet-inactive-color": "#B3B3B3",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          <SwiperSlide>
            <div className={style.reviewItem}>
              <p className={style.clientName}>Олексій Знамировський</p>
              <p className={style.clientReview}>
                Класна фірма, покрасили супер. Дуже приємно, що віддали чисту
                вимиту тачку
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.reviewItem}>
              <p className={style.clientName}>Вова Болтак</p>
              <p className={style.clientReview}>
                Рено Лагуна. Швидко, якісно та недорого, виконали зварювальну
                роботу, за яку ніхто не хотів братися, щоб довести машину до
                належного стану. Всім раджу!!!
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.reviewItem}>
              <p className={style.clientName}>Максим Старинець</p>
              <p className={style.clientReview}>
                Якісна робота та приємні люди. Рекомендую!
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.reviewItem}>
              <p className={style.clientName}>Вадим Пивторак</p>
              <p className={style.clientReview}>
                Супер, хлопці молодці!!! Ціни чудові!!!
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.reviewItem}>
              <p className={style.clientName}>Вікторія</p>
              <p className={style.clientReview}>
                Фарбувала машину. Влаштувало все повністю: від швидкості
                фарбування до якості виконаних робіт) залишилась задоволена на
                100%. Рекомендуватиму Друзям)
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.reviewItem}>
              <p className={style.clientName}>Евгений Wolf</p>
              <p className={style.clientReview}>
                Jeep Compass Роботою колективу задоволений, ставляться з
                розумінням до клієнта. Спасибі
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.reviewItem}>
              <p className={style.clientName}>Denis Mlt</p>
              <p className={style.clientReview}>
                Индивидуальный подход к каждому авто,адекватная цена,качество.
                Советую!)
              </p>
              <img className={style.starImg} src={raiting}></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
