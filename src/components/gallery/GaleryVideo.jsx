import React, { useRef, useEffect } from "react";
import style from "./Gallery.module.scss";
export default function GaleryVideo(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      className={style.galleryContent}
      id={props.id}
      ref={videoRef}
      width="100%"
      controls
      preload="metadata"
      muted
      loop
      playsInline
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
}
