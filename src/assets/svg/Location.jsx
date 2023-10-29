import * as React from "react";
const LocationSVG = (props) => (
  <svg
    fill="#DFFF00"
    width="20"
    height="20"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 20 20"
    enableBackground="new 0 0 20 20"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M9.3,19.7C8.5,18.9,2,12.2,2,8c0-4.4,3.6-8,8-8s8,3.6,8,8c0,4.2-6.5,10.9-7.3,11.7C10.3,20.1,9.7,20.1,9.3,19.7z M10,2 C6.7,2,4,4.7,4,8c0,2.5,3.8,7.2,6,9.5c2.2-2.3,6-7,6-9.5C16,4.7,13.3,2,10,2z" />
    <circle cx={10} cy={8} r={2} />
  </svg>
);
export default LocationSVG;
