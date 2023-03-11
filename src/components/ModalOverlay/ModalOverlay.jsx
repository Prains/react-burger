import styles from "./ModalOverlay.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ModalOverlay = (props) => {
  function closeModalIfClickedOnOverlay(e, close) {
    if (~Array.from(e.target.classList)[0].indexOf("overlay")) close();
  }

  function closeIfTapOnEsc(e) {
    if (e.key === "Escape") {
      document.close();
      document.close = null;
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", closeIfTapOnEsc);
    document.close = props.close;
    return () => {
      document.removeEventListener("keyup", closeIfTapOnEsc);
    };
  }, [props.close]);

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        closeModalIfClickedOnOverlay(e, props.close);
      }}
    >
      {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default ModalOverlay;
