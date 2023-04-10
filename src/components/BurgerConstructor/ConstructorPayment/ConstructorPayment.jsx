import styles from "./ConstructorPayment.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ConstructorPayment = ({ totalPrice, setOrderVisibility }) => {
  return (
    <div className={styles.payment}>
      <p className={`text text_type_digits-medium ${styles.text}`}>
        {totalPrice} <CurrencyIcon />
      </p>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => setOrderVisibility(true)}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

ConstructorPayment.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  setOrderVisibility: PropTypes.func.isRequired,
};

export default ConstructorPayment;
