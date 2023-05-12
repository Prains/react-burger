import ModalOverlay from "../../../ModalOverlay/ModalOverlay";
import styles from "./OrderModal.module.scss";
import OrderHeader from "./OrderHeader/OrderHeader";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderNumbers from "./OrderNumbers/OrderNumbers";
import PropTypes from "prop-types";

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

OrderModal.propTypes = {
  close: PropTypes.func.isRequired,
  order: PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["done", "pending"]).isRequired,
  }).isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrderModal;
