import React from "react";
import Sidebar from "../screens/dashboardComponent/sidebar/sidebar";
import Navbar from "../screens/dashboardComponent/navbar/navbar";
import styles from "../screens/dashboardComponent/dashboard.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.navbarContainer}>
        <Navbar />
        <div> {children}</div>
      </div>
    </div>
  );
};

export default Layout;
