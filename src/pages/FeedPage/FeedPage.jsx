import styles from "./FeedPage.module.scss";
import OrderBlock from "../../components/FeedPage/OrderBlock/OrderBlock";
import useSocket from "../../hooks/useSocket";

const FeedPage = () => {
  const data = useSocket("wss://norma.nomoreparties.space/orders/all");
  const doneObjects = data?.orders
    .filter((obj) => obj.status === "done")
    .slice(0, 10);

  const doneObjectIds = doneObjects?.map((obj) => obj.number);

  const pendingObjects = data?.orders
    .filter((obj) => obj.status === "pending")
    .slice(0, 10);

  const pendingObjectIds = pendingObjects?.map((obj) => obj.number);

  return (
    <>
      {data && (
        <section className={styles.section}>
          <div className={styles.order}>
            {data.orders.map((order) => {
              return <OrderBlock order={order} key={order._id} />;
            })}
          </div>
          <div>
            <div className={styles.toppanel + " mb-15"}>
              <article>
                <h4 className={"text text_type_main-medium mb-6 " + styles.box}>
                  Готовы:
                </h4>
                <ul className={styles.ul}>
                  {doneObjectIds.map((item) => {
                    return (
                      <li
                        key={item}
                        className={styles.li + " text text_type_digits-medium"}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </article>
              <article>
                <h4 className="text text_type_main-medium mb-6">В работе:</h4>
                {pendingObjectIds.map((item) => {
                  return (
                    <li
                      key={item}
                      className={styles.li + " text text_type_digits-medium"}
                    >
                      {item}
                    </li>
                  );
                })}
              </article>
            </div>
            <article className="mb-15">
              <p className="text text_type_main-medium">
                Выполнено за все время:
              </p>
              <p className={"text text_type_digits-large " + styles.glow}>
                {data.total}
              </p>
            </article>
            <article>
              <p className="text text_type_main-medium">
                Выполнено за сегодня:
              </p>
              <p className={"text text_type_digits-large " + styles.glow}>
                {data.totalToday}
              </p>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default FeedPage;
