import styles from "./ProfileHistoryPage.module.scss";
import ProfileRoutes from "../ProfilePage/ProfileRoutes/ProfileRoutes";
import { useEffect, useState } from "react";
import token from "../../utils/token";
import OrderBlock from "../../components/FeedPage/OrderBlock/OrderBlock";

const ProfileHistoryPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let accessToken = token.getAccesToken();
    accessToken = accessToken.replace(/bearer /gi, "");
    const socket = new WebSocket(
      `wss://norma.nomoreparties.space/orders?token=${accessToken}`
    );
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setData(data);
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      {data && (
        <section className={styles.section}>
          <article className={styles.navigation}>
            <ProfileRoutes />
          </article>
          <article className={styles.burgersection}>
            {data.orders === []
              ? data.orders.map((order) => {
                  return <OrderBlock order={order} />;
                })
              : "Заказов нема"}
          </article>
        </section>
      )}
    </>
  );
};

export default ProfileHistoryPage;
