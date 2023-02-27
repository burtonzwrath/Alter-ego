import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthForm from "./authForm/AuthForm";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/news/newsSlice";
import { Box, Modal, Typography, Slide } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslation } from "react-i18next";

const Authorization = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hideForm, setHideForm] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.length !== 0) {
      const key = localStorage.getItem("currentUser");
      if (key != null) {
        const access = JSON.parse(key);
        dispatch(setLogin(access.isLogged));
      }
    }
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === "admin" && password === "1234") {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: userName,
          password: password,
          isLogged: true,
        })
      );
      dispatch(setLogin(true));
      navigate("/profile");
    } else {
      handleOpen();
    }
  };

  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    transform: "translate(-30%, -30%)",
    width: 280,
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
  };

  return (
    <Box
      role="button"
      sx={{
        display: "flex",
        position: "relative",
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 120,
          height: 22,
          display: "flex",
          color: "mediumslateblue",
          justifyContent: "center",
        }}
        onClick={() => setHideForm((prev) => !prev)}
      >
        <LoginIcon /> {t("login")}
      </Box>
      <Slide in={hideForm} timeout={1000} direction="down">
        <Box
          component="form"
          sx={{
            visibility: hideForm ? "visible" : "hidden",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "60px",
            right: "1px",
          }}
          onSubmit={handleLogin}
        >
          <AuthForm
            setUserName={setUserName}
            setPassword={setPassword}
            password={password}
            userName={userName}
            setHideForm={setHideForm}
          />
        </Box>
      </Slide>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            variant="h6"
            color={"red"}
            sx={{ mt: 2 }}
          >
            Wrong username or password
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Authorization;
