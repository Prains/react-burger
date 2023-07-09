import React, { useEffect, useCallback } from "react";
import styles from "./ModalOverlay.module.scss";

interface ModalOverlayProps {
  close: () => void;
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ close, children }) => {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        e.target &&
        (e.target as HTMLDivElement).classList.contains(styles.overlay)
      ) {
        close();
      }
    },
    [close]
  );

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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

export default ModalOverlay;
