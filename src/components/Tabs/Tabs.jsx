import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Tabs.module.scss'


const Tabs = ({activeTab, setActiveTab}) => {
    return ( 
        <div className={styles.tabs}>
        <a href="/#bun"><Tab value="bun" active={activeTab === "bun"} onClick={setActiveTab} children='Булки'/></a>
        <a href="/#sauce"><Tab value="sauce" active={activeTab === "sauce"} onClick={setActiveTab} children='Соусы'/></a>
        <a href='/#main'><Tab value="main" active={activeTab === "main"} onClick={setActiveTab} children='Начинки'/></a>
        </div>
     );
}
 
export default Tabs;