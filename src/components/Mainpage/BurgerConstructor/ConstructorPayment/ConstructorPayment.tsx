import React from "react";
import styles from "./ConstructorPayment.module.scss";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

interface ConstructorPaymentProps {
  totalPrice: number;
  setOrderVisibility: (visible: boolean) => void;
  visibility: boolean;
  user: any;
}

const ConstructorPayment: React.FC<ConstructorPaymentProps> = ({
  totalPrice,
  setOrderVisibility,
  visibility,
  user,
}) => {
  return (
    <div className={styles.payment}>
      <p className={`text text_type_digits-medium ${styles.text}`}>
        {totalPrice} <CurrencyIcon type="primary" />
      </p>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => {
          if (user) {
            setOrderVisibility(true);
          } else {
            alert("Войдите в свой аккаунт, чтобы сделать заказ");
          }
        }}
        disabled={!visibility}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

export default ConstructorPayment;
