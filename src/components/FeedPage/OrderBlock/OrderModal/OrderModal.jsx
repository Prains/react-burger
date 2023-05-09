import ModalOverlay from "../../../ModalOverlay/ModalOverlay";
import styles from "./OrderModal.module.scss";
import OrderHeader from "./OrderHeader/OrderHeader";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderNumbers from "./OrderNumbers/OrderNumbers";

const OrderModal = ({ close, order, ingredients, totalPrice, date }) => {
  return (
    <ModalOverlay close={close}>
      <article className={styles.article}>
        <OrderHeader
          number={order.number}
          close={close}
          name={order.name}
          status={order.status}
        />
        <p className="text text_type_main-medium">Состав:</p>
        <OrderDetails ingredients={ingredients} />
        <OrderNumbers date={date} totalPrice={totalPrice} />
      </article>
    </ModalOverlay>
  );
};

export default OrderModal;
