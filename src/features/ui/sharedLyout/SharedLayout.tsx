import React from "react";
import styles from "./SharedLayout.module.css";
import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/NavBar";


function SharedLayout() {
  return (
    <div className={styles.container}>
        <NavBar />
        <Outlet />
    </div>
  );
}

export default SharedLayout;
