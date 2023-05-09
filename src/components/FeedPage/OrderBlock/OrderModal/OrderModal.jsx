import {
  CloseIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../../../ModalOverlay/ModalOverlay";
import styles from "./OrderModal.module.scss";

const OrderModal = ({ close, order, ingredients, totalPrice, date }) => {
  return (
    <ModalOverlay close={close}>
      <article className={styles.article}>
        <div className={styles.header + " mb-5"}>
          <p className="text text_type_main-medium">#{order.number}</p>
          <CloseIcon
            onClick={() => {
              close();
            }}
          />
        </div>
        <h4 className={styles.uppertitle + " text text_type_main-medium"}>
          {order.name}
          <span className={styles.titlespan}>
            {order.status === "done" ? "Выполнен" : "В работе"}
          </span>
        </h4>
        <p className="text text_type_main-medium">Состав:</p>
        <div className={styles.overflow}>
          {ingredients.map((ingredient) => {
            return (
              <div key={ingredient._id} className={styles.itemtop}>
                <div className={styles.itemtopbottom}>
                  <img
                    src={ingredient.image_mobile}
                    alt={ingredient.name}
                    className={styles.image}
                  />
                  <p className="text text_type_main-default">
                    {ingredient.name}
                  </p>
                </div>
                <p className={"text text_type_digits-default " + styles.price}>
                  {ingredient.price}
                  <CurrencyIcon />
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.bottombottom + " mt-12"}>
          <p className="text text_type_main-default text_color_inactive">
            {date} i-GMT+3
          </p>
          <p className={"text text_type_main-medium " + styles.price}>
            {totalPrice} <CurrencyIcon />
          </p>
        </div>
      </article>
    </ModalOverlay>
  );
};

export default OrderModal;
