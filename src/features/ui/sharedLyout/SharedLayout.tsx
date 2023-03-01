import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/navBar/NavBar";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const styles = makeStyles({
  container: {
    border: "13px solid black",
    backgroundColor: "burlywood",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight:"800px",
    maxWidth:"1400px",
    margin:"0 auto"
  },
});

function SharedLayout() {
  const s = styles();

  return (
    <Box className={s.container}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default SharedLayout;
