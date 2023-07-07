import style from "./Dropdown.module.scss";

import { useState } from "react";

import { useEffect } from "react";

const Dropdown = ({ isDropdownActive, setIsDropdownActive }) => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const KEY_NAME_ESC = "Escape";
  const KEY_EVENT_TYPE = "keyup";

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleClose, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleClose, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose(e) {
    if (e.key === KEY_NAME_ESC) {
      setIsDropdownActive(false);
    }
  }

  return (
    <div
      onClick={() => {
        setIsDropdownActive(false);
      }}
      className={`${style.dropdown} ${
        isDropdownActive ? "" : style.dropdownHidden
      }`}
    >
      <div
        className={style.dropdownContent}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Dropdown;
