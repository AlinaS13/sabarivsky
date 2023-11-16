import style from "./Gallery.module.scss";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "react-tuby/css/main.css";

import "../review/styles.css";
import { useEffect, useState } from "react";
import video1 from "../../assets/video/001.m4v";
import video2 from "../../assets/video/002.m4v";
import video3 from "../../assets/video/003.m4v";
import video4 from "../../assets/video/004.m4v";
import video5 from "../../assets/video/005.m4v";
import video6 from "../../assets/video/006.m4v";
import video7 from "../../assets/video/007.m4v";
import video8 from "../../assets/video/008.m4v";
import GaleryVideo from "./GaleryVideo";
import car1 from "../../assets/img/gallery/001.jpg";
import car2 from "../../assets/img/gallery/002.jpg";
import car3 from "../../assets/img/gallery/003.jpg";
import car4 from "../../assets/img/gallery/004.jpg";
import car5 from "../../assets/img/gallery/005.jpg";

import car7 from "../../assets/img/gallery/007.jpg";
export const Gallery = () => {
  const [mySwiper, setMySwiper] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const videoElements = document.getElementsByTagName("video");
    const handleVideoPlay = (e) => {
      if (mySwiper) {
        mySwiper.stop();
      }

      for (const video of videoElements) {
        if (e.target.id === video.id) {
          continue;
        }
        video.pause();
      }
    };

    const handleVideoPause = () => {
      if (mySwiper) {
        mySwiper.start();
      }
    };

    for (const video of videoElements) {
      video.addEventListener("play", handleVideoPlay);
      video.addEventListener("pause", handleVideoPause);
    }
  }, [mySwiper]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 766px)");

    const handleDeviceChange = (e) => {
      if (e.matches) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    mediaQuery.addListener(handleDeviceChange);
    handleDeviceChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleDeviceChange);
    };
  }, []);

  const swiperStyles = {
    "--swiper-pagination-color": "#DFFF00",
    "--swiper-pagination-bullet-inactive-color": "#B3B3B3",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  };

  return (
    <>
      <section className={style.galleryContainer} id="gallery">
        <div>
          <p className={style.galleryPreTitle}>галерея/</p>
          <h2 className={style.galleryTitle}>Виконані роботи</h2>
        </div>
        {!isMobileView ? (
          <Swiper
            onInit={(swiper) => {
              setMySwiper(swiper.autoplay);
            }}
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
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            style={swiperStyles}
          >
            <SwiperSlide>
              <GaleryVideo video={video1} id={video1} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video2} id={video2} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video3} id={video3} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video4} id={video4} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video5} id={video5} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video6} id={video6} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video7} id={video7} />
            </SwiperSlide>
            <SwiperSlide>
              <GaleryVideo video={video8} id={video8} />
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            onInit={(swiper) => {
              setMySwiper(swiper.autoplay);
            }}
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
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            style={swiperStyles}
          >
            <SwiperSlide>
              <img src={car1} alt="car" className={style.galleryContent} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car2} alt="car" className={style.galleryContent} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car3} alt="car" className={style.galleryContent} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car4} alt="car" className={style.galleryContent} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={car5} alt="car" className={style.galleryContent} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={car7} alt="car" className={style.galleryContent} />
            </SwiperSlide>
          </Swiper>
        )}
      </section>
    </>
  );
};
