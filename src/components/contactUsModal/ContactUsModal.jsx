import { useEffect } from "react";
import styles from "./ContactUsModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { ContactUsForm } from "../contactUsForm/ContactUsForm";
export const ContactUsModal = ({ isOpen, onClose }) => {
  const closeModal = (e) => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalCloseButton}
          onClick={onClose}
        >
          <RxCross2 color="#FAFAF8" className={styles.modalTitle} />
        </button>
        <h2 className={styles.modalTitle}>Є запитання? </h2>
        <p className={styles.modalText}>
          Залиште контакти - ми зв'яжемося з Вами протягом 5 хвилин!
        </p>
        <ContactUsForm onClick={onClose} isOpen={isOpen} />
      </div>
    </div>
  );
};
