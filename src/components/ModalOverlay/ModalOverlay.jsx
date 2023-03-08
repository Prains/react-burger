import styles from "./ModalOverlay.module.scss";

const ModalOverlay = (props) => {

  function closeModalIfClickedOnOverlay(e, close) {
    if (~Array.from(e.target.classList)[0].indexOf('overlay')) close();
  }

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        closeModalIfClickedOnOverlay(e, props.close)
      }}
    >
      {props.children}
    </div>
  );
};

export default ModalOverlay;
