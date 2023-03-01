import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getLocalStorageItem } from "../../helpers/locatStorage";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Stack";
import { Typography } from "@mui/material";
import profile from "../../assets/image/profilePage/profile.png";
import { profilePageStyles } from "./profilePageStyles";

const ProfilePage = () => {
  const navigate = useNavigate();
  const isLogged = getLocalStorageItem();
  const { t } = useTranslation();
  const s = profilePageStyles();

  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged]);

  return (
    <Box className={s.profileWrapper}>
      <Typography
        align="center"
        variant="h3"
        sx={{
          fontSize: {
            lg: 60,
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
