import Modal from "../Modal/Modal";
import React from "react";
import OrderDetails from "./OrderDetails/OrderDetails";

interface ModalWithOrderProps {
  close: () => void;
}

const ModalWithOrder: React.FC<ModalWithOrderProps> = ({ close }) => {
  return (
    <Modal close={close}>
      <OrderDetails />
    </Modal>
  );
};

export default ModalWithOrder;
