import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Tabs.module.scss'
import { useState } from "react";


const Tabs = () => {

  const [current, setCurrent] = useState("bun");

    return ( 
        <div className={styles.tabs}>
        <a href="/#bun"><Tab value="bun" active={current === "bun"} onClick={setCurrent} children='Булки'/></a>
        <a href="/#sauce"><Tab value="sauce" active={current === "sauce"} onClick={setCurrent} children='Соусы'/></a>
        <a href='/#main'><Tab value="main" active={current === "main"} onClick={setCurrent} children='Начинки'/></a>
        </div>
     );
}
 
export default Tabs;