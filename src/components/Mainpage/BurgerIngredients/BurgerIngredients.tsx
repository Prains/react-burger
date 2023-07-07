import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemsSection from "../ItemsSection/ItemsSection";
import Tabs from "../Tabs/Tabs";
import styles from "./BurgerIngredients.module.scss";

const BurgerIngredients: React.FC = () => {
  const { ingredients } = useSelector((state: any) => state.ingredients);

  const {
    bun: bunsData,
    sauce: sauceData,
    main: flavoursData,
  } = ingredients.reduce((acc: any, ingredient: any) => {
    acc[ingredient.type] = [...(acc[ingredient.type] || []), ingredient];
    return acc;
  }, {});

  const sectionsData = {
    bun: { id: "bun", title: "Булки", data: bunsData },
    sauce: { id: "sauce", title: "Соусы", data: sauceData },
    main: { id: "main", title: "Начинки", data: flavoursData },
  };

  const [activeTab, setActiveTab] = useState("bun");
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const tabs = sectionRef.current?.querySelectorAll("h2");
      let closestTab: HTMLElement | null = tabs ? tabs[0] : null;
      let closestDistance = Infinity;

      tabs?.forEach((tab) => {
        const distance = Math.abs(tab.getBoundingClientRect().top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestTab = tab;
        }
      });

      if (closestTab) {
        setActiveTab(closestTab.id);
      }
    };

    sectionRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      sectionRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.burgeringredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className={styles.items} ref={sectionRef}>
        {Object.entries(sectionsData).map(([key, { id, title, data }]) => (
          <React.Fragment key={key}>
            <h2 className="text text_type_main-large" id={id}>
              {title}
            </h2>
            <ItemsSection data={data} />
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default BurgerIngredients;
