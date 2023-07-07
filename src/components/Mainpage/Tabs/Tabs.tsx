import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Tabs.module.scss";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabs}>
      <a href="/#bun">
        <Tab
          value="bun"
          active={activeTab === "bun"}
          onClick={() => setActiveTab("bun")}
        >
          Булки
        </Tab>
      </a>
      <a href="/#sauce">
        <Tab
          value="sauce"
          active={activeTab === "sauce"}
          onClick={() => setActiveTab("sauce")}
        >
          Соусы
        </Tab>
      </a>
      <a href="/#main">
        <Tab
          value="main"
          active={activeTab === "main"}
          onClick={() => setActiveTab("main")}
        >
          Начинки
        </Tab>
      </a>
    </div>
  );
};

export default Tabs;
