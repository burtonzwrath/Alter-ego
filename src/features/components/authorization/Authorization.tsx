import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthForm from "./authForm/AuthForm";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/news/newsSlice";
import { Box, Modal, Typography, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";
import {getLocalStorageItem, setLocalStorageItem} from "../../../helpers/locatStorage";

const styles = makeStyles({
  modal: {
    position: "absolute",
    top: "30%",
    left: "30%",
    transform: "translate(-30%, -30%)",
    width: 280,
    backgroundColor: "black",
    border: "2px solid #000",
    padding: 15,
    borderRadius: 10,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "1px",
  },
  buttonWrapper: {
    display: "flex",
    position: "relative",
    cursor: "pointer",
    alignItems: "center",

  },
  buttonHide: {
    width: 120,
    height: 22,
    display: "flex",
    color: "lightsteelblue",
    justifyContent: "center",
    "&:hover": {
      color: "burlywood",
    },
  },
});

const Authorization = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hideForm, setHideForm] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const s = styles();

  useEffect(() => {
    if (localStorage.length !== 0) {
     const access = getLocalStorageItem()
        dispatch(setLogin(access.isLogged));
    }
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === "admin" && password === "1234") {
      setLocalStorageItem(userName, password);
      dispatch(setLogin(true));
      navigate("/profile");
    } else {
      handleOpen();
    }
  };

  return (
    <Box className={s.buttonWrapper} role="button">
      <Box
        className={s.buttonHide}
        onClick={() => setHideForm((prev) => !prev)}
      >
        <LoginIcon /> {t("login")}
      </Box>
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
