import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Tabs.module.scss'
import { useState } from "react";


const Tabs = () => {

  const [current, setCurrent] = useState("one");

    return ( 
        <div className={styles.tabs}>
        <Tab value="one" active={current === "one"} onClick={setCurrent} children='Булки'/>
        <Tab value="two" active={current === "two"} onClick={setCurrent} children='Соусы'/>
        <Tab value="three" active={current === "three"} onClick={setCurrent} children='Начинки'/>
        </div>
     );
}
 
export default Tabs;