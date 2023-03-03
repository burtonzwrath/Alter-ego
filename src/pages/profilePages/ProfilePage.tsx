import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getLocalStorageItem } from "../../helpers/locatStorage";
import { useTranslation } from "react-i18next";
import { getNews } from "../../redux/news/selectors/selectors";
import profile from "../../assets/image/profilePage/Profile.jpg";
import Box from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { profilePageStyles } from "./profilePageStyles";
import { setFlag } from "../../redux/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const navigate = useNavigate();
  const isLogged = getLocalStorageItem();
  const { t } = useTranslation();
  const s = profilePageStyles();
  const news = useSelector(getNews);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogged) {
      navigate("/home");
    }
    if (news.length !== 0) {
      dispatch(setFlag(true));
    }
  }, [isLogged, navigate, dispatch, news.length]);

  return (
    <Box className={s.profileWrapper}>
      <Typography
        align="center"
        variant="h3"
        sx={{
          fontSize: {
            lg: 47,
            md: 40,
            sm: 30,
            xs: 30,
          },
        }}
      >
        {t("profile")}
      </Typography>
      <img className={s.profileImg} src={profile} alt="ukraine" />
    </Box>
  );
};

export default ProfilePage;
