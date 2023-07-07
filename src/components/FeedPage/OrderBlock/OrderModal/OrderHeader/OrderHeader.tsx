import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./OrderHeader.module.scss";

interface OrderHeaderProps {
  number: number;
  close: () => void;
  name: string;
  status: string;
}

const OrderHeader: React.FC<OrderHeaderProps> = ({
  number,
  close,
  name,
  status,
}) => {
  return (
    <>
      <div className={styles.header + " mb-5"}>
        <p className="text text_type_main-medium">#{number}</p>
        <CloseIcon
          type="primary"
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

export default OrderHeader;
