import styles from "./OrderNumbers.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface OrderNumbersProps {
  totalPrice: number;
  date: string;
}

const OrderNumbers: React.FC<OrderNumbersProps> = ({ totalPrice, date }) => {
  return (
    <div className={styles.bottombottom + " mt-12"}>
      <p className="text text_type_main-default text_color_inactive">
        {date} i-GMT+3
      </p>
      <p className={"text text_type_main-medium " + styles.price}>
        {totalPrice} <CurrencyIcon type="primary" />
      </p>
    </div>
  );
};

export default OrderNumbers;
