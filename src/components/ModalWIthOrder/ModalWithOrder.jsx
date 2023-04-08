import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import OrderDetails from "./OrderDetails/OrderDetails";

const ModalWithOrder = ({ close }) => {
  return (
    <Modal close={close}>
      <OrderDetails />
    </Modal>
  );
};

ModalWithOrder.propTypes = {
  close: PropTypes.func.isRequired,
  header: PropTypes.any,
};

export default ModalWithOrder;
