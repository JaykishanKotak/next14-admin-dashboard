import React from "react";
import Sidebar from "../ui/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.menu}>
      <Sidebar />
    </div>
  );
};

export default layout;
