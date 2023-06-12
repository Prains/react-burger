import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./OrderHeader.module.scss";
import PropTypes from "prop-types";

const OrderHeader = ({ number, close, name, status }) => {
  return (
    <>
      <div className={styles.header + " mb-5"}>
        <p className="text text_type_main-medium">#{number}</p>
        <CloseIcon
          onClick={() => {
            close();
          }}
        />
      </div>
      <h4 className={styles.uppertitle + " text text_type_main-medium"}>
        {name}
        <span className={styles.titlespan}>
          {status === "done" ? "Выполнен" : "В работе"}
        </span>
      </h4>
    </>
  );
};

OrderHeader.propTypes = {
  number: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["done", "pending"]).isRequired,
};

export default OrderHeader;
