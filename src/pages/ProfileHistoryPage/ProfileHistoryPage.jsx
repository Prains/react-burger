import styles from "./ProfileHistoryPage.module.scss";
import ProfileRoutes from "../ProfilePage/ProfileRoutes/ProfileRoutes";
import token from "../../utils/token";
import OrderBlock from "../../components/FeedPage/OrderBlock/OrderBlock";
import useSocket from "../../hooks/useSocket";
import { socketUrl } from "../../utils/types";

const ProfileHistoryPage = () => {
  const modifiedSocketUrl = socketUrl.replace("/all", "");
  let accessToken = token.getAccesToken();
  accessToken = accessToken.replace(/bearer /gi, "");
  const data = useSocket(`${modifiedSocketUrl}?token=${accessToken}`);

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
                  return <OrderBlock order={order} key={order._id} />;
                })
              : "Заказов нема"}
          </article>
        </section>
      )}
    </>
  );
};

export default ProfileHistoryPage;
