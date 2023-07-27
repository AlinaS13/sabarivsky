import style from "./Gallery.module.scss";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../review/styles.css";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [mySwiper, setMySwiper] = useState(null);

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

  return (
    <>
      <section className={style.containerGallery}>
        <div>
          <p className={style.galleryPreTitle}>галерея/</p>
          <h2 className={style.galleryTitle}>Виконані роботи</h2>
        </div>
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
          style={{
            "--swiper-pagination-color": "#DFFF00",
            "--swiper-pagination-bullet-inactive-color": "#B3B3B3",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          <SwiperSlide>
            <video
              id="video-1"
              className={style.videoContent}
              src="../../../src/assets/video/001.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-2"
              className={style.videoContent}
              src="../../../src/assets/video/002.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-3"
              className={style.videoContent}
              src="../../../src/assets/video/011.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-4"
              className={style.videoContent}
              src="../../../src/assets/video/004.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-5"
              className={style.videoContent}
              src="../../../src/assets/video/005.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-6"
              className={style.videoContent}
              src="../../../src/assets/video/006.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-7"
              className={style.videoContent}
              src="../../../src/assets/video/007.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-8"
              src="../../../src/assets/video/008.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-9"
              src="../../../src/assets/video/009.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              id="video-10"
              src="../../../src/assets/video/010.m4v"
              width="100%"
              controls
              preload="auto"
            ></video>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
