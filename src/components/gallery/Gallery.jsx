import style from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <section className={style.containerGallery}>
      <div>
        <p className={style.galleryPreTitle}>галерея/</p>
        <h2 className={style.galleryTitle}>Виконані роботи</h2>
      </div>
    </section>
  );
};
