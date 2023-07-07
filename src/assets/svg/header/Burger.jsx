import * as React from "react";
const BurgerSVG = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 5.5H15M0 1.5H15M0 9.5H15M0 13.5H15" stroke="#fff" />
  </svg>
);
export default BurgerSVG;
