import React from "react";
import styles from "./ProfileHistoryPage.module.scss";
import ProfileRoutes from "../ProfilePage/ProfileRoutes/ProfileRoutes";
import token from "../../utils/token";
import OrderBlock from "../../components/FeedPage/OrderBlock/OrderBlock";
import useSocket from "../../hooks/useSocket";
import { Order, socketUrl } from "../../utils/types";

const ProfileHistoryPage: React.FC = () => {
  const modifiedSocketUrl = socketUrl.replace("/all", "");
  let accessToken = token.getAccesToken();
  if (accessToken) {
    accessToken = accessToken.replace(/bearer /gi, "");
  }
  const data = useSocket(`${modifiedSocketUrl}?token=${accessToken}`);

  return (
    <>
      {data && (
        <section className={styles.section}>
          <article className={styles.navigation}>
            <ProfileRoutes />
          </article>
          <article className={styles.burgersection}>
            {data.orders.length > 0 ? (
              data.orders.map((order: Order) => {
                return <OrderBlock order={order} key={order._id} />;
              })
            ) : (
              <p>Заказов нема</p>
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default ProfileHistoryPage;
