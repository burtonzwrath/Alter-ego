import React from "react";
import styles from "./SharedLayout.module.css";
import { Outlet } from "react-router";
import NavBar from "../../components/navBar/NavBar";
import { Box } from "@mui/material";


function SharedLayout() {
  return (
    <Box className={styles.container}>
        <NavBar />
        <Outlet />
    </Box>
  );
}

export default SharedLayout;
