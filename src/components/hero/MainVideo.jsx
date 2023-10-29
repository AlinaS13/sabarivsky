import React, { useRef, useEffect } from "react";

export default function AutoPlaySilentVideo(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      id="video-main"
      ref={videoRef}
      width="100%"
      loop
      autoPlay
      muted
      playsInline
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
}
