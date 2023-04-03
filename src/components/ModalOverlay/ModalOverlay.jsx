import styles from "./ModalOverlay.module.scss";
import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";

const ModalOverlay = ({ close, children }) => {
  const handleOverlayClick = useCallback((e) => {
    if (Array.from(e.target.classList)[0].indexOf("overlay")) close();
  }, [close]);

  const handleEscapeKey = useCallback((e) => {
    if (e.key === "Escape") {
      close();
    }
  }, [close]);

  useEffect(() => {
    document.addEventListener("keyup", handleEscapeKey);
    return () => {
      document.removeEventListener("keyup", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default ModalOverlay;
