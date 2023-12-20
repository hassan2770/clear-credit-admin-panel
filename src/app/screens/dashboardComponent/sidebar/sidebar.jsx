import React from "react";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import menuItems from '../../../utils/menuItems';
const Sidebar = () => {
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.turtle}>
        {" "}
        <img src="../turtle.png" alt="turtle" height={50} />
      </div>
      <ul className={styles.list}>
        {menuItems?.map((category) => (
          <li key={category.title}>
            <div className={styles.catdiv}>
              <span className={styles.category}>{category.title}</span>
            </div>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
