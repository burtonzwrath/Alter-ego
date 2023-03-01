import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/navBar/NavBar";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const styles = makeStyles({
  container: {
    backgroundColor: "burlywood",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
});

function SharedLayout() {
  const s = styles()

  return (
    <Box className={s.container}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default SharedLayout;
