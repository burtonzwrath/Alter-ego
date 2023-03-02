import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/navBar/NavBar";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { sharedLayoutStyles } from "./sharedLayoutStyles";

function SharedLayout() {
  const s = sharedLayoutStyles();

  return (
    <Box className={s.container}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default SharedLayout;
