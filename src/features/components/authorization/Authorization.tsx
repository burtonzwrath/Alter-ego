import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthForm from "./authForm/AuthForm";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/auth/authSlice";
import { Box, Modal, Typography, Slide, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { authorizationStyles } from "./authorizationStyles";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../../helpers/locatStorage";

const Authorization = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hideForm, setHideForm] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const s = authorizationStyles();
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (localStorage.length !== 0) {
      const access = getLocalStorageItem();
      dispatch(setLogin(access.isLogged));
    }
  }, [dispatch]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === "admin" && password === "12345") {
      setLocalStorageItem(userName, password);
      dispatch(setLogin(true));
      navigate("/profile");
    } else {
      handleOpen();
    }
  };

  return (
    <Box className={s.buttonWrapper} role="button">
      <Button
        className={s.buttonHide}
        onClick={() => setHideForm((prev) => !prev)}
      >
        <LoginIcon /> {t("login")}
      </Button>
      <Slide in={hideForm} timeout={1000} direction="down">
        <Box
          className={s.form}
          component="form"
          sx={{ visibility: hideForm ? "visible" : "hidden" }}
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
        <Box className={s.modal}>
          <Typography
            id="modal-modal-description"
            variant="h6"
            color={"lightgoldenrodyellow"}
          >
            Wrong username or password
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Authorization;
